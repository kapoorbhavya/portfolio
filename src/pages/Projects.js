import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiPlay } from 'react-icons/fi';

const projects = [
    {
        id: 1, num: '01', title: 'Legal Neural Machine Translator',
        subtitle: 'English → Hindi NLP Model',
        description: 'English-to-Hindi NMT model targeting public legal notices using HuggingFace Transformers and PyTorch. Applied model quantization for edge deployment, improving latency and resource efficiency.',
        tags: ['Python', 'HuggingFace', 'PyTorch', 'TensorFlow', 'Model Quantization'],
        github: 'https://github.com/kapoorbhavya/NMT_Public_Notice_Engllish_To_Hindi_Translator',
        liveUrl: '/video/nmt.mp4',
        videoUrl: '/video/nmt.mp4',
        thumbnail: 'images/nmt-thumbnail.png',
        period: 'Oct – Nov 2025', category: 'AI / ML',
    },
    {
        id: 2, num: '02', title: 'Offset Printing Defect Detection',
        subtitle: 'Computer Vision QC System',
        description: 'Intelligent defect detection for offset printing quality control. Random Forest for classification and Isolation Forest for unsupervised anomaly detection, with heatmap visualization.',
        tags: ['Python', 'OpenCV', 'Scikit-learn', 'Random Forest', 'Isolation Forest'],
        github: 'https://github.com/kapoorbhavya/Printing_defect_detection_Project',
        liveUrl: '/video/pd.mp4',
        videoUrl: '/video/pd.mp4',
        thumbnail: 'images/print_defect.png',
        period: 'Oct – Nov 2025', category: 'Computer Vision',
    },
    {
        id: 3, num: '03', title: 'Alumni Connection Platform',
        subtitle: 'MERN Full Stack Web Application',
        description: 'Full-stack MERN platform connecting students with alumni for mentorship and career guidance. JWT role-based auth across Admin, Alumni, and Student roles. GenAI-powered event recommendations.',
        tags: ['React 19', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'GenAI'],
        github: 'https://github.com/kapoorbhavya/Alumni_Connection_Platform',
        liveUrl: '/video/alumni_connection_record.mp4',
        videoUrl: '/video/alumni_connection_record.mp4',
        thumbnail: 'images/Alumni_connection-thumbnail.png',
        period: 'Jun – Aug 2025', category: 'Full Stack',
    },
];

const filters = ['All', 'AI / ML', 'Computer Vision', 'Full Stack'];

export default function Projects() {
    const [active, setActive] = useState('All');
    const [activeVideo, setActiveVideo] = useState(null);

    const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);
    const closeVideo = () => setActiveVideo(null);

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="border-b border-[#e0e0e0] pt-28 pb-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="relative overflow-hidden">
                        <div
                            className="watermark absolute opacity-40"
                            style={{ fontSize: 'clamp(60px, 12vw, 160px)', transform: 'none', top: '-20px', left: '-10px', position: 'relative' }}
                        >
                            WORK
                        </div>
                        <div className="relative z-10 -mt-8 sm:-mt-12 lg:-mt-16">
                            <p className="label-sm mb-4">Portfolio</p>
                            <h1 className="display-lg">Featured Projects</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="border-b border-[#e0e0e0] bg-[#f8f8f8]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex items-center gap-0 overflow-x-auto">
                        {filters.map(f => (
                            <button
                                key={f}
                                onClick={() => setActive(f)}
                                className={`label-sm px-5 py-4 border-r border-[#e0e0e0] transition-colors whitespace-nowrap ${
                                    active === f ? 'bg-[#0a0a0a] text-white' : 'text-[#aaa] hover:text-[#0a0a0a] hover:bg-white'
                                }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Project grid */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="grid gap-10 md:grid-cols-2">
                            {filtered.map((p, i) => (
                                <motion.article
                                    key={p.id}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-80px' }}
                                    transition={{ delay: i * 0.06, duration: 0.45 }}
                                    className="editorial-card overflow-hidden flex flex-col group"
                                >
                                    {/* ── Banner / Video area ── */}
                                    {p.thumbnail ? (
                                        <button
                                            type="button"
                                            onClick={() => p.videoUrl && setActiveVideo(p.videoUrl)}
                                            className="relative w-full overflow-hidden text-left focus:outline-none group/video"
                                            style={{ aspectRatio: '16 / 9' }}
                                            data-cursor="hover"
                                        >
                                            <img
                                                src={p.thumbnail}
                                                alt={p.title}
                                                className="w-full h-full object-cover object-top group-hover/video:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/30 group-hover/video:bg-black/45 transition-colors duration-200">
                                                <FiPlay size={22} className="text-white" />
                                                <span className="label-sm text-[10px] tracking-[0.18em] text-white">Watch Demo</span>
                                            </div>
                                            <span className="absolute top-3 right-3 label-sm text-[9px] bg-white text-[#0a0a0a] px-3 py-1">
                                                Featured
                                            </span>
                                        </button>
                                    ) : (
                                        /* Minimal dark banner matching site's black accent */
                                        <div
                                            className="relative w-full bg-[#0a0a0a] overflow-hidden"
                                            style={{ aspectRatio: '16 / 7' }}
                                        >
                                            {/* Subtle grid pattern */}
                                            <div
                                                className="absolute inset-0 opacity-10"
                                                style={{
                                                    backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                                                    backgroundSize: '40px 40px',
                                                }}
                                            />
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-6">
                                                <p className="label-sm text-[#666] mb-2">{p.num} — {p.category}</p>
                                                <p className="text-white/50 text-xs font-medium">{p.subtitle}</p>
                                            </div>
                                            {/* Featured badge — site style */}
                                            <span className="absolute top-3 right-3 label-sm text-[9px] bg-white text-[#0a0a0a] px-3 py-1">
                                                Featured
                                            </span>
                                        </div>
                                    )}

                                    {/* ── Info panel — matches site's white/editorial palette ── */}
                                    <div className="bg-white px-6 py-5 flex flex-col gap-4 flex-1 border-t border-[#e0e0e0]">
                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-[#0a0a0a] leading-snug">
                                            {p.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-[13.5px] text-[#666] leading-relaxed">
                                            {p.description}
                                        </p>

                                        {/* Tech tags — site's existing pill style */}
                                        <div className="flex flex-wrap gap-2">
                                            {p.tags.map(t => (
                                                <span
                                                    key={t}
                                                    className="text-[10px] font-bold tracking-wider uppercase border border-[#e0e0e0] px-2.5 py-1 text-[#777]"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action buttons — site's btn-solid / btn-outline */}
                                        <div className="pt-1 flex gap-3">
                                            {p.videoUrl ? (
                                                <button
                                                    type="button"
                                                    onClick={() => setActiveVideo(p.videoUrl)}
                                                    className="btn-solid text-[10px] flex-1 justify-center"
                                                    data-cursor="hover"
                                                >
                                                    <FiPlay size={12} /> Live Demo
                                                </button>
                                            ) : (
                                                <a
                                                    href={p.liveUrl || p.github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn-solid text-[10px] flex-1 justify-center"
                                                >
                                                    <FiExternalLink size={12} /> Live Demo
                                                </a>
                                            )}
                                            <a
                                                href={p.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn-outline text-[10px] flex-1 justify-center"
                                            >
                                                <FiGithub size={12} /> Source Code
                                            </a>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="mt-16 flex justify-center">
                    <a href="https://github.com/kapoorbhavya" target="_blank" rel="noreferrer" className="btn-solid">
                        All Projects on GitHub <FiExternalLink size={13} />
                    </a>
                </div>

                {/* Video modal */}
                <AnimatePresence>
                    {activeVideo && (
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center px-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="absolute inset-0 bg-black/60" onClick={closeVideo} />
                            <motion.div
                                className="relative z-10 w-full max-w-3xl bg-white border border-[#e0e0e0] shadow-xl"
                                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.96, y: 8 }}
                                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="flex items-center justify-between px-5 py-3 border-b border-[#e0e0e0]">
                                    <span className="label-sm">Project Demo</span>
                                    <button
                                        type="button"
                                        onClick={closeVideo}
                                        className="text-xs font-semibold tracking-wide text-[#777] hover:text-[#0a0a0a] uppercase"
                                    >
                                        Close
                                    </button>
                                </div>
                                <div className="bg-black">
                                    <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
                                        <video
                                            src={activeVideo}
                                            controls
                                            poster={projects.find(p => p.videoUrl === activeVideo)?.thumbnail}
                                            className="w-full h-full"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
