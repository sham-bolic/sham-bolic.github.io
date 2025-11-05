'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
	const cursorDotRef = useRef<HTMLDivElement>(null);
	const cursorRingRef = useRef<HTMLDivElement>(null);
	const [isPointer, setIsPointer] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const mousePos = useRef({ x: 0, y: 0 });
	const cursorPos = useRef({ x: 0, y: 0 });
	const ringPos = useRef({ x: 0, y: 0 });

	useEffect(() => {
		const updateCursor = (e: MouseEvent) => {
			mousePos.current = { x: e.clientX, y: e.clientY };
			setIsVisible(true);

			const target = e.target as HTMLElement;
			setIsPointer(
				window.getComputedStyle(target).cursor === 'pointer' ||
				target.tagName === 'A' ||
				target.tagName === 'BUTTON'
			);
		};

		const hideCursor = () => setIsVisible(false);

		window.addEventListener('mousemove', updateCursor);
		window.addEventListener('mouseleave', hideCursor);
		document.addEventListener('mouseenter', () => setIsVisible(true));

		// Smooth animation loop
		const animate = () => {
			// Lerp for smooth following
			cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.2;
			cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.2;

			ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.1;
			ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.1;

			if (cursorDotRef.current) {
				cursorDotRef.current.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px) translate(-50%, -50%)`;
			}

			if (cursorRingRef.current) {
				cursorRingRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
			}

			requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener('mousemove', updateCursor);
			window.removeEventListener('mouseleave', hideCursor);
		};
	}, []);

	return (
		<>
			{/* Main cursor dot */}
			<div
				ref={cursorDotRef}
				className="fixed pointer-events-none z-[9999] will-change-transform"
				style={{
					opacity: isVisible ? 1 : 0,
					transition: 'opacity 0.3s ease',
				}}
			>
				<div
					className={`w-2 h-2 rounded-full transition-all duration-200 ${
						isPointer ? 'bg-warm-600 scale-150' : 'bg-warm-500 scale-100'
					}`}
				/>
			</div>

			{/* Cursor ring */}
			<div
				ref={cursorRingRef}
				className="fixed pointer-events-none z-[9998] will-change-transform"
				style={{
					opacity: isVisible ? 0.5 : 0,
					transition: 'opacity 0.3s ease',
				}}
			>
				<div
					className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
						isPointer
							? 'border-warm-500 scale-150'
							: 'border-warm-400 dark:border-warm-500 scale-100'
					}`}
				/>
			</div>

			{/* Trailing particles */}
			<TrailingParticles mousePos={mousePos} isVisible={isVisible} />
		</>
	);
}

function TrailingParticles({
	mousePos,
	isVisible,
}: {
	mousePos: React.MutableRefObject<{ x: number; y: number }>;
	isVisible: boolean;
}) {
	const particlesRef = useRef<HTMLDivElement[]>([]);
	const trailPositions = useRef<Array<{ x: number; y: number }>>([]);

	useEffect(() => {
		if (!isVisible) return;

		// Initialize trail positions
		for (let i = 0; i < 8; i++) {
			if (!trailPositions.current[i]) {
				trailPositions.current[i] = { x: 0, y: 0 };
			}
		}

		const animate = () => {
			// Update first particle to follow mouse with delay
			const delay = 0.15;
			trailPositions.current[0] = {
				x: trailPositions.current[0].x + (mousePos.current.x - trailPositions.current[0].x) * delay,
				y: trailPositions.current[0].y + (mousePos.current.y - trailPositions.current[0].y) * delay,
			};

			// Each particle follows the previous one
			for (let i = 1; i < 8; i++) {
				trailPositions.current[i] = {
					x: trailPositions.current[i].x + (trailPositions.current[i - 1].x - trailPositions.current[i].x) * delay,
					y: trailPositions.current[i].y + (trailPositions.current[i - 1].y - trailPositions.current[i].y) * delay,
				};
			}

			// Update DOM elements
			particlesRef.current.forEach((particle, index) => {
				if (particle && trailPositions.current[index]) {
					const pos = trailPositions.current[index];
					particle.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%) scale(${1 - index / 8})`;
					particle.style.opacity = `${(1 - index / 8) * 0.4}`;
				}
			});

			requestAnimationFrame(animate);
		};

		const animationId = requestAnimationFrame(animate);

		return () => {
			cancelAnimationFrame(animationId);
		};
	}, [isVisible, mousePos]);

	return (
		<>
			{Array.from({ length: 8 }).map((_, index) => (
				<div
					key={index}
					ref={(el) => {
						if (el) particlesRef.current[index] = el;
					}}
					className="fixed pointer-events-none z-[9997] will-change-transform"
					style={{
						opacity: isVisible ? 0.4 : 0,
						transition: 'opacity 0.3s ease',
					}}
				>
					<div className="w-1.5 h-1.5 rounded-full bg-warm-400 dark:bg-warm-500" />
				</div>
			))}
		</>
	);
}
