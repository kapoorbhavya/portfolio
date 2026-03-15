import React, { useEffect, useRef } from 'react';

export default function Cursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        const bar = progressRef.current;
        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;
        let raf;

        const onMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (dot) { dot.style.left = mouseX + 'px'; dot.style.top = mouseY + 'px'; }
        };

        const onScroll = () => {
            if (!bar) return;
            const h = document.documentElement.scrollHeight - window.innerHeight;
            const pct = h > 0 ? (window.scrollY / h) * 100 : 0;
            bar.style.width = pct + '%';
        };

        const lerp = (a, b, t) => a + (b - a) * t;
        const animate = () => {
            ringX = lerp(ringX, mouseX, 0.12);
            ringY = lerp(ringY, mouseY, 0.12);
            if (ring) { ring.style.left = ringX + 'px'; ring.style.top = ringY + 'px'; }
            raf = requestAnimationFrame(animate);
        };
        animate();

        // Hover on interactive elements — enlarge ring
        const addHover = () => {
            document.querySelectorAll('a, button, [data-cursor="hover"]').forEach(el => {
                el.addEventListener('mouseenter', () => ring?.classList.add('hovered'));
                el.addEventListener('mouseleave', () => ring?.classList.remove('hovered'));
            });
        };
        addHover();

        window.addEventListener('mousemove', onMove);
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <>
            <div id="scroll-progress" ref={progressRef} style={{ width: '0%' }} />
            <div className="cursor-dot" ref={dotRef} />
            <div className="cursor-ring" ref={ringRef} />
        </>
    );
}
