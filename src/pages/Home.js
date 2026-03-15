import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

/* Animated SVG circle */
function CircleDecor({ size = 320, style }) {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="absolute pointer-events-none"
            style={style}
            fill="none"
            initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
            <motion.circle
                cx={size / 2}
                cy={size / 2}
                r={size / 2 - 1}
                stroke="#cccccc"
                strokeWidth="1"
                strokeDasharray="1000"
                strokeDashoffset="1000"
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2.4, ease: 'easeOut', delay: 0.4 }}
            />
        </motion.svg>
    );
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const projectPreviews = [
    { title: 'Legal Neural Machine Translator', cat: 'AI / ML', color: '#f0f0f0' },
    { title: 'Defect Detection System', cat: 'Computer Vision', color: '#e8e8e8' },
    { title: 'Alumni Connection Platform', cat: 'Full Stack', color: '#f5f5f5' },
];

export default function Home() {
    return (
        <div className="bg-white">
            {/* ── HERO ── */}
            <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
                {/* Watermark text */}
                <div className="watermark select-none" style={{ pointerEvents: 'none', zIndex: 0, opacity: 0.7 }}>
                    DEVELOPER
                </div>

                {/* Circle decoration — top right */}
                <CircleDecor size={380} style={{ top: '8%', right: '-60px', zIndex: 0 }} />
                {/* Small circle accent */}
                <CircleDecor size={100} style={{ bottom: '20%', left: '6%', zIndex: 0 }} />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center py-20">
                        {/* Left */}
                        <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-8">
                            <motion.p variants={item} className="label-sm text-[#aaaaaa]">
                                AI / ML Developer
                            </motion.p>

                            <motion.h1 variants={item} className="display-xl">
                                Hello, I'm<br />
                                <span className="text-[#0a0a0a]">Bhavya</span><br />
                                <span className="text-[#0a0a0a] italic font-display">Kapoor</span>
                            </motion.h1>

                            <motion.div variants={item} className="flex items-center gap-3 text-[#aaaaaa] text-sm">
                                <span className="w-8 h-px bg-[#cccccc]" />
                                <TypeAnimation
                                    sequence={[
                                        'AI / ML Developer', 2500,
                                        'NLP & CV Learner', 2500,
                                        'Python Developer', 2500,
                                        'MERN Stack (Secondary)', 2500,
                                    ]}
                                    wrapper="span"
                                    repeat={Infinity}
                                    className="font-medium tracking-wide text-[#555] text-sm"
                                />
                            </motion.div>

                            <motion.p variants={item} className="text-[#555] leading-relaxed max-w-md text-[15px]">
                                B.Tech Computer Science student at Lovely Professional University (CGPA 8.67). Building scalable web applications and intelligent systems.
                            </motion.p>

                            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
                                <Link to="/projects" className="btn-solid">
                                    View My Work <FiArrowRight size={13} />
                                </Link>
                                <Link to="/about" className="btn-outline">
                                    About Me
                                </Link>
                            </motion.div>

                            <motion.div variants={item} className="flex items-center gap-4 pt-2">
                                <span className="label-sm">Find me</span>
                                <span className="w-6 h-px bg-[#ccc]" />
                                {[
                                    { href: 'https://github.com/kapoorbhavya', Icon: FiGithub },
                                    { href: 'https://linkedin.com/in/bhavya-kapoor200', Icon: FiLinkedin },
                                    { href: 'mailto:kapoor.bhavya168@gmail.com', Icon: FiMail },
                                ].map(({ href, Icon }) => (
                                    <a key={href} href={href} target="_blank" rel="noreferrer"
                                        className="text-[#aaa] hover:text-[#0a0a0a] transition-colors duration-200">
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right — profile placeholder + featured work */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
                            className="hidden lg:flex flex-col items-center gap-10">
                            {/* Profile circle */}
                            <div className="relative">
                                <div className="w-48 h-48 rounded-full overflow-hidden border border-[#e0e0e0]">
                                    <img 
                                        src="/images/My_Pic1.jpeg" 
                                        alt="Bhavya Kapoor" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white border border-[#e0e0e0] px-4 py-1.5">
                                    <p className="label-sm text-[10px]">Bhavya Kapoor</p>
                                </div>
                            </div>

                            {/* Mini project list preview */}
                            <div className="w-full border-t border-[#e0e0e0] pt-8">
                                <p className="label-sm mb-5">Featured Work</p>
                                <div className="space-y-0">
                                    {projectPreviews.map((p, i) => (
                                        <motion.div key={p.title} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.8 + i * 0.1 }}
                                            className="flex items-center justify-between py-4 border-b border-[#f0f0f0] group cursor-default">
                                            <div>
                                                <p className="text-sm font-semibold text-[#0a0a0a] group-hover:underline">{p.title}</p>
                                                <p className="label-sm mt-0.5">{p.cat}</p>
                                            </div>
                                            <FiArrowRight size={14} className="text-[#ccc] group-hover:text-[#0a0a0a] group-hover:translate-x-1 transition-all duration-200" />
                                        </motion.div>
                                    ))}
                                </div>
                                <Link to="/projects" className="btn-outline mt-6 text-[10px]">View All Projects</Link>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom rule */}
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pb-10">
                    <hr className="rule" />
                </div>
            </section>

            {/* ── BLACK BAND ── */}
            <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
                className="black-band py-16 px-6 lg:px-12">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-white text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed">
                        Building clean, performant applications with modern tech —<br className="hidden sm:block" />
                        <span className="font-bold"> React, Node.js, Python, and beyond.</span>
                    </p>
                </div>
            </motion.section>

            {/* ── ABOUT SNAPSHOT ── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image side */}
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <img 
                                src="/images/mind.jpg" 
                                alt="Bhavya Kapoor - Developer" 
                                className="aspect-[4/3] object-cover bg-[#f5f5f5] border border-[#e8e8e8] w-full"
                            />
                        </motion.div>
                        {/* Text side */}
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
                            className="space-y-6">
                            <p className="label-sm">About</p>
                            <h2 className="display-lg">
                                Curious mind.<br />Clean code.
                            </h2>
                            <p className="text-[#555] leading-relaxed text-[15px]">
                                I'm a developer who cares deeply about the intersection of design and engineering. With a CGPA of 8.67 in B.Tech Computer Science at Lovely Professional University — and real project experience from NMT models to MERN platforms — I bring ideas from concept to production.
                            </p>
                            <p className="text-[#555] leading-relaxed text-[15px]">
                                Outside of code, I've participated in the NCC Army Attachment Camp — discipline and teamwork are part of how I approach every project.
                            </p>
                            <Link to="/about" className="btn-outline self-start">Read More</Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── STATS ── */}
            <section className="border-t border-[#e0e0e0] py-16 bg-[#f8f8f8]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 divide-x divide-[#e0e0e0]">
                        {[
                            { v: '8.67', l: 'CGPA' },
                            { v: '3+', l: 'Projects Delivered' },
                            { v: '3', l: 'Certifications' },
                            { v: '5+', l: 'Technologies' },
                        ].map(s => (
                            <motion.div key={s.l} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ duration: 0.5 }}
                                className="px-8 py-8 text-center flex flex-col items-center gap-2">
                                <span className="text-4xl font-black text-[#0a0a0a]">{s.v}</span>
                                <span className="label-sm">{s.l}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
