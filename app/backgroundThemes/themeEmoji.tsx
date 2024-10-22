"use client"

import { useEffect, useRef, useState } from "react"

export default function ThemeEmoji({ emoji }: {
    emoji: string
}) {
    const emojiRef = useRef<HTMLDivElement | null>(null)

    // The bounds of the parent container
    const [bounds, setBounds] = useState<{ x: number, y: number } | null>(null)

    useEffect(() => {
        if (emojiRef.current) {
            const parentElement = emojiRef.current.parentElement
            if (parentElement) {
                console.log(parentElement.getBoundingClientRect())
                const { width, height } = parentElement.getBoundingClientRect()

                const randomX = Math.floor(Math.random() * (width - 20 + 1)) + 20
                const randomY = Math.floor(Math.random() * (height - 20 + 1)) + 20

                console.log(randomX, randomY)

                emojiRef.current.style.left = (randomX - 20).toString() + "px"
                emojiRef.current.style.top = (randomY - 20).toString() + "px"
                setBounds({x: width, y: height})
            }
        }
    }, [])
    return <div className="absolute w-5 h-5 " ref={emojiRef}>{emoji}</div>
}