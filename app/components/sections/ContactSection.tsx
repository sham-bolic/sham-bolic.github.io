'use client';
import React, { useRef } from 'react';
import useOnScreen from '@/app/hooks/useOnScreen';
import ContactInfo from '../ContactInfo';
import ContactForm from '../ContactForm';

export default function ContactSection() {
	const ref = useRef(null);
	const isVisible = useOnScreen(ref, 0.1);

	return (
		<section id="contact" ref={ref} className="py-12 md:py-20">
			<div className="container mx-auto px-4 max-w-5xl">
				<h2
					className={`section-title dark:text-neutral-100 transition-all duration-700 transform ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					Contact Me
				</h2>
				<div
					className={`card p-8 md:p-12 dark:bg-neutral-800 dark:border-neutral-700 transition-all duration-1000 transform ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Left Column: Contact Info */}
						<ContactInfo />

						{/* Right Column: Contact Form */}
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
}
