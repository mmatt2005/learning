"use client"

import { useState } from "react"

interface Theme { 
    name: string
    hex: string
    icons?: string[]
}

export const DEFAULT_THEMES: Theme[] = [
    {
        name: "default",
        hex: "#rfg",
        
    },
    {
        name: "dark",
        hex: "#00000"
    },
    {
        name: "light",
        hex: "#ffffff"
    },
    {
        name: "Holloween",
        hex: "#ff9a00",
        icons: ["🎃", "🕸️", "🧟‍♂️", "🧟‍♀️", "🧙", "👻"]
    }, 
    {
        name: "Thanksgiving",
        hex: "#b6562a"
    },
    {
        name: "Christmas",
        hex: "#BB2528"
    }
]

export default function BackgroundTheme() {

const [themes, setThemes] = useState<Theme[]>(DEFAULT_THEMES)
    return <div className="flex flex-wrap gap-5 p-5">
        {
        themes.map(theme => {
            return <div className={`w-40 h-40 border`} style={{backgroundColor: theme.hex}} key={theme.name}>
                {theme.name}
            </div>
        })
        }
    </div>
}