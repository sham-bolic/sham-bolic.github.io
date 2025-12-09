'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
	const cursorRef = useRef<HTMLDivElement>(null);
	const [isPointer, setIsPointer] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const mousePos = useRef({ x: 0, y: 0 });
	const cursorPos = useRef({ x: 0, y: 0 });
	const animationRef = useRef<number | undefined>(undefined);
	const isPageVisible = useRef(true);

	useEffect(() => {
		// Page Visibility API - pause when tab is hidden
		const handleVisibilityChange = () => {
			isPageVisible.current = !document.hidden;
			if (isPageVisible.current && !animationRef.current) {
				animationRef.current = requestAnimationFrame(animate);
			}
		};
		document.addEventListener('visibilitychange', handleVisibilityChange);

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

		// Smooth animation loop - runs continuously but pauses when tab hidden
		const animate = () => {
			// Stop if page hidden
			if (!isPageVisible.current) {
				animationRef.current = undefined;
				return;
			}

			// Slightly slower lerp to reduce work
			cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.25;
			cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.25;

			if (cursorRef.current) {
				cursorRef.current.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px) translate(-50%, -50%)`;
			}

			animationRef.current = requestAnimationFrame(animate);
		};

		animationRef.current = requestAnimationFrame(animate);

		return () => {
			window.removeEventListener('mousemove', updateCursor);
			window.removeEventListener('mouseleave', hideCursor);
			document.removeEventListener('visibilitychange', handleVisibilityChange);
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, []);

	return (
		<>
			<div
				ref={cursorRef}
				className="fixed pointer-events-none z-[9999] will-change-transform"
				style={{
					opacity: isVisible ? 1 : 0,
					transition: 'opacity 0.3s ease',
				}}
			>
				{/* Top Line */}
				<div
					className={`absolute left-1/2 -translate-x-1/2 bg-[#00FF00] transition-all duration-150 shadow-[0_0_0_1px_#000000] ${
						isPointer ? 'w-0.5 h-2 -top-4' : 'w-0.5 h-1.5 -top-2.5'
					}`}
				/>
				{/* Bottom Line */}
				<div
					className={`absolute left-1/2 -translate-x-1/2 bg-[#00FF00] transition-all duration-150 shadow-[0_0_0_1px_#000000] ${
						isPointer ? 'w-0.5 h-2 top-2' : 'w-0.5 h-1.5 top-1'
					}`}
				/>
				{/* Left Line */}
				<div
					className={`absolute top-1/2 -translate-y-1/2 bg-[#00FF00] transition-all duration-150 shadow-[0_0_0_1px_#000000] ${
						isPointer ? 'w-2 h-0.5 -left-4' : 'w-1.5 h-0.5 -left-2.5'
					}`}
				/>
				{/* Right Line */}
				<div
					className={`absolute top-1/2 -translate-y-1/2 bg-[#00FF00] transition-all duration-150 shadow-[0_0_0_1px_#000000] ${
						isPointer ? 'w-2 h-0.5 left-2' : 'w-1.5 h-0.5 left-1'
					}`}
				/>
			</div>
		</>
	);
}
