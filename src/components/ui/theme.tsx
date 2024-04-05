"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "./button"
import { useTheme } from "next-themes"

const Theme = () => {
    const { setTheme, theme } = useTheme();
    return (
        <Button variant="outline" size="icon" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="ml-4">
            {theme === 'light' ? <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" onClick={() => setTheme("light")} /> : <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" onClick={() => setTheme("dark")} />}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

export default Theme