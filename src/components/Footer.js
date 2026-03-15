import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-[#e0e0e0] bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 sm:col-span-1">
                        <p className="text-base font-black tracking-tight text-[#0a0a0a] mb-2">BHAVYA KAPOOR</p>
                        <p className="label-sm">AI/ML Developer</p>
                    </div>
                    {/* Nav */}
                    <div className="space-y-3">
                        <p className="label-sm border-b border-[#e0e0e0] pb-2">Navigate</p>
                        {[['/', 'Home'], ['/about', 'About'], ['/projects', 'Projects'], ['/skills', 'Skills']].map(([to, l]) => (
                            <Link key={to} to={to} className="block label-sm text-[#555] hover:text-[#0a0a0a] transition-colors">{l}</Link>
                        ))}
                    </div>
                    <div className="space-y-3">
                        <p className="label-sm border-b border-[#e0e0e0] pb-2">More</p>
                        {[['/education', 'Education'], ['/certifications', 'Certifications'], ['/achievements', 'Achievements'], ['/resume', 'Resume'], ['/contact', 'Contact']].map(([to, l]) => (
                            <Link key={to} to={to} className="block label-sm text-[#555] hover:text-[#0a0a0a] transition-colors">{l}</Link>
                        ))}
                    </div>
                    {/* Social */}
                    <div className="space-y-3">
                        <p className="label-sm border-b border-[#e0e0e0] pb-2">Social</p>
                        {[
                            { href: 'https://github.com/kapoorbhavya', Icon: FiGithub, label: 'GitHub' },
                            { href: 'https://linkedin.com/in/bhavya-kapoor200', Icon: FiLinkedin, label: 'LinkedIn' },
                            { href: 'mailto:kapoor.bhavya168@gmail.com', Icon: FiMail, label: 'Email' },
                        ].map(({ href, Icon, label }) => (
                            <a key={label} href={href} target="_blank" rel="noreferrer"
                                className="flex items-center gap-2 label-sm text-[#555] hover:text-[#0a0a0a] transition-colors">
                                <Icon size={13} /> {label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="border-t border-[#e0e0e0] pt-6 flex flex-wrap items-center justify-between gap-4">
                    <p className="label-sm">© {year} Bhavya Kapoor. All rights reserved.</p>
                    
                </div>
            </div>
        </footer>
    );
}
