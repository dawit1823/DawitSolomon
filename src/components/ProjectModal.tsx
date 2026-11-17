import { useEffect, useState } from 'react';
import { ArrowUpRight, Check, Layers, X } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    setImgFailed(false);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#09090B]/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FFFFFF] border border-[#E4E4E7] rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 bg-[#FFFFFF]/95 backdrop-blur-sm border-b border-[#E4E4E7]">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#71717A] min-w-0">
            <span className="font-mono tabular-nums font-medium text-[#09090B]">
              {project.date}
            </span>
            <span aria-hidden="true">·</span>
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="truncate">{project.role}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex items-center justify-center w-11 h-11 -mr-2 rounded-lg text-[#52525B] hover:text-[#09090B] hover:bg-[#F4F4F5] transition-colors cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {project.image && !imgFailed ? (
            <div
              className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#E4E4E7]"
              style={{ backgroundColor: project.imageBg || '#F4F4F5' }}
            >
              <img
                src={project.image}
                alt={project.imageAlt || project.title}
                referrerPolicy="no-referrer"
                onError={() => setImgFailed(true)}
                className={`w-full h-full ${
                  project.imageFit === 'contain' ? 'object-contain py-3' : 'object-cover'
                }`}
              />
            </div>
          ) : (
            <div
              className="aspect-[16/7] w-full rounded-xl border border-[#E4E4E7] p-6 flex flex-col justify-center items-start"
              style={{ backgroundColor: project.accentTint }}
            >
              <Layers className="w-6 h-6 text-[#2563EB] mb-3" />
              <p className="font-display text-xl font-bold text-[#09090B]">{project.title}</p>
              <p className="text-sm text-[#52525B] mt-1">{project.subtitle}</p>
            </div>
          )}

          <div className="space-y-3">
            <h2
              id="project-modal-title"
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B]"
            >
              {project.title}
            </h2>
            <p className="text-base text-[#52525B] leading-relaxed">{project.summary}</p>
          </div>

          <div className="p-5 rounded-xl bg-[#FAFAFA] border border-[#E4E4E7] space-y-1.5">
            <p className="text-xs font-semibold text-[#2563EB]">Commercial &amp; Engineering Insight</p>
            <p className="text-sm text-[#18181B] leading-relaxed">{project.commercialInsight}</p>
          </div>

          <div className="space-y-3">
            <h3 className="font-display text-base font-semibold text-[#09090B]">
              Core Capabilities
            </h3>
            <ul className="space-y-2.5">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm text-[#52525B]">
                  <Check className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-5 border-t border-[#E4E4E7] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#71717A]">
              Stack: <span className="text-[#18181B]">{project.stack.join(' · ')}</span>
            </div>

            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>{project.externalLabel || 'Open Live Site'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
