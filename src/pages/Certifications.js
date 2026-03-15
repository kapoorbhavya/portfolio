import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiCalendar } from 'react-icons/fi';

const certs = [
    { num: '01', title: 'Data Structures and Algorithms', issuer: 'Udemy', date: 'Oct 2025', link: 'https://www.udemy.com/certificate/UC-bb18ef4b-5a0e-4742-af10-abc09cfb65fb/', skills: ['Arrays', 'Trees', 'Graphs', 'Dynamic Programming', 'Sorting'] },
    { num: '02', title: 'Full Stack Development (MERN + GEN-AI)', issuer: 'WSGrad / Flames', date: 'Aug 2025', link: 'https://theangaarbatch.in/accounts/login/?next=/dashboard/event/594/certificate', skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Generative AI'] },
    { num: '03', title: 'Python Programming', issuer: 'Udemy', date: 'Jul 2024', link: 'https://www.udemy.com/certificate/UC-3171a884-a50c-4de4-94c7-fb170b76038a/', skills: ['Python Basics', 'OOP', 'Libraries', 'File Handling', 'Automation'] },
];

export default function Certifications() {
    return (
        <div className="bg-[#f8f8f8]">
            <div className="border-b border-[#e0e0e0] bg-white pt-28 pb-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <p className="label-sm mb-4">Credentials</p>
                    <h1 className="display-lg">Certifications</h1>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16">
                {certs.map((c, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="grid grid-cols-12 gap-6 py-10 border-b border-[#e0e0e0] first:border-t group bg-white px-6 hover:shadow-hard transition-all duration-150 -mx-6 mb-2">

                        <div className="col-span-1 pt-1">
                            <span className="label-sm text-[#ccc]">{c.num}</span>
                        </div>

                        <div className="col-span-11 sm:col-span-7 space-y-3">
                            <h3 className="text-lg font-bold text-[#0a0a0a]">{c.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-[#777]">
                                <span className="font-semibold text-[#0a0a0a]">{c.issuer}</span>
                                <span className="flex items-center gap-1 label-sm"><FiCalendar size={10} /> {c.date}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {c.skills.map(s => (
                                    <span key={s} className="border border-[#e0e0e0] px-2.5 py-1 text-[10px] font-bold tracking-wide uppercase text-[#777]">{s}</span>
                                ))}
                            </div>
                        </div>

                        <div className="hidden sm:flex col-span-4 items-start justify-end pt-1">
                            <a href={c.link} target="_blank" rel="noreferrer" className="btn-outline text-[10px] flex items-center gap-1.5">
                                <FiExternalLink size={11} /> Verify
                            </a>
                        </div>
                    </motion.div>
                ))}

                {/* Stats strip */}
                <div className="mt-16 grid grid-cols-3 gap-px bg-[#e0e0e0]">
                    {[{ v: '3', l: 'Certificates' }, { v: '2025', l: 'Latest' }, { v: '100%', l: 'Completion' }].map(s => (
                        <div key={s.l} className="bg-white py-8 text-center">
                            <p className="text-3xl font-black text-[#0a0a0a]">{s.v}</p>
                            <p className="label-sm mt-2">{s.l}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
