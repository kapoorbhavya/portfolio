import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="border-b border-[#e0e0e0] pt-28 pb-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <p className="label-sm mb-4">Who I Am</p>
                    <h1 className="display-lg">About Me</h1>
                </div>
            </div>

            {/* Main content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Left — contact card */}
                    <motion.aside initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.6 }}
                        className="lg:col-span-4 space-y-8">

                        {/* Photo */}
                        <div className="overflow-hidden rounded-lg border border-[#e0e0e0]">
                            <img 
                                src="/images/My_Pic1.jpeg" 
                                alt="Bhavya Kapoor" 
                                className="w-full h-auto object-cover aspect-square"
                            />
                        </div>

                        {/* Contact info */}
                        <div className="space-y-4">
                            <p className="label-sm border-b border-[#e0e0e0] pb-3">Contact</p>
                            {[
                                { Icon: FiMapPin, text: 'Punjab, India' },
                                { Icon: FiPhone, text: '+91-8287201441' },
                                { Icon: FiMail, text: 'kapoor.bhavya168@gmail.com', href: 'mailto:kapoor.bhavya168@gmail.com' },
                                { Icon: FiGithub, text: 'github.com/kapoorbhavya', href: 'https://github.com/kapoorbhavya' },
                                { Icon: FiLinkedin, text: 'linkedin.com/bhavya-kapoor200', href: 'https://linkedin.com/in/bhavya-kapoor200' },
                            ].map(({ Icon, text, href }) => (
                                <div key={text} className="flex items-start gap-3 text-sm">
                                    <Icon size={14} className="text-[#aaa] mt-0.5 flex-shrink-0" />
                                    {href ? <a href={href} target="_blank" rel="noreferrer" className="text-[#555] hover:text-[#0a0a0a] transition-colors">{text}</a>
                                        : <span className="text-[#555]">{text}</span>}
                                </div>
                            ))}
                        </div>
                    </motion.aside>

                    {/* Right — bio */}
                    <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-8 space-y-10">

                        {/* Bio */}
                        <div className="space-y-5">
                            <p className="label-sm border-b border-[#e0e0e0] pb-3">Biography</p>
                            <p className="text-[#333] leading-relaxed text-base">
                                I'm <strong>Bhavya Kapoor</strong>, a Computer Science student at Lovely Professional University with a CGPA of 8.67. My primary focus is <strong>Artificial Intelligence and Machine Learning</strong> — from neural machine translation for legal texts to computer-vision based defect detection.
                            </p>
                            <p className="text-[#555] leading-relaxed text-[15px]">
                                I enjoy designing and training AI/ML pipelines in Python, working with NLP and CV problems, and turning research ideas into practical systems. Alongside this, I work with the <strong>MERN stack</strong> as my secondary focus to build full-stack web applications that host and complement these intelligent models.
                            </p>
                            <p className="text-[#555] leading-relaxed text-[15px]">
                                I believe clean code and thoughtful design go hand in hand. Every project I build aims to be maintainable, scalable, and genuinely useful. Beyond engineering, I've participated in the NCC Army Attachment Camp under the Sikh-LI Regiment — an experience that sharpened my discipline, leadership, and ability to work under pressure.
                            </p>
                        </div>

                        <hr className="rule" />

                        {/* Highlights */}
                        <div className="space-y-5">
                            <p className="label-sm border-b border-[#e0e0e0] pb-3">Highlights</p>
                            <div className="grid sm:grid-cols-2 gap-0 border border-[#e0e0e0]">
                                {[
                                    { label: 'Degree', value: 'B.Tech CSE — LPU' },
                                    { label: 'CGPA', value: '8.67' },
                                    { label: 'Stack', value: 'MERN + Python + AI/ML' },
                                    { label: 'Available', value: 'For internships & roles' },
                                    { label: 'NCC', value: 'Army Attachment 2025' },
                                    { label: 'Certifications', value: '3 completed' },
                                ].map(h => (
                                    <div key={h.label} className="p-5 border-b border-r border-[#e0e0e0] last:border-b-0">
                                        <p className="label-sm mb-1">{h.label}</p>
                                        <p className="text-sm font-semibold text-[#0a0a0a]">{h.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <hr className="rule" />

                        {/* Soft skills */}
                        <div className="space-y-4">
                            <p className="label-sm border-b border-[#e0e0e0] pb-3">Soft Skills</p>
                            <div className="flex flex-wrap gap-2">
                                {['Problem-Solving', 'Team Player', 'Adaptability', 'Leadership', 'Time Management', 'Consistency'].map(s => (
                                    <span key={s} className="border border-[#e0e0e0] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#555] uppercase">{s}</span>
                                ))}
                            </div>
                        </div>

                        <Link to="/contact" className="btn-solid self-start">Get In Touch</Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
