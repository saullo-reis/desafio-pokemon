import { createContext, useState } from 'react'
import solSky from '../assets/img/ceu.png'
import moonSky from '../assets/img/ceu-dark.jpg'
import solFloor from '../assets/img/chao.jpg'
import moonFloor from '../assets/img/chao-dark.jpg'
import moon from '../assets/img/lua.png'
import sol from '../assets/img/sol.png'

export const themes = {
    light: {
        color:'#000000',
        background:'#ffffff',
        backgroundBox:'#87ceeb',
        backgroundImageSky: solSky,
        backgroundImageFloor: solFloor,
        themeButton: moon,
        
    },
    dark:{
        color:'#ffffff',
        background:'#3E3B3B',
        backgroundBox:'#5E5E5E',
        backgroundImageSky: moonSky,
        backgroundImageFloor: moonFloor,
        themeButton:sol,
    }
}



export const ThemeContext = createContext({})

export const ThemeProvider = ( props ) => {

    const[theme, setTheme] = useState(themes.light)


    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}