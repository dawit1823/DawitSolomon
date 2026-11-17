import { useState } from 'react';
import { BookOpen, Film } from 'lucide-react';
import { AUTOMATION_PIPELINES } from '../data/portfolioData';

export default function AutomationLab() {
  const [activePipelineId, setActivePipelineId] = useState<'video' | 'research'>('video');
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(0);

  const activePipeline =
    AUTOMATION_PIPELINES.find((p) => p.id === activePipelineId) || AUTOMATION_PIPELINES[0];
  const activeStage = activePipeline.stages[selectedStageIndex] || activePipeline.stages[0];

  const handlePipelineSwitch = (id: 'video' | 'research') => {
    setActivePipelineId(id);
    setSelectedStageIndex(0);
  };

  return (
    <section id="automation" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E4E4E7]">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-mono font-medium text-[#2563EB]">2026 Local AI Systems</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#09090B] text-balance">
              On-Premise AI Automation Workflows
            </h2>
            <p className="text-base text-[#52525B]">
              Built locally in 2026 to handle high-demand content production and structured
              research without cloud subscription overhead.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Select local AI pipeline"
            className="flex items-center gap-1 p-1 bg-[#F4F4F5] rounded-lg border border-[#E4E4E7] self-start md:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activePipelineId === 'video'}
              onClick={() => handlePipelineSwitch('video')}
              className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activePipelineId === 'video'
                  ? 'bg-[#FFFFFF] text-[#09090B] shadow-xs'
                  : 'text-[#52525B] hover:text-[#09090B]'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Video Automation</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activePipelineId === 'research'}
              onClick={() => handlePipelineSwitch('research')}
              className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activePipelineId === 'research'
                  ? 'bg-[#FFFFFF] text-[#09090B] shadow-xs'
                  : 'text-[#52525B] hover:text-[#09090B]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Research Automation</span>
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Pipeline Stages Selector */}
          <div className="lg:col-span-5 space-y-3">
            <div className="pb-2">
              <h3 className="font-display text-xl font-bold text-[#09090B]">
                {activePipeline.name}
              </h3>
              <p className="text-sm text-[#52525B] mt-1">{activePipeline.summary}</p>
              <p className="text-xs font-mono text-[#71717A] mt-2">{activePipeline.platforms}</p>
            </div>

            <div className="space-y-2.5 pt-2">
              {activePipeline.stages.map((stage, index) => {
                const isSelected = index === selectedStageIndex;
                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setSelectedStageIndex(index)}
                    className={`w-full text-left p-4 rounded-xl border transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                      isSelected
                        ? 'bg-[#FFFFFF] border-[#2563EB]'
                        : 'bg-[#FFFFFF] border-[#E4E4E7] hover:border-[#A1A1AA]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-semibold text-[#2563EB] tabular-nums">
                        Stage {stage.step}
                      </span>
                      <span className="text-xs text-[#71717A]">
                        {isSelected ? 'Selected' : 'Inspect'}
                      </span>
                    </div>
                    <p className="font-display text-base font-semibold text-[#09090B] mt-1">
                      {stage.title}
                    </p>
                    <p className="text-xs text-[#52525B] mt-1 leading-relaxed">{stage.summary}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Active Stage Specification Card */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E4E4E7] rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#E4E4E7]">
              <div>
                <p className="text-xs font-mono text-[#71717A] tabular-nums">
                  {activePipeline.name} · Step {activeStage.step}
                </p>
                <h4 className="font-display text-2xl font-bold text-[#09090B] mt-1">
                  {activeStage.title}
                </h4>
              </div>
              <span className="font-mono text-xs text-[#2563EB] font-medium">
                Local Execution
              </span>
            </div>

            <p className="text-base text-[#52525B] leading-relaxed">{activeStage.summary}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[#E4E4E7] space-y-1.5">
                <p className="text-xs font-medium text-[#71717A]">Stage Input</p>
                <p className="text-sm font-medium text-[#09090B] leading-relaxed">
                  {activeStage.inputs}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[#E4E4E7] space-y-1.5">
                <p className="text-xs font-medium text-[#71717A]">Automated Output</p>
                <p className="text-sm font-medium text-[#09090B] leading-relaxed">
                  {activeStage.output}
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs text-[#71717A]">
              <span>
                Step {selectedStageIndex + 1} of {activePipeline.stages.length}
              </span>
              <button
                type="button"
                onClick={() =>
                  setSelectedStageIndex((prev) => (prev + 1) % activePipeline.stages.length)
                }
                className="font-semibold text-[#2563EB] hover:underline underline-offset-4 cursor-pointer py-1"
              >
                Advance to Next Stage
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
