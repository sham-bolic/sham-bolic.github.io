import { useState } from 'react';
import axios from 'axios';
import { z } from 'zod';
import { useKillFeed } from '@/app/components/KillFeed';

const contactFormSchema = z.object({
	email: z.string().email('Please enter a valid email address'),
	subject: z.string().min(1, 'Subject is required'),
	body: z.string().min(1, 'Message is required'),
});

type FormData = z.infer<typeof contactFormSchema>;

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function useContactForm() {
	const { addKill } = useKillFeed();
	const [formData, setFormData] = useState<FormData>({
		email: '',
		subject: '',
		body: '',
	});
	const [status, setStatus] = useState<FormStatus>('idle');
	const [errors, setErrors] = useState<Partial<FormData>>({});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
		// Clear error when user types
		if (errors[name as keyof FormData]) {
			setErrors((prev) => ({ ...prev, [name]: undefined }));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Validate form data
		const result = contactFormSchema.safeParse(formData);
		if (!result.success) {
			const fieldErrors = result.error.flatten().fieldErrors;
			setErrors({
				email: fieldErrors.email?.[0],
				subject: fieldErrors.subject?.[0],
				body: fieldErrors.body?.[0],
			});
			return;
		}

		setStatus('loading');
		try {
			// Call Botpress webhook directly (API routes don't work with static export)
			// Use fetch with no-cors to bypass CORS (can't read response, but request goes through)
			await fetch(
				'https://webhook.botpress.cloud/0bfdf464-60ef-42d3-bfe1-59a9e5c105c0',
				{
					method: 'POST',
					mode: 'no-cors',
					headers: {
						'Content-Type': 'text/plain',
					},
					body: JSON.stringify(formData),
				}
			);

			// With no-cors mode, response is opaque - we can't check status
			// Assume success if no error was thrown
			setStatus('success');
			setFormData({ email: '', subject: '', body: '' });
			setErrors({});
			addKill('Message Sent', true);
		} catch (error) {
			console.error('Error sending message:', error);
			setStatus('error');
		}
	};

	return {
		formData,
		status,
		errors,
		handleChange,
		handleSubmit,
	};
}
