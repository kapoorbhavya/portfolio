import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const education = [
    {
        degree: 'Bachelor of Technology — Computer Science & Engineering',
        institution: 'Lovely Professional University',
        location: 'Punjab, India', period: 'Aug 2023 – Present', grade: 'CGPA: 8.67',
        current: true, tags: ['Algorithms', 'DBMS', 'AI/ML', 'Full Stack', 'Data Structures'],
    },
    {
        degree: 'Intermediate — Class XII',
        institution: 'SLS DAV Public School',
        location: 'Mausam Vihar, Delhi', period: 'Apr 2021 – Mar 2022', grade: '89%',
        current: false, tags: ['Physics', 'Mathematics', 'Computer Science'],
    },
    {
        degree: 'Matriculation — Class X',
        institution: 'SLS DAV Public School',
        location: 'Mausam Vihar, Delhi', period: 'Apr 2019 – Mar 2020', grade: '82%',
        current: false, tags: ['Mathematics', 'Science'],
    },
];

export default function Education() {
    return (
        <div className="bg-[#f8f8f8]">
            <div className="border-b border-[#e0e0e0] bg-white pt-28 pb-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <p className="label-sm mb-4">Background</p>
                    <h1 className="display-lg">Education</h1>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-0">
                {education.map((edu, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        whileHover={{ y: -4 }}
                        className="flex gap-6 sm:gap-10 py-12 border-b border-[#e0e0e0] first:border-t group transition-transform duration-200"
                    >

                        {/* Index number */}
                        <div className="flex-shrink-0 w-8 pt-1">
                            <span className="label-sm text-[#ccc]">0{i + 1}</span>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-4">
                            <div className="flex flex-wrap items-baseline justify-between gap-3">
                                <h2 className="text-lg font-bold text-[#0a0a0a] leading-tight">{edu.degree}</h2>
                                {edu.current && (
                                    <span className="label-sm bg-[#0a0a0a] text-white px-2.5 py-1">Current</span>
                                )}
                            </div>
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
                                <span className="text-sm font-semibold text-[#0a0a0a]">{edu.institution}</span>
                                <span className="label-sm">{edu.location}</span>
                                <span className="label-sm">{edu.period}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-bold text-[#0a0a0a]">
                                <FiAward size={13} className="text-[#aaa]" /> {edu.grade}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {edu.tags.map(t => (
                                    <span key={t} className="border border-[#e0e0e0] px-3 py-1 text-[10px] font-bold tracking-wide uppercase text-[#777]">{t}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
