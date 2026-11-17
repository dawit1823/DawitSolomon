import { useState } from 'react';
import { Briefcase, Cpu, Globe, Smartphone } from 'lucide-react';
import { SKILL_GROUPS, SkillGroup } from '../data/portfolioData';

type SkillFilter = 'all' | 'technical' | 'business';

function GroupIcon({ id }: { id: SkillGroup['id'] }) {
  switch (id) {
    case 'flutter-mobile':
      return <Smartphone className="w-5 h-5 text-[#2563EB]" />;
    case 'web':
      return <Globe className="w-5 h-5 text-[#2563EB]" />;
    case 'ai-security':
      return <Cpu className="w-5 h-5 text-[#2563EB]" />;
    case 'business':
      return <Briefcase className="w-5 h-5 text-[#2563EB]" />;
  }
}

export default function SkillsSection() {
  const [filter, setFilter] = useState<SkillFilter>('all');

  const visibleGroups = SKILL_GROUPS.filter((group) => {
    if (filter === 'all') return true;
    return group.domain === filter;
  });

  return (
    <section id="skills" className="py-20 md:py-24 border-b border-[#E4E4E7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E4E4E7]">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#09090B] text-balance">
              Technical Stack &amp; Business Capabilities
            </h2>
            <p className="text-base text-[#52525B]">
              Combining Flutter, full-stack web engineering, and local AI automation with real
              front-line sales and business operations insight.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter skills by discipline"
            className="flex items-center gap-1 p-1 bg-[#F4F4F5] rounded-lg border border-[#E4E4E7] self-start md:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'all'}
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                filter === 'all'
                  ? 'bg-[#FFFFFF] text-[#09090B] shadow-xs'
                  : 'text-[#52525B] hover:text-[#09090B]'
              }`}
            >
              All Capabilities
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'technical'}
              onClick={() => setFilter('technical')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                filter === 'technical'
                  ? 'bg-[#FFFFFF] text-[#09090B] shadow-xs'
                  : 'text-[#52525B] hover:text-[#09090B]'
              }`}
            >
              Technical Stack
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'business'}
              onClick={() => setFilter('business')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                filter === 'business'
                  ? 'bg-[#FFFFFF] text-[#09090B] shadow-xs'
                  : 'text-[#52525B] hover:text-[#09090B]'
              }`}
            >
              Business &amp; Sales
            </button>
          </div>
        </div>

        <div
          className={`mt-10 grid grid-cols-1 gap-6 ${
            visibleGroups.length === 1 ? 'md:grid-cols-1 max-w-3xl' : 'md:grid-cols-2'
          }`}
        >
          {visibleGroups.map((group) => (
            <div
              key={group.id}
              className="bg-[#FFFFFF] border border-[#E4E4E7] rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#F4F4F5]">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-[#71717A]">
                      <span className="font-mono font-medium text-[#2563EB] tabular-nums">
                        {group.index}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{group.domainLabel}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-[#09090B]">
                      {group.title}
                    </h3>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-[#FAFAFA] border border-[#E4E4E7] flex items-center justify-center shrink-0">
                    <GroupIcon id={group.id} />
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#52525B]">{group.summary}</p>

                <dl className="mt-6 divide-y divide-[#F4F4F5] border-t border-[#F4F4F5]">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="py-3 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4"
                    >
                      <dt className="text-sm font-semibold text-[#09090B]">{skill.name}</dt>
                      <dd className="text-xs text-[#52525B] sm:text-right">{skill.context}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
