const MARQUEE_PHRASES = [
  'Selected Works',
  'Qelemat Color Suite',
  'Jstock Paint ERP',
  'Local AI Video & Research',
  'Company Monitor',
  'Benaber.com Coffee Exporters',
  '@yabedebingo Mini App',
  'DAN Energy Security & Ekub',
];

export default function MarqueeDivider() {
  const repeated = [...MARQUEE_PHRASES, ...MARQUEE_PHRASES];

  return (
    <div
      aria-hidden="true"
      className="border-y border-[#E4E4E7] bg-[#FFFFFF] py-3.5 overflow-hidden select-none"
    >
      <div className="animate-marquee items-center gap-8 text-sm font-medium text-[#52525B]">
        {repeated.map((phrase, idx) => (
          <span key={`${phrase}-${idx}`} className="inline-flex items-center gap-8 whitespace-nowrap">
            <span>{phrase}</span>
            <span className="text-[#2563EB]">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
