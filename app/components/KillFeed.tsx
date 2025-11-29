'use client';
import React, {
	createContext,
	useContext,
	useState,
	useCallback,
	useEffect,
} from 'react';
import { Crosshair } from 'lucide-react';

type KillFeedItem = {
	id: number;
	victim: string;
	killer: string;
	headshot: boolean;
	timestamp: number;
	isExiting?: boolean;
};

type KillFeedContextType = {
	addKill: (victim: string, headshot?: boolean) => void;
};

const KillFeedContext = createContext<KillFeedContextType | undefined>(
	undefined
);

export function KillFeedProvider({ children }: { children: React.ReactNode }) {
	const [kills, setKills] = useState<KillFeedItem[]>([]);

	const addKill = useCallback((victim: string, headshot: boolean = false) => {
		const newKill: KillFeedItem = {
			id: Date.now(),
			killer: 'User',
			victim: victim,
			headshot: headshot,
			timestamp: Date.now(),
			isExiting: false,
		};

		setKills((prev) => {
			const updated = [...prev, newKill];
			if (updated.length > 5) return updated.slice(updated.length - 5);
			return updated;
		});

		// Start exit animation before removing
		setTimeout(() => {
			setKills((prev) =>
				prev.map((k) => (k.id === newKill.id ? { ...k, isExiting: true } : k))
			);

			// Remove after animation
			setTimeout(() => {
				setKills((prev) => prev.filter((k) => k.id !== newKill.id));
			}, 300); // Match transition duration
		}, 4700); // 5000ms total - 300ms exit animation
	}, []);

	return (
		<KillFeedContext.Provider value={{ addKill }}>
			{children}
			<div className="fixed top-24 right-4 z-[10000] flex flex-col gap-2 pointer-events-none font-sans select-none">
				{kills.map((kill) => (
					<div
						key={kill.id}
						className={`flex items-center gap-3 bg-[#EFE5D5] dark:bg-[#292524] shadow-lg border border-[#E5D5BC] dark:border-neutral-700 px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm ${
							kill.isExiting
								? 'opacity-0 translate-x-8'
								: 'animate-in slide-in-from-right fade-in opacity-100 translate-x-0'
						}`}
					>
						<span className="text-[#1D4ED8] dark:text-[#60A5FA] font-bold text-[13px] tracking-wide font-sans">
							{kill.killer}
						</span>
						<div className="text-neutral-600 dark:text-neutral-400 opacity-90 flex items-center justify-center">
							<Crosshair size={14} strokeWidth={2.5} />
						</div>
						<span className="text-[#B91C1C] dark:text-[#F87171] font-bold text-[13px] tracking-wide font-sans">
							{kill.victim}
						</span>
						{kill.headshot && (
							<div className="ml-0.5 w-3.5 h-3.5 relative shrink-0">
								<div className="absolute inset-0 border-[1.5px] border-[#B91C1C] dark:border-[#F87171] rounded-[1px]" />
								<div className="absolute inset-[2px] bg-[#B91C1C] dark:bg-[#F87171] rounded-[0.5px]" />
							</div>
						)}
					</div>
				))}
			</div>
		</KillFeedContext.Provider>
	);
}

export function useKillFeed() {
	const context = useContext(KillFeedContext);
	if (!context) {
		throw new Error('useKillFeed must be used within a KillFeedProvider');
	}
	return context;
}
