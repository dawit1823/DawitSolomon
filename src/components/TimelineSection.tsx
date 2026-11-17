import { useState } from 'react';
import { TIMELINE_ENTRIES } from '../data/portfolioData';

type TrackFilter = 'all' | 'engineering' | 'commercial-hybrid';

export default function TimelineSection() {
  const [trackFilter, setTrackFilter] = useState<TrackFilter>('all');

  const visibleEntries = TIMELINE_ENTRIES.filter((entry) => {
    if (trackFilter === 'all') return true;
    if (trackFilter === 'engineering') return entry.track === 'engineering';
    return entry.track === 'commercial' || entry.track === 'hybrid';
  });

  return (
    <section id="timeline" className="py-20 md:py-24 bg-[#FFFFFF] border-y border-[#E4E4E7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E4E4E7]">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#09090B] text-balance">
              Career &amp; Product Trajectory
            </h2>
            <p className="text-base text-[#52525B]">
              From a PHP graduation system in July 2022 to security work at DAN Energy, selling
              paints at JOTUN Paints, and independently building commercial software and local AI
              systems.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter career timeline"
            className="flex items-center gap-1 p-1 bg-[#F4F4F5] rounded-lg border border-[#E4E4E7] self-start md:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={trackFilter === 'all'}
              onClick={() => setTrackFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                trackFilter === 'all'
                  ? 'bg-[#FFFFFF] text-[#09090B] shadow-xs'
                  : 'text-[#52525B] hover:text-[#09090B]'
              }`}
            >
              Full Timeline
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={trackFilter === 'commercial-hybrid'}
              onClick={() => setTrackFilter('commercial-hybrid')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                trackFilter === 'commercial-hybrid'
                  ? 'bg-[#FFFFFF] text-[#09090B] shadow-xs'
                  : 'text-[#52525B] hover:text-[#09090B]'
              }`}
            >
              Sales &amp; Product Synergy
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={trackFilter === 'engineering'}
              onClick={() => setTrackFilter('engineering')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                trackFilter === 'engineering'
                  ? 'bg-[#FFFFFF] text-[#09090B] shadow-xs'
                  : 'text-[#52525B] hover:text-[#09090B]'
              }`}
            >
              Core Engineering
            </button>
          </div>
        </div>

        <div className="divide-y divide-[#E4E4E7]">
          {visibleEntries.map((entry) => (
            <div
              key={entry.index}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
            >
              <div className="md:col-span-3 flex md:flex-col justify-between gap-2">
                <span className="font-mono text-sm font-medium text-[#2563EB] tabular-nums">
                  {entry.index} {entry.period}
                </span>
                <span className="text-xs font-medium text-[#71717A]">{entry.trackLabel}</span>
              </div>

              <div className="md:col-span-9 space-y-2.5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-bold tracking-tight text-[#09090B]">
                    {entry.title}
                  </h3>
                  <span className="text-sm font-medium text-[#52525B]">{entry.organization}</span>
                </div>

                <p className="text-sm md:text-base leading-relaxed text-[#52525B] max-w-3xl">
                  {entry.summary}
                </p>

                <div className="pt-1 flex flex-wrap items-center gap-2 text-xs text-[#71717A]">
                  {entry.deliverables.map((item, idx) => (
                    <span key={item} className="inline-flex items-center gap-2">
                      <span className="text-[#18181B] font-medium">{item}</span>
                      {idx < entry.deliverables.length - 1 && <span aria-hidden="true">/</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
