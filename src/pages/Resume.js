import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const sections = [
    {
        title: 'Skills',
        items: [
            { label: 'Languages', value: 'C++, JavaScript, C, Python, Java, SQL' },
            { label: 'Frameworks', value: 'React, Node.js, Express.js, HTML/CSS, NumPy, Pandas, Scikit-Learn, OpenCV, NLP, Vision Transformer, Hugging Face' },
            { label: 'Tools & DBs', value: 'MongoDB, MySQL, Git, GitHub, Linux, REST APIs, Fast API, FLask' },
            { label: 'Soft Skills', value: 'Problem-Solving, Teamwork, Leadership, Adaptability, Time Management' },
        ],
    },
    {
        title: 'Education',
        items: [
            { label: 'B.Tech CSE — LPU', value: 'CGPA 8.67 · Aug 2023 – Present' },
            { label: 'Class XII — SLS DAV', value: '89% · Apr 2021 – Mar 2022' },
            { label: 'Class X — SLS DAV', value: '82% · Apr 2019 – Mar 2020' },
        ],
    },
    {
        title: 'Projects',
        items: [
            { label: 'Legal Neural Machine Translator', value: 'AI/ML · Oct–Nov 2025' },
            { label: 'Offset Printing Defect Detection', value: 'Computer Vision · Oct–Nov 2025' },
            { label: 'Alumni Connection Platform', value: 'Full Stack MERN · Jun–Aug 2025' },
        ],
    },
    {
        title: 'Certifications',
        items: [
            { label: 'DSA — Udemy', value: 'Oct 2025' },
            { label: 'Full Stack MERN + GenAI — WSGrad', value: 'Aug 2025' },
            { label: 'Python — Udemy', value: 'Jul 2024' },
        ],
    },
];

export default function Resume() {
    return (
        <div className="bg-[#f8f8f8]">
            {/* Header */}
            <div className="border-b border-[#e0e0e0] bg-white pt-28 pb-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap items-end justify-between gap-6">
                    <div>
                        <p className="label-sm mb-4">Document</p>
                        <h1 className="display-lg">Résumé</h1>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <a href="/resume.pdf" download className="btn-solid flex items-center gap-2">
                            <FiDownload size={14} /> Download PDF
                        </a>
                        <a href="https://linkedin.com/in/bhavya-kapoor200" target="_blank" rel="noreferrer"
                            className="btn-outline flex items-center gap-2">
                            <FiExternalLink size={13} /> LinkedIn
                        </a>
                    </div>
                </div>
            </div>

            {/* Resume card */}
            <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                    className="bg-white border border-[#e0e0e0]">

                    {/* Name block */}
                    <div className="px-10 py-10 border-b border-[#e0e0e0]">
                        <h2 className="text-5xl font-black text-[#0a0a0a] leading-none tracking-tight">BHAVYA KAPOOR</h2>
                        <p className="label-sm mt-3">AI/ML Developer · B.Tech CSE · Punjab, India</p>
                        <div className="flex flex-wrap gap-x-6 gap-y-1.5 mt-4">
                            {[
                                { Icon: FiMail, text: 'kapoorbhavya266@gmail.com', href: 'mailto:kapoorbhavya266@gmail.com' },
                                { Icon: FiGithub, text: 'github.com/kapoorbhavya', href: 'https://github.com/kapoorbhavya' },
                                { Icon: FiLinkedin, text: 'linkedin.com/in/bhavya-kapoor200', href: 'https://linkedin.com/in/bhavya-kapoor200' },
                            ].map(c => (
                                <a key={c.text} href={c.href} target="_blank" rel="noreferrer"
                                    className="flex items-center gap-1.5 text-xs text-[#555] hover:text-[#0a0a0a] transition-colors">
                                    <c.Icon size={11} /> {c.text}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Sections */}
                    {sections.map((sec, si) => (
                        <div key={sec.title} className={`px-10 py-8 ${si < sections.length - 1 ? 'border-b border-[#e0e0e0]' : ''}`}>
                            <p className="label-sm mb-5 border-b border-[#e0e0e0] pb-3">{sec.title}</p>
                            <div className="space-y-3">
                                {sec.items.map(item => (
                                    <div key={item.label} className="grid grid-cols-12 gap-4">
                                        <p className="col-span-12 sm:col-span-5 text-sm font-bold text-[#0a0a0a]">{item.label}</p>
                                        <p className="col-span-12 sm:col-span-7 text-sm text-[#555]">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>

                <p className="text-center label-sm mt-8">
                    Download the full PDF for a complete formatted version
                </p>
            </div>
        </div>
    );
}
