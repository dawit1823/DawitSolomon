import { useState } from 'react';
import { ArrowUpRight, Building2, Gamepad2, GraduationCap, ShieldCheck } from 'lucide-react';
import { PROJECTS, ProjectCategory, ProjectItem } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const FILTER_OPTIONS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'web', label: 'Web & SaaS' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'automation', label: 'AI Automation' },
  { id: 'games-security', label: 'Games & Security' },
];

function ProjectVisualPreview({ project }: { project: ProjectItem }) {
  const [imgError, setImgError] = useState(false);

  if (project.image && !imgError) {
    const isContain = project.imageFit === 'contain';
    return (
      <div
        className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#E4E4E7]"
        style={{ backgroundColor: project.imageBg || '#F4F4F5' }}
      >
        <img
          src={project.image}
          alt={project.imageAlt || project.title}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className={`w-full h-full transition-transform duration-300 group-hover:scale-[1.02] ${
            isContain ? 'object-contain py-2' : 'object-cover'
          }`}
        />
      </div>
    );
  }

  // Bespoke architectural fallback & visual schematics for non-photographic engineering projects
  return (
    <div
      className="aspect-[16/10] w-full rounded-xl border border-[#E4E4E7] p-6 flex flex-col justify-between"
      style={{ backgroundColor: project.accentTint }}
    >
      <div className="flex items-center justify-between text-xs font-mono text-[#52525B]">
        <span>{project.date}</span>
        <span>{project.categoryLabel}</span>
      </div>

      {project.id === 'company-monitor' && (
        <div className="grid grid-cols-3 gap-2.5 my-2">
          <div className="bg-white rounded-lg p-3 border border-[#E4E4E7]">
            <p className="text-[11px] text-[#71717A]">Rent Ledger</p>
            <p className="font-mono text-sm font-semibold text-[#09090B] tabular-nums mt-0.5">
              Units Synced
            </p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-[#E4E4E7]">
            <p className="text-[11px] text-[#71717A]">Workforce</p>
            <p className="font-mono text-sm font-semibold text-[#09090B] tabular-nums mt-0.5">
              Staff &amp; Shift
            </p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-[#E4E4E7]">
            <p className="text-[11px] text-[#71717A]">Payments</p>
            <p className="font-mono text-sm font-semibold text-[#2563EB] tabular-nums mt-0.5">
              Firebase Live
            </p>
          </div>
        </div>
      )}

      {project.id === 'yabedebingo' && (
        <div className="grid grid-cols-5 gap-1.5 max-w-[230px] mx-auto my-1">
          {['B', 'I', 'N', 'G', 'O', 4, 19, 36, 52, 68, 11, 24, 'FREE', 48, 73].map((cell, i) => (
            <div
              key={i}
              className={`h-7 rounded flex items-center justify-center font-mono text-xs font-semibold tabular-nums border ${
                i < 5
                  ? 'bg-[#09090B] text-white border-[#09090B]'
                  : cell === 'FREE'
                    ? 'bg-[#2563EB] text-white border-[#2563EB]'
                    : 'bg-white text-[#18181B] border-[#E4E4E7]'
              }`}
            >
              {cell}
            </div>
          ))}
        </div>
      )}

      {project.id === 'dan-energy-ekub' && (
        <div className="flex items-center gap-4 bg-white rounded-lg p-4 border border-[#E4E4E7]">
          <ShieldCheck className="w-6 h-6 text-[#2563EB] shrink-0" />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[#09090B] truncate">
              DAN Energy Security &amp; Digital Ekub
            </p>
            <p className="text-xs text-[#52525B] mt-0.5">
              Defensive security projects &amp; community rotating savings workflow
            </p>
          </div>
        </div>
      )}

      {project.id === 'college-management' && (
        <div className="flex items-center gap-4 bg-white rounded-lg p-4 border border-[#E4E4E7]">
          <GraduationCap className="w-6 h-6 text-[#09090B] shrink-0" />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[#09090B] truncate">
              Academic Registry &amp; Course Portal
            </p>
            <p className="text-xs text-[#52525B] mt-0.5">
              PHP relational system for enrollment, grading, and faculty scheduling
            </p>
          </div>
        </div>
      )}

      {!['company-monitor', 'yabedebingo', 'dan-energy-ekub', 'college-management'].includes(
        project.id
      ) && (
        <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-[#E4E4E7]">
          {project.category === 'mobile' ? (
            <Building2 className="w-6 h-6 text-[#2563EB]" />
          ) : (
            <Gamepad2 className="w-6 h-6 text-[#2563EB]" />
          )}
          <span className="text-sm font-medium text-[#09090B]">{project.title}</span>
        </div>
      )}

      <div className="flex items-center justify-between text-xs text-[#52525B]">
        <span>{project.role}</span>
        <span className="font-mono">{project.stack.slice(0, 2).join(' / ')}</span>
      </div>
    </div>
  );
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <section id="work" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E4E4E7]">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#09090B] text-balance">
              Selected Engineering &amp; Commercial Works
            </h2>
            <p className="text-base text-[#52525B]">
              Projects built between 2022 and 2026 across web apps, Flutter mobile platforms, and
              local AI automation—with almost 2 software systems and about 5 websites sold to
              clients.
            </p>
          </div>

          {/* Interactive Segmented Filter Control */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-1 p-1 bg-[#F4F4F5] rounded-lg border border-[#E4E4E7] self-start md:self-auto"
          >
            {FILTER_OPTIONS.map((option) => {
              const isActive = activeFilter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(option.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                    isActive
                      ? 'bg-[#FFFFFF] text-[#09090B] shadow-xs'
                      : 'text-[#52525B] hover:text-[#09090B]'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Bento Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isWide = activeFilter === 'all' && project.featured;
            return (
              <article
                key={project.id}
                className={`group bg-[#FFFFFF] border border-[#E4E4E7] hover:border-[#A1A1AA] rounded-2xl p-5 flex flex-col justify-between transition-colors duration-150 ${
                  isWide ? 'lg:col-span-2' : ''
                }`}
              >
                <div>
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-xl"
                    aria-label={`Inspect ${project.title} case study`}
                  >
                    <ProjectVisualPreview project={project} />
                  </button>

                  <div className="mt-5 space-y-2.5">
                    {/* Clean unboxed inline metadata — zero pill enclosures */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#71717A]">
                      <span className="font-mono tabular-nums text-[#09090B] font-medium">
                        {project.date}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.stack.join(' / ')}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold tracking-tight text-[#09090B] group-hover:text-[#2563EB] transition-colors">
                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className="text-left cursor-pointer focus-visible:outline-none"
                      >
                        {project.title}
                      </button>
                    </h3>

                    <p className="text-sm leading-relaxed text-[#52525B]">{project.summary}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F4F4F5] flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-semibold text-[#09090B] hover:text-[#2563EB] transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded"
                  >
                    Read Case Study
                  </button>

                  {project.externalUrl ? (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#2563EB] hover:underline underline-offset-4 whitespace-nowrap shrink-0 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded"
                    >
                      <span>{project.externalLabel || 'Open Live'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs text-[#71717A] truncate">{project.role}</span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
