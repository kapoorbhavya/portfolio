import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';

const info = [
    { Icon: FiMail, label: 'Email', value: 'kapoorbhavya266@gmail.com', href: 'mailto:kapoorbhavya266@gmail.com' },
    { Icon: FiPhone, label: 'Phone', value: '+91-8287201441', href: 'tel:+918287201441' },
    { Icon: FiLinkedin, label: 'LinkedIn', value: 'bhavya-kapoor200', href: 'https://linkedin.com/in/bhavya-kapoor200' },
    { Icon: FiGithub, label: 'GitHub', value: 'kapoorbhavya', href: 'https://github.com/kapoorbhavya' },
    { Icon: FiMapPin, label: 'Location', value: 'Punjab, India', href: null },
];

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('https://formspree.io/f/mvzwdrdv', {
                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                setSent(true);
                setForm({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setSent(false), 4000);
            } else {
                setError('Failed to send message. Please try again.');
            }
        } catch (err) {
            setError('Failed to send message. Please check your connection.');
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="border-b border-[#e0e0e0] pt-28 pb-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <p className="label-sm mb-4">Get In Touch</p>
                    <h1 className="display-lg">Contact</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Left sidebar */}
                    <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.6 }}
                        className="lg:col-span-4 space-y-10">

                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-[#0a0a0a]">Let's build something together.</h2>
                            <p className="text-[#555] text-[15px] leading-relaxed">
                                Open to freelance projects, internship opportunities, and full-time roles. I respond within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <p className="label-sm border-b border-[#e0e0e0] pb-3">Contact Details</p>
                            {info.map(({ Icon, label, value, href }) => (
                                <div key={label} className="flex items-start gap-3">
                                    <Icon size={13} className="text-[#aaa] mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="label-sm" style={{ fontSize: '9px' }}>{label}</p>
                                        {href
                                            ? <a href={href} target="_blank" rel="noreferrer" className="text-sm font-medium text-[#0a0a0a] hover:underline">{value}</a>
                                            : <p className="text-sm font-medium text-[#0a0a0a]">{value}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                                <span className="label-sm text-green-600">Available for new projects</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-8">
                        <p className="label-sm border-b border-[#e0e0e0] pb-3 mb-8">Send a message</p>

                        {sent ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-20 gap-4 border border-[#e0e0e0] text-center"
                            >
                                <FiCheckCircle size={40} className="text-[#0a0a0a]" />
                                <p className="text-xl font-bold text-[#0a0a0a]">Message Sent</p>
                                <p className="text-sm text-[#777]">I'll get back to you within 24 hours.</p>
                            </motion.div>
                        ) : error ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-20 gap-4 border border-red-300 bg-red-50 text-center"
                            >
                                <p className="text-lg font-bold text-red-600">Error</p>
                                <p className="text-sm text-red-600">{error}</p>
                                <button onClick={() => { setError(''); }} className="btn-solid mt-4">Try Again</button>
                            </motion.div>
                        ) : (
                            <form onSubmit={onSubmit} className="space-y-0">
                                {[
                                    { label: 'Name', name: 'name', type: 'text', placeholder: 'Your name', required: true },
                                    { label: 'Email', name: 'email', type: 'email', placeholder: 'your@email.com', required: true },
                                    { label: 'Subject', name: 'subject', type: 'text', placeholder: 'Project inquiry / Job opportunity', required: true },
                                ].map(f => (
                                    <div key={f.name} className="border-b border-[#e0e0e0] py-4 grid grid-cols-12 gap-4 items-center">
                                        <label className="col-span-3 label-sm">{f.label}</label>
                                        <input name={f.name} type={f.type} required={f.required} value={form[f.name]}
                                            onChange={onChange} placeholder={f.placeholder}
                                            className="col-span-9 bg-transparent border-none outline-none text-sm text-[#0a0a0a] placeholder-[#ccc] font-medium" />
                                    </div>
                                ))}
                                <div className="border-b border-[#e0e0e0] py-4">
                                    <label className="label-sm block mb-3">Message</label>
                                    <textarea name="message" rows={5} required value={form.message} onChange={onChange}
                                        placeholder="Tell me about your project..."
                                        className="w-full bg-transparent border-none outline-none text-sm text-[#0a0a0a] placeholder-[#ccc] font-medium resize-none" />
                                </div>
                                <div className="pt-6">
                                    <button type="submit" disabled={loading} className={`btn-solid flex items-center gap-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                        <FiSend size={13} /> {loading ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Black band */}
            <div className="black-band py-14 px-6 lg:px-12 mt-12">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
                    <p className="text-white text-lg font-light">Ready to work together?</p>
                    <a href="mailto:kapoor.bhavya168@gmail.com" className="btn-outline border-white text-white hover:bg-white hover:text-[#0a0a0a]">
                        kapoor.bhavya168@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
}
