import { bgLight, bgLightSecondary, txtLowContrast, bg, bgSecondary, txtHighContrast } from 'UI/variables'

export const LightMode = {
    bg: bgLight,
    bgBox: bgLightSecondary,
    text: txtLowContrast
}

export const DarkMode = {
    bg: bgSecondary,
    bgBox: bg,
    text: txtHighContrast
}