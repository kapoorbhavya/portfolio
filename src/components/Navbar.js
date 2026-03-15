import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/education', label: 'Education' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', h);
        return () => window.removeEventListener('scroll', h);
    }, []);
    useEffect(() => setOpen(false), [location]);

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ${scrolled ? 'bg-white/95 border-b border-[#e0e0e0]' : 'bg-white/80'}`}>
                <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-baseline gap-2">
                        <span className="text-base font-black tracking-tight text-[#0a0a0a]">BHAVYA</span>
                        <span className="label-sm">Portfolio</span>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map(link => (
                            <Link key={link.path} to={link.path}
                                className={`label-sm transition-colors duration-150 hover:text-[#0a0a0a] ${location.pathname === link.path ? 'text-[#0a0a0a]' : 'text-[#999999]'
                                    }`}>
                                {link.label}
                                {location.pathname === link.path && (
                                    <motion.div layoutId="nav-indicator"
                                        className="absolute -bottom-1 left-0 right-0 h-px bg-[#0a0a0a]"
                                        transition={{ type: 'spring', stiffness: 400, damping: 36 }} />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <Link to="/contact" className="hidden lg:block btn-outline text-[10px]">
                        Hire Me
                    </Link>

                    {/* Mobile toggle */}
                    <button onClick={() => setOpen(!open)} className="lg:hidden flex flex-col gap-1.5 group" aria-label="menu">
                        <span className={`block w-6 h-px bg-[#0a0a0a] transition-all duration-200 ${open ? 'rotate-45 translate-y-2.5' : ''}`} />
                        <span className={`block w-4 h-px bg-[#0a0a0a] transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
                        <span className={`block w-6 h-px bg-[#0a0a0a] transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </nav>
            </header>

            {/* Mobile drawer */}
            <AnimatePresence>
                {open && (
                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-[#e0e0e0] lg:hidden">
                        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
                            {navLinks.map(link => (
                                <Link key={link.path} to={link.path}
                                    className={`label-sm transition-colors ${location.pathname === link.path ? 'text-[#0a0a0a]' : 'text-[#aaa]'}`}>
                                    {link.label}
                                </Link>
                            ))}
                            <Link to="/contact" className="btn-outline mt-2 self-start">Hire Me</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
