import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const cats = [
    {
        title: 'Languages',
        skills: [{ n: 'JavaScript', l: 90 }, { n: 'Python', l: 88 }, { n: 'C++', l: 85 }, { n: 'SQL', l: 80 }, { n: 'Java', l: 70 }, { n: 'C', l: 75 }],
    },
    {
        title: 'Frameworks',
        skills: [{ n: 'React', l: 92 }, { n: 'Node.js', l: 85 }, { n: 'Express.js', l: 83 }, { n: 'HTML & CSS', l: 95 }, { n: 'NumPy / Pandas', l: 78 }, { n: 'Scikit-Learn', l: 75 }],
    },
    {
        title: 'Tools & Databases',
        skills: [{ n: 'MongoDB', l: 84 }, { n: 'MySQL', l: 78 }, { n: 'Git & GitHub', l: 88 }, { n: 'REST APIs', l: 87 }, { n: 'JWT / Auth', l: 80 }, { n: 'Linux', l: 72 }],
    },
];

function Bar({ name, level, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const [w, setW] = useState(0);
    useEffect(() => {
        if (inView) { const t = setTimeout(() => setW(level), 100 + index * 80); return () => clearTimeout(t); }
    }, [inView, level, index]);
    return (
        <div ref={ref} className="space-y-2">
            <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-[#0a0a0a]">{name}</span>
                <span className="text-xs font-bold text-[#aaa] tabular-nums">{level}%</span>
            </div>
            <div className="skill-track w-full">
                <div className="skill-fill" style={{ width: `${w}%` }} />
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <div className="bg-[#f8f8f8]">
            {/* Header */}
            <div className="border-b border-[#e0e0e0] bg-white pt-28 pb-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <p className="label-sm mb-4">Capabilities</p>
                    <h1 className="display-lg">Skills &amp; Stack</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                {/* Skill grid */}
                <div className="grid md:grid-cols-3 gap-px bg-[#e0e0e0]">
                    {cats.map((cat, ci) => (
                        <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ duration: 0.5, delay: ci * 0.1 }}
                            className="bg-white p-8 lg:p-10 space-y-6">
                            <h3 className="text-xs font-black tracking-widest uppercase text-[#0a0a0a] border-b border-[#e0e0e0] pb-4">{cat.title}</h3>
                            <div className="space-y-5">
                                {cat.skills.map((s, i) => <Bar key={s.n} name={s.n} level={s.l} index={i} />)}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tech tags */}
                <div className="mt-16">
                    <p className="label-sm mb-6">AI / ML & supporting tools</p>
                    <div className="flex flex-wrap gap-2">
                        {['HuggingFace', 'PyTorch', 'TensorFlow (basics)', 'OpenCV', 'Scikit-Learn', 'TailwindCSS', 'Docker (basics)', 'PostgreSQL', 'Figma', 'Selenium'].map(t => (
                            <span key={t} className="border border-[#e0e0e0] px-4 py-2 text-xs font-bold tracking-wide uppercase text-[#777] hover:border-[#0a0a0a] hover:text-[#0a0a0a] transition-colors cursor-default">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Black band */}
            <div className="black-band px-6 lg:px-12 py-14">
                <div className="max-w-7xl mx-auto">
                    <p className="text-white text-lg font-light max-w-2xl">
                        8+ languages · 3 major projects · CGPA 8.67 · AI / ML first · MERN stack as secondary strength
                    </p>
                </div>
            </div>
        </div>
    );
}
