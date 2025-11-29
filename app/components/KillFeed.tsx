'use client';
import React, { createContext, useContext, useState, useCallback } from 'react';
import { Crosshair } from 'lucide-react';

type KillFeedItem = {
	id: number;
	victim: string;
	killer: string;
	weapon: 'ak47' | 'awp' | 'm4a4' | 'knife';
	headshot: boolean;
	timestamp: number;
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
			killer: 'placeholdUser',
			victim: victim,
			weapon: Math.random() > 0.5 ? 'ak47' : 'awp', // Randomly choose between AK and AWP for variety
			headshot: headshot,
			timestamp: Date.now(),
		};

		setKills((prev) => {
			const updated = [...prev, newKill];
			// Keep only last 5 kills
			if (updated.length > 5) return updated.slice(updated.length - 5);
			return updated;
		});

		// Remove after 5 seconds
		setTimeout(() => {
			setKills((prev) => prev.filter((k) => k.id !== newKill.id));
		}, 5000);
	}, []);

	return (
		<KillFeedContext.Provider value={{ addKill }}>
			{children}
			<div className="fixed top-4 right-4 z-[10000] flex flex-col gap-1 pointer-events-none font-sans">
				{kills.map((kill) => (
					<div
						key={kill.id}
						className="flex items-center gap-2 bg-gradient-to-r from-transparent via-black/60 to-black/80 text-white px-3 py-1 rounded-sm border-r-4 border-[#b63032] animate-in slide-in-from-right fade-in duration-200"
						style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
					>
						<span className="text-[#5e98d9] font-bold text-sm tracking-wide">
							{kill.killer}
						</span>
						<div className="mx-1 text-neutral-300">
							{/* Simple weapon icon representation */}
							<Crosshair size={14} className="text-neutral-400" />
						</div>
						<span className="text-[#b63032] font-bold text-sm tracking-wide">
							{kill.victim}
						</span>
						{kill.headshot && (
							<div className="ml-1 w-4 h-4 relative">
								{/* Simple headshot icon */}
								<div className="absolute inset-0 border border-red-500 rounded-sm" />
								<div className="absolute inset-1 bg-red-500 rounded-sm" />
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
