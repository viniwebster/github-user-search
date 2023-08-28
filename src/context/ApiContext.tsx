import { IUser } from "Interface/IUser";
import axios from "axios";
import React, { useContext, createContext, useEffect, useState } from "react";

interface ApiProviderProps {
  children: React.ReactNode;
  search?: string;
}

interface ApiContext {
  name: string;
  icon: string;
  description: string;
  repos: number;
  followers: number;
  following: number;
  location: string;
  createAt: string;
  twitter: string | null;
  company: string | null;
  blog: string | null;
  user: string;
  search: string;
  setSearch: (input: string) => void;
  searchUser: (event: React.FormEvent<HTMLFormElement>) => void;
  erro?: boolean;
}

export const ApiContext = createContext({} as ApiContext);

export default function ApiProvider({ children }: ApiProviderProps) {
  const [search, setSearch] = useState("");

  const [name, setName] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [icon, setIcon] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [repos, setRepos] = useState<number>(0);
  const [followers, setFollowers] = useState<number>(0);
  const [following, setFollowing] = useState<number>(0);
  const [location, setLocation] = useState<string>("");
  const [createAt, setCreateAt] = useState<string>("");
  const [twitter, setTwitter] = useState<string | null>("");
  const [company, setCompany] = useState<string | null>("");
  const [blog, setBlog] = useState<string>("");
  const [erro, setErro] = useState(false);

  useEffect(() => {
    axios
      .get<IUser>(`https://api.github.com/users/viniwebster`)
      .then((response) => {
        setName(response.data.name);
        setUser(response.data.login);
        setIcon(response.data.avatar_url);
        setDescription(response.data.bio);
        setRepos(response.data.public_repos);
        setFollowers(response.data.followers);
        setLocation(response.data.location);
        setCreateAt(response.data.created_at);
        setTwitter(response.data.twitter_username);
        setCompany(response.data.company);
        setBlog(response.data.blog);
        setFollowing(response.data.following);
      })
      .catch((erro) => console.log(erro));
  }, []);

  function searchUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    axios
      .get<IUser>(`https://api.github.com/users/${search}`)
      .then((response) => {
        setSearch("");
        setName(response.data.name);
        setUser(response.data.login);
        setIcon(response.data.avatar_url);
        setDescription(response.data.bio);
        setRepos(response.data.public_repos);
        setFollowers(response.data.followers);
        setLocation(response.data.location);
        setCreateAt(response.data.created_at);
        setTwitter(response.data.twitter_username);
        setCompany(response.data.company);
        setBlog(response.data.blog);
        setFollowing(response.data.following);
        setErro(false);
      })
      .catch(() => setErro(true));
  }

  return (
    <ApiContext.Provider
      value={{
        name: name,
        user: user,
        blog: blog,
        company: company,
        createAt: createAt,
        description: description,
        followers: followers,
        icon: icon,
        location: location,
        repos: repos,
        twitter: twitter,
        following: following,
        search: search,
        setSearch: setSearch,
        searchUser: searchUser,
        erro: erro,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export function dados() {
  return useContext(ApiContext);
}
