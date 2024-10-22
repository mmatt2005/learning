"use client"

import { useState } from "react"
import ThemeEmoji from "./themeEmoji"

interface Theme {
    name: string
    hex: string
    emojis?: string[]
}

export const DEFAULT_THEMES: Theme[] = [
    {
        name: "default",
        hex: "#rfg",

    },
    {
        name: "dark",
        hex: "#000000"
    },
    {
        name: "light",
        hex: "#f9f1f1"
    },
    {
        name: "Halloween",
        hex: "#ff9a00",
        emojis: ["🎃", "🕸️", "🧟‍♂️", "🧟‍♀️", "🧙", "👻", "🪦", "🧛"]
    },
    {
        name: "Thanksgiving",
        hex: "#b6562a",
        emojis: ["🦃", "🍗", "🥧", "🍂", "🌽", "🌽"]
    },
    {
        name: "Christmas",
        hex: "#BB2528",
        emojis: ["🎄", "🎅", "🤶", "🎁", "⛄", "❄️", "🥛", "🍪", "🦌"]
    }
]

export default function BackgroundTheme() {
    const [themes, setThemes] = useState<Theme[]>(DEFAULT_THEMES)
    const [selectedTheme, setSelectedTheme] = useState<Theme>(DEFAULT_THEMES[0])

    const isThemeSelected = (theme: Theme): boolean => {
        if (selectedTheme.name === theme.name) return true
        return false
    }

    

    return <div className={`flex flex-wrap gap-5 p-5 h-screen`} style={{backgroundColor: selectedTheme.hex}}>
        {
            themes.map(theme => {
                return <div
                    className={
                        `w-40 h-40 border flex items-center justify-center rounded-sm  relative
                    ${isThemeSelected(theme) && "border-blue-500 border-4"}
                    hover:border-4 cursor-pointer transition-all
                    `}
                    style={{ backgroundColor: theme.hex }}
                    key={theme.name}
                    onClick={() => setSelectedTheme(theme)}
                >
                    <p className="z-10">{theme.name}</p>
                    {
                        theme.emojis && theme.emojis.map(emoji => (
                            <ThemeEmoji emoji={emoji}/>
                        ))
                    }
                </div>
            })
        }
    </div>
}