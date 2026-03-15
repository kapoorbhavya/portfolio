import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar } from 'react-icons/fi';

export default function Achievements() {
    return (
        <div className="bg-white">
            <div className="border-b border-[#e0e0e0] pt-28 pb-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <p className="label-sm mb-4">Recognition</p>
                    <h1 className="display-lg">Achievements</h1>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16">
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-12 gap-8 border-t border-b border-[#e0e0e0] py-12 group">
                    {/* Image placeholder */}
                    <div className="md:col-span-4">
                        <img 
                            src="images/army_Attachement.png" 
                            alt="Army Attachment National Camp" 
                            className="aspect-square object-cover bg-[#f0f0f0] border border-[#e0e0e0]"
                        />
                    </div>
                    {/* Content */}
                    <div className="md:col-span-8 space-y-5 flex flex-col justify-center">
                        <div className="flex items-center gap-3">
                            <span className="label-sm">National Cadet Corps (NCC)</span>
                            <span className="w-4 h-px bg-[#ccc]" />
                            <span className="label-sm flex items-center gap-1"><FiCalendar size={10} /> Nov 2025</span>
                        </div>
                        <h2 className="text-2xl font-bold text-[#0a0a0a]">Army Attachment National Camp</h2>
                        <p className="text-[#555] leading-relaxed text-[15px]">
                            Selected to participate in the Army Attachment National Camp under the <strong>Sikh-LI Regiment</strong> with 2PB NCC BN. An intensive training experience focused on military discipline, leadership under pressure, teamwork, and national service commitment.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {['NCC', 'Leadership', 'Sikh-LI Regiment', 'Army Attachment', 'National Camp'].map(t => (
                                <span key={t} className="border border-[#e0e0e0] px-3 py-1 text-[10px] font-bold tracking-wide uppercase text-[#777]">{t}</span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Qualities */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#e0e0e0] mt-16">
                    {[
                        { icon: '—', label: 'Discipline', desc: 'Trained in structured routines and high-standard performance.' },
                        { icon: '—', label: 'Teamwork', desc: 'Collaborated in diverse units under demanding conditions.' },
                        { icon: '—', label: 'Leadership', desc: 'Led peers and made decisions under pressure.' },
                        { icon: '—', label: 'Dedication', desc: 'Committed to excellence in every assignment.' },
                    ].map((v, i) => (
                        <motion.div key={v.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                            className="bg-white p-6 space-y-2">
                            <p className="text-xs font-black tracking-widest uppercase text-[#0a0a0a]">{v.label}</p>
                            <p className="text-xs text-[#777] leading-relaxed">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
