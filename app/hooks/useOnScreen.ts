import { useEffect, useState, RefObject } from 'react';

export default function useOnScreen(
	ref: RefObject<HTMLElement | null>,
	threshold = 0.1
) {
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIntersecting(entry.isIntersecting);
			},
			{ threshold: threshold }
		);
		if (ref.current) {
			observer.observe(ref.current);
		}
		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [ref, threshold]);

	return isIntersecting;
}


