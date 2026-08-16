import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

import ToggleThemeBtn from '../components/ui/ToggleThemeBtn'

const navLinks = [
    { name: 'صفحه اصلی', path: '/' },
    { name: 'بازار و معامله', path: '/shop' },
    { name: 'خدمات ناسا گلد', path: '/services' },
    { name: 'مجله آموزشی', path: '/blog' },
    { name: 'درباره ما', path: '/about' },
    { name: 'تماس با ما', path: '/contact' },
]

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[var(--color-bg)]/80 border-b border-[var(--color-border-gold)]/20 transition-all duration-300 shadow-lg">
            <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">

                {/* Logo & Brand */}
                <Link to="/" className="flex items-center gap-3 group">
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        src={`${import.meta.env.BASE_URL}icon.png`}
                        alt="Nasa Gold Logo"
                        className="h-10 w-auto object-contain drop-shadow-[0_0_8px_var(--color-gold-glow)] dark:brightness-0 dark:invert transition-all duration-300"
                    />
                    <div className="hidden sm:flex flex-col">
                        <h1 className="font-bold text-lg leading-none text-gold-gradient tracking-wide">
                            NASA GOLD
                        </h1>
                        <span className="text-[10px] text-[var(--color-text-muted)] font-medium mt-1">
                            سامانه هوشمند طلا و سکه
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-7">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-sm transition-colors duration-200 relative py-1 hover:text-[var(--color-primary)] ${isActive
                                    ? 'text-[var(--color-primary)] font-bold'
                                    : 'text-[var(--color-text-muted)] font-medium'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <span>{link.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavIndicator"
                                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-gold-light)] to-[var(--color-primary)] rounded-full"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                {/* Action Buttons */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                    <ToggleThemeBtn className="h-10 w-10" />

                    {/* Contact Us Button */}
                    <Link to="/contact" className="flex items-center">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="btn-gold flex items-center justify-center gap-2 h-10 px-4 rounded-xl text-xs sm:text-sm cursor-pointer shadow-md"
                        >
                            <Phone className="w-4 h-4" />
                            <span>تماس با ما</span>
                        </motion.button>
                    </Link>

                    {/* Mobile Menu Toggle Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="lg:hidden h-10 w-10 flex items-center justify-center rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        aria-label="منوی اصلی"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-5 h-5 text-[var(--color-primary)]" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="lg:hidden overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur-2xl"
                    >
                        <div className="container mx-auto px-4 py-5 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `px-4 py-3 rounded-xl text-sm transition-all ${isActive
                                            ? 'bg-[var(--color-border-gold)]/20 text-[var(--color-primary)] border-r-4 border-[var(--color-primary)] font-bold'
                                            : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-hover)] font-medium'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}

                            <div className="pt-3 mt-2 border-t border-[var(--color-border)]">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-full flex items-center justify-center gap-2 bg-[var(--color-surface-hover)] border border-[var(--color-border)] text-[var(--color-text)] py-2.5 rounded-xl text-sm font-medium hover:border-[var(--color-primary)] transition-colors"
                                >
                                    <Phone className="w-4 h-4 text-[var(--color-primary)]" />
                                    <span>ارتباط با پشتیبانی</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header