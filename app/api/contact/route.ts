import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
	try {
		const body = await request.json();

		// Forward the request to Botpress
		const response = await axios.post(
			'https://webhook.botpress.cloud/0bfdf464-60ef-42d3-bfe1-59a9e5c105c0',
			body,
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		if (response.status === 200) {
			return NextResponse.json({ message: 'Message sent successfully' });
		} else {
			return NextResponse.json(
				{ message: 'Failed to send message to Botpress' },
				{ status: response.status }
			);
		}
	} catch (error) {
		console.error('Error in contact API route:', error);
		return NextResponse.json(
			{ message: 'Internal server error' },
			{ status: 500 }
		);
	}
}
