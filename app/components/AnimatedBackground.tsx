'use client';
import React, { useEffect, useRef } from 'react';

interface Particle {
	x: number;
	y: number;
	vx: number;
	vy: number;
	size: number;
	opacity: number;
}

export default function AnimatedBackground() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const particlesRef = useRef<Particle[]>([]);
	const animationFrameRef = useRef<number | undefined>(undefined);
	const lastFrameTimeRef = useRef<number>(0);
	const isVisibleRef = useRef<boolean>(true);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		// Set canvas size
		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resizeCanvas();
		window.addEventListener('resize', resizeCanvas);

		// Page Visibility API - pause when tab is hidden
		const handleVisibilityChange = () => {
			isVisibleRef.current = !document.hidden;
			if (isVisibleRef.current && !animationFrameRef.current) {
				animationFrameRef.current = requestAnimationFrame(animate);
			}
		};
		document.addEventListener('visibilitychange', handleVisibilityChange);

		// Initialize particles - Reduced from 50 to 25 for better performance
		const particleCount = 25;
		particlesRef.current = Array.from({ length: particleCount }, () => ({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			vx: (Math.random() - 0.5) * 0.5,
			vy: (Math.random() - 0.5) * 0.5,
			size: Math.random() * 3 + 1,
			opacity: Math.random() * 0.5 + 0.2,
		}));

		// Use squared distance to avoid expensive Math.sqrt
		const CONNECTION_DISTANCE = 200;
		const CONNECTION_DISTANCE_SQ = CONNECTION_DISTANCE * CONNECTION_DISTANCE;

		// Animation loop
		const animate = (timestamp: number) => {
			// Skip if tab is hidden
			if (!isVisibleRef.current) {
				animationFrameRef.current = undefined;
				return;
			}

			// Limit FPS to ~30
			const elapsed = timestamp - lastFrameTimeRef.current;
			if (elapsed < 1000 / 30) {
				animationFrameRef.current = requestAnimationFrame(animate);
				return;
			}
			lastFrameTimeRef.current = timestamp;

			if (!ctx || !canvas) return;

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Check if dark mode is active
			const isDark = document.documentElement.classList.contains('dark');
			const particles = particlesRef.current;

			// Update positions and draw particles
			for (let i = 0; i < particles.length; i++) {
				const particle = particles[i];

				// Update position
				particle.x += particle.vx;
				particle.y += particle.vy;

				// Bounce off edges
				if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
				if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

				// Draw particle
				ctx.beginPath();
				ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
				ctx.fillStyle = isDark
					? `rgba(216, 158, 46, ${particle.opacity})`
					: `rgba(120, 80, 20, ${particle.opacity * 0.8})`;
				ctx.fill();
			}

			// Draw connections - optimized with squared distance and batched strokes
			ctx.lineWidth = 0.5;
			for (let i = 0; i < particles.length; i++) {
				const particle = particles[i];
				// Only check particles after current index to avoid duplicate lines
				for (let j = i + 1; j < particles.length; j++) {
					const other = particles[j];
					const dx = particle.x - other.x;
					const dy = particle.y - other.y;
					const distSq = dx * dx + dy * dy;

					if (distSq < CONNECTION_DISTANCE_SQ) {
						const opacity = 1 - Math.sqrt(distSq) / CONNECTION_DISTANCE;
						ctx.beginPath();
						ctx.moveTo(particle.x, particle.y);
						ctx.lineTo(other.x, other.y);
						ctx.strokeStyle = isDark
							? `rgba(216, 158, 46, ${0.1 * opacity})`
							: `rgba(120, 80, 20, ${0.2 * opacity})`;
						ctx.stroke();
					}
				}
			}

			animationFrameRef.current = requestAnimationFrame(animate);
		};

		animationFrameRef.current = requestAnimationFrame(animate);

		// Cleanup
		return () => {
			window.removeEventListener('resize', resizeCanvas);
			document.removeEventListener('visibilitychange', handleVisibilityChange);
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="fixed top-0 left-0 w-full h-full pointer-events-none"
			style={{
				opacity: 0.4,
				zIndex: 1,
			}}
		/>
	);
}
