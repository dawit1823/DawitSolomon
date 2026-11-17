import { FormEvent, useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, Send } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [scope, setScope] = useState('Web or Mobile Application');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please complete your name, email, and project brief.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <footer id="contact" className="bg-[#FFFFFF] border-t border-[#E4E4E7]">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#09090B] text-balance">
                Let&apos;s build software grounded in real sales &amp; operations.
              </h2>
              <p className="text-base text-[#52525B] leading-relaxed">
                Available for full-stack web engineering, Flutter business &amp; ERP apps, local AI
                automation systems, and customer-focused business software.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[#E4E4E7] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <a
                    href={`mailto:${PORTFOLIO_PROFILE.email}`}
                    className="text-sm font-medium text-[#09090B] hover:text-[#2563EB] truncate"
                  >
                    {PORTFOLIO_PROFILE.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#09090B] bg-[#FFFFFF] border border-[#E4E4E7] hover:border-[#A1A1AA] rounded-md transition-colors shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-sm">
                <a
                  href="https://qelemat.pages.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-[#09090B] hover:text-[#2563EB] transition-colors"
                >
                  <span>qelemat.pages.dev</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="https://benaber.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-[#09090B] hover:text-[#2563EB] transition-colors"
                >
                  <span>Benaber.com</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="https://t.me/yabedebingo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-[#09090B] hover:text-[#2563EB] transition-colors"
                >
                  <span>@yabedebingo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#FAFAFA] border border-[#E4E4E7] rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="py-6 space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB] text-white flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#09090B]">
                    Inquiry prepared for {PORTFOLIO_PROFILE.name}
                  </h3>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    Thank you, {name}. Your brief regarding <strong className="text-[#09090B]">{scope}</strong> is
                    ready. You can also send this directly via your mail client below.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={`mailto:${PORTFOLIO_PROFILE.email}?subject=${encodeURIComponent(
                        `Portfolio Inquiry: ${scope}`
                      )}&body=${encodeURIComponent(
                        `Name: ${name}\nReply Email: ${email}\nScope: ${scope}\n\n${message}`
                      )}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      <span>Open in Mail App</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="px-4 py-2.5 text-sm font-medium text-[#09090B] hover:text-[#2563EB] transition-colors cursor-pointer"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-xs font-medium text-[#52525B]">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Abebe Kebede"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#E4E4E7] rounded-lg text-[#09090B] placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#2563EB]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-xs font-medium text-[#52525B]">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#E4E4E7] rounded-lg text-[#09090B] placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#2563EB]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-scope" className="block text-xs font-medium text-[#52525B]">
                      Project Focus
                    </label>
                    <select
                      id="contact-scope"
                      value={scope}
                      onChange={(e) => setScope(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#E4E4E7] rounded-lg text-[#09090B] focus:outline-none focus:border-[#2563EB]"
                    >
                      <option>Web or Mobile Application</option>
                      <option>Paint / Construction ERP &amp; Accounting (Jstock-style)</option>
                      <option>Local AI Video or Research Automation</option>
                      <option>Telegram Mini App &amp; Interactive Games</option>
                      <option>Business &amp; Sales Workflow Software</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-medium text-[#52525B]">
                      Project Brief
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your goals, timeline, and platform requirements..."
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#E4E4E7] rounded-lg text-[#09090B] placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#2563EB]"
                    />
                  </div>

                  {error && (
                    <p role="alert" className="text-xs font-medium text-[#DC2626]">
                      {error}
                    </p>
                  )}

                  <div className="pt-1 flex items-center justify-between gap-4">
                    <span className="text-xs text-[#71717A]">
                      Direct response via {PORTFOLIO_PROFILE.email}
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#09090B] hover:bg-[#2563EB] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>Prepare Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Quiet Copyright Footer */}
        <div className="mt-16 pt-8 border-t border-[#E4E4E7] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p>
            &copy; {new Date().getFullYear()} {PORTFOLIO_PROFILE.name}. Computer Engineer &amp; Sales
            Specialist.
          </p>
          <div className="flex items-center gap-6">
            <a href="#work" className="hover:text-[#09090B] transition-colors">
              Work
            </a>
            <a href="#timeline" className="hover:text-[#09090B] transition-colors">
              Timeline
            </a>
            <a href="#automation" className="hover:text-[#09090B] transition-colors">
              AI Automation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
