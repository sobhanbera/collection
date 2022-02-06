import React from 'react'

import Button from '../components/button'
import {useTheme} from '../contexts'

type Props = {}
export default function Home({}: Props) {
    const {theme, toggleTheme} = useTheme()

    return (
        <div>
            <Button
                content={theme ? 'Dark Theme' : 'Light Theme'}
                onClick={() => {
                    toggleTheme()
                    console.log('Toggling Theme')
                }}
            />
        </div>
    )
}
