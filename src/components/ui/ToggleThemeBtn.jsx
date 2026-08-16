import { useState, useEffect } from 'react'
import { Sun, Moon } from "lucide-react"
import { motion, AnimatePresence } from 'framer-motion'

const ToggleThemeBtn = ({ className = "" }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme) return savedTheme
        
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    })

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        localStorage.setItem("theme", theme)
    }, [theme])

    return (
        <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={toggleTheme}
            className={`p-2 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors flex items-center justify-center cursor-pointer ${className}`}
            aria-label="تغییر تم سایت"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ y: -10, opacity: 0, rotate: -45 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 10, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                >
                    {theme === "light" ? (
                        <Moon className="w-5 h-5 text-amber-500" />
                    ) : (
                        <Sun className="w-5 h-5 text-yellow-400" />
                    )}
                </motion.div>
            </AnimatePresence>
        </motion.button>
    )
}

export default ToggleThemeBtn