import React from 'react';
import { Send, Loader2 } from 'lucide-react';
import { useContactForm } from '@/app/hooks/useContactForm';

export default function ContactForm() {
	const { formData, status, errors, handleChange, handleSubmit } =
		useContactForm();

	return (
		<div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className={`w-full px-4 py-2 rounded-lg border ${
							errors.email
								? 'border-red-500 focus:ring-red-500'
								: 'border-neutral-300 dark:border-neutral-600 focus:ring-accent-500'
						} bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:border-transparent transition-all outline-none`}
						placeholder="your@email.com"
					/>
					{errors.email && (
						<p className="mt-1 text-sm text-red-500">{errors.email}</p>
					)}
				</div>
				<div>
					<label
						htmlFor="subject"
						className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
					>
						Subject
					</label>
					<input
						type="text"
						id="subject"
						name="subject"
						value={formData.subject}
						onChange={handleChange}
						className={`w-full px-4 py-2 rounded-lg border ${
							errors.subject
								? 'border-red-500 focus:ring-red-500'
								: 'border-neutral-300 dark:border-neutral-600 focus:ring-accent-500'
						} bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:border-transparent transition-all outline-none`}
						placeholder="What's this about?"
					/>
					{errors.subject && (
						<p className="mt-1 text-sm text-red-500">{errors.subject}</p>
					)}
				</div>
				<div>
					<label
						htmlFor="body"
						className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
					>
						Message
					</label>
					<textarea
						id="body"
						name="body"
						rows={4}
						value={formData.body}
						onChange={handleChange}
						className={`w-full px-4 py-2 rounded-lg border ${
							errors.body
								? 'border-red-500 focus:ring-red-500'
								: 'border-neutral-300 dark:border-neutral-600 focus:ring-accent-500'
						} bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:border-transparent transition-all outline-none resize-none`}
						placeholder="Your message here..."
					/>
					{errors.body && (
						<p className="mt-1 text-sm text-red-500">{errors.body}</p>
					)}
				</div>
				<button
					type="submit"
					disabled={status === 'loading' || status === 'success'}
					className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all ${
						status === 'success'
							? 'bg-green-600 text-white hover:bg-green-700'
							: 'bg-accent-600 text-white hover:bg-accent-700 hover:shadow-lg hover:-translate-y-0.5'
					} disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none`}
				>
					{status === 'loading' ? (
						<>
							<Loader2 className="w-5 h-5 animate-spin" />
							<span>Sending...</span>
						</>
					) : status === 'success' ? (
						<>
							<span>Message Sent!</span>
						</>
					) : (
						<>
							<Send className="w-5 h-5" />
							<span>Send Message</span>
						</>
					)}
				</button>
				{status === 'error' && (
					<p className="text-red-500 text-sm text-center mt-2">
						Something went wrong. Please try again.
					</p>
				)}
			</form>
		</div>
	);
}

