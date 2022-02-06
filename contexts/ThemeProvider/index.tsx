import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {ThemeType} from '../../modals'

/**
 * defaultTheme {boolean} is the default theme property throughout the website
 * if true it will be light theme else it will be dark theme
 */
const defaultTheme = true
/**
 * defaultThemeCode and defaultInvertThemeCode are the actual css class that are
 * responsible for the colore schemes in the websites global scss file...
 */
const defaultThemeCode = 'light'
const defaultInvertThemeCode = 'dark'
/**
 * ThemeContextProvider {interface} this is the type of data which will could be
 * accessed from any part of the website through any react component
 */
interface ThemeContextProviderProps {
    /**
     * @param {boolean} theme value denoting the current theme
     * true means the default theme else invert of it
     */
    theme: boolean
    /**
     * by default this function will toggle the current theme if the current theme is dark then it will make it light
     * else to dark, this function will also help to save that data to local storage again and again
     * @param {ThemeType} theme is optional and if provided then the function will not toggle theme instead it will set the theme to the passed argument
     */
    toggleTheme(_theme?: ThemeType): null
}
const ThemeContextProvider = createContext<ThemeContextProviderProps>({
    theme: defaultTheme,
    toggleTheme: (_theme?: ThemeType) => null,
})
/**
 * actual children for the website to render the page
 */
interface ThemeProviderProps {
    children: ReactNode
}
/**
 * the theme provider context api
 */
export default function ThemeProvider(props: ThemeProviderProps) {
    /**
     * @param {boolean} theme value denoting the current theme
     * true means the default theme else invert of it
     */
    const [theme, setTheme] = useState<boolean>(defaultTheme)

    /**
     * by default this function will toggle the current theme if the current theme is dark then it will make it light
     * else to dark, this function will also help to save that data to local storage again and again
     * @param {ThemeType} theme is optional and if provided then the function will not toggle theme instead it will set the theme to the passed argument
     */
    const toggleTheme = (theme?: ThemeType): null => {
        setTheme(value => !value)
        return null
    }

    /**
     * get the theme from local storage if it exists else set the default theme
     * this task should be done only once and when the website is loaded
     */
    const getThemeDataFromLocalStorage = () => {
        const theme = localStorage.getItem('theme')
        if (theme === String(defaultTheme)) {
            setTheme(defaultTheme)
        } else {
            setTheme(!defaultTheme)
        }
    }

    /**
     * updating the theme value in the local storage
     * whenever the theme value is changed
     */
    useEffect(() => {
        localStorage.setItem('theme', theme.toString())
        document.body.classList.value = theme
            ? defaultThemeCode
            : defaultInvertThemeCode
    }, [theme])

    useEffect(() => {
        getThemeDataFromLocalStorage()
    }, [])

    // value of the context api - ThemeProvider
    const value = {
        theme,
        toggleTheme,
    }
    return (
        <ThemeContextProvider.Provider value={value}>
            <div className={theme ? defaultThemeCode : defaultInvertThemeCode}>
                {props.children}
            </div>
        </ThemeContextProvider.Provider>
    )
}
/*
 * use the context api values from this variable
 */
export const useTheme = () => useContext(ThemeContextProvider)
