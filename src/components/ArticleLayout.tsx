import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, ChevronRight, Share2, Check } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ArticleMeta, ARTICLES } from '../types';

interface TocItem {
  id: string;
  label: string;
}

interface ArticleLayoutProps {
  currentSlug: string;
  title: string;
  kicker: string;
  readTime: string;
  intro: string;
  tableOfContents: TocItem[];
  heroGraphic: React.ReactNode;
  children: React.ReactNode;
}

export const ArticleLayout: React.FC<ArticleLayoutProps> = ({
  currentSlug,
  title,
  kicker,
  readTime,
  intro,
  tableOfContents,
  heroGraphic,
  children,
}) => {
  const [copied, setCopied] = React.useState(false);

  // Filter other articles for the "Continue Learning" section
  const otherArticles = ARTICLES.filter((a) => a.slug !== currentSlug);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-neutral-200 flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb & Back navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="flex items-center justify-between gap-4 border-b border-neutral-800/80 pb-4">
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors group"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#e10600]" />
                Back to Home
              </Link>
              <span className="text-neutral-600 hidden sm:inline">|</span>
              <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-400">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span className="text-neutral-600">/</span>
                <span className="text-neutral-300 font-medium truncate max-w-[240px]">{title}</span>
              </nav>
            </div>

            <div className="flex items-center gap-4 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 font-mono">
                <Clock className="w-3.5 h-3.5 text-neutral-500" />
                {readTime}
              </span>
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Copy article link to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copied' : 'Share'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Article Header & Hero Visual */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e10600] mb-3 block">
              {kicker}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] mb-5 font-display text-balance">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl">
              {intro}
            </p>
          </div>

          {/* Hero Visual Container */}
          <div className="mt-8 rounded-xl overflow-hidden border border-neutral-800 bg-[#121217] shadow-2xl">
            {heroGraphic}
          </div>
        </header>

        {/* Content Layout with Sidebar Table of Contents */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Table of Contents (Sticky on desktop) */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <div className="sticky top-24 rounded-xl border border-neutral-800 bg-[#101015] p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-300 mb-4 pb-3 border-b border-neutral-800">
                  <BookOpen className="w-4 h-4 text-[#e10600]" />
                  <span>In This Guide</span>
                </div>
                <nav className="space-y-1.5" aria-label="Table of Contents">
                  {tableOfContents.map((item, idx) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="group flex items-start gap-2.5 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
                    >
                      <span className="font-mono text-neutral-400 group-hover:text-[#e10600] shrink-0 pt-0.5">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <span className="leading-snug">{item.label}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Article Content Column */}
            <article className="lg:col-span-8 order-1 lg:order-2 max-w-none text-neutral-300">
              <div className="space-y-12 leading-relaxed text-[15px] sm:text-base">
                {children}
              </div>
            </article>
          </div>
        </div>

        {/* Continue Learning Section */}
        <section className="border-t border-[#1e1e26] bg-[#09090c] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#e10600] block mb-1">
                  Next on the Grid
                </span>
                <h2 className="text-2xl font-bold text-white tracking-tight font-display">
                  Continue Your F1 Learning Path
                </h2>
              </div>
              <Link
                to="/"
                className="text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors flex items-center gap-1 shrink-0"
              >
                View Full Path
                <ChevronRight className="w-3.5 h-3.5 text-[#e10600]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherArticles.map((article) => (
                <Link
                  key={article.slug}
                  to={article.route}
                  className="group rounded-xl border border-neutral-800 bg-[#111116] p-6 hover:border-[#e10600]/60 hover:bg-[#14141a] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                      <span className="font-mono text-[#e10600] font-bold">GUIDE {article.number}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors mb-2 font-display">
                      {article.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                      {article.summary}
                    </p>
                  </div>
                  <div className="flex items-center text-xs font-semibold text-white group-hover:translate-x-1 transition-transform">
                    Read Next Guide
                    <ChevronRight className="w-3.5 h-3.5 ml-1 text-[#e10600]" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
