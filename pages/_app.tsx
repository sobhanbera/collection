import {AppProps} from 'next/app'

import {ThemeProvider} from '../contexts'
import '../styles/globals.scss'

export default function App({Component, pageProps}: AppProps) {
    return (
        <div>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </div>
    )
}
