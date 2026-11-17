import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Layers } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

export default function Hero() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section id="top" className="pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-[#52525B]">
                <span className="text-[#2563EB] font-semibold">About Me</span>
                <span aria-hidden="true">·</span>
                <span>Computer Engineer</span>
                <span aria-hidden="true">·</span>
                <span>Sales Specialist</span>
              </div>

              <h1 className="font-display text-[clamp(2.25rem,4.2vw,3.75rem)] font-bold tracking-tight leading-[1.06] text-[#09090B] text-balance max-w-2xl">
                {PORTFOLIO_PROFILE.headline}
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-[#52525B] max-w-xl">
                {PORTFOLIO_PROFILE.lead}
              </p>
            </div>

            <div className="pt-8 flex flex-wrap items-center gap-5">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
              >
                <span>Explore Selected Work</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="https://qelemat.pages.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-[#09090B] hover:text-[#2563EB] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg"
              >
                <span>Live: qelemat.pages.dev</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Full-height Editorial Visual */}
          <div className="lg:col-span-5">
            <div className="h-72 sm:h-96 lg:h-full min-h-[340px] rounded-2xl overflow-hidden border border-[#E4E4E7] bg-[#F4F4F5] relative">
              {!imgFailed ? (
                <img
                  src={PORTFOLIO_PROFILE.heroImage}
                  alt={PORTFOLIO_PROFILE.heroImageAlt}
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#F4F4F5] to-[#E4E4E7]">
                  <Layers className="w-8 h-8 text-[#52525B] mb-3" />
                  <p className="font-display text-lg font-semibold text-[#09090B]">
                    Engineering &amp; Commercial Studio
                  </p>
                  <p className="text-sm text-[#52525B] mt-1">
                    Full-stack systems, Flutter ERP, and color tooling
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column KPI Strip Below Hero Split */}
        <div className="mt-12 pt-8 border-t border-[#E4E4E7] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PORTFOLIO_PROFILE.metrics.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <p className="text-xs font-medium text-[#71717A]">{metric.label}</p>
              <p className="font-display text-xl font-bold tracking-tight text-[#09090B] tabular-nums">
                {metric.value}
              </p>
              <p className="text-sm text-[#52525B]">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
