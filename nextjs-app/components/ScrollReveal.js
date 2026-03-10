'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
    const pathname = usePathname();

    useEffect(() => {
        // Wait a brief moment to ensure React has finished rendering/hydrating the new route's DOM nodes
        const timeoutId = setTimeout(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Unobserve once revealed to prevent performance issues
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            const elements = document.querySelectorAll('.reveal');
            elements.forEach((el) => {
                // If it already has active from a previous render (e.g. HMR), we might not need to observe,
                // but it's safe to observe anyway. We only want to animate in once.
                observer.observe(el);
            });

            // Cleanup
            return () => {
                observer.disconnect();
            };
        }, 100);

        return () => clearTimeout(timeoutId);
    }, [pathname]);

    return null;
}
