import Link from "next/link";
import {
  TrendingUp,
  Users,
  DollarSign,
  Star,
  Zap,
  ExternalLink,
} from "lucide-react";

export const MohishreeCard = () => {
  return (
    <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden border border-[#2A0E61] shadow-lg bg-gradient-to-br from-slate-900 to-slate-800 hover:border-purple-500 transition">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-6 text-white">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h2 className="text-2xl font-bold">Mohishree Facility Services</h2>
            <p className="text-sm opacity-90 mt-1">B2B SaaS Platform</p>
          </div>
          <a
            href="https://mohishreefacilities.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition"
          >
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tech Stack */}
        <div className="mb-4">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-slate-700/50 px-2 py-1 rounded text-xs text-gray-300">
              Next.js 14
            </span>
            <span className="bg-slate-700/50 px-2 py-1 rounded text-xs text-gray-300">
              TypeScript
            </span>
            <span className="bg-slate-700/50 px-2 py-1 rounded text-xs text-gray-300">
              PostgreSQL
            </span>
            <span className="bg-slate-700/50 px-2 py-1 rounded text-xs text-gray-300">
              Vercel
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-50 mb-4">
          Professional facility management SaaS that transformed a traditional
          service business into a digital powerhouse. Built to scale, now
          generating $50K+ annual revenue and serving 100+ active clients.
        </p>

        {/* Quick Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
          <div className="bg-slate-800/50 rounded p-3 text-center">
            <p className="text-cyan-500 font-bold text-lg">3x</p>
            <p className="text-xs text-gray-400">Revenue Growth</p>
          </div>
          <div className="bg-slate-800/50 rounded p-3 text-center">
            <p className="text-purple-500 font-bold text-lg">100+</p>
            <p className="text-xs text-gray-400">Active Clients</p>
          </div>
          <div className="bg-slate-800/50 rounded p-3 text-center">
            <p className="text-green-500 font-bold text-lg">$50K+</p>
            <p className="text-xs text-gray-400">Annual Revenue</p>
          </div>
          <div className="bg-slate-800/50 rounded p-3 text-center">
            <p className="text-yellow-500 font-bold text-lg">4.4★</p>
            <p className="text-xs text-gray-400">Customer Rating</p>
          </div>
          <div className="bg-slate-800/50 rounded p-3 text-center">
            <p className="text-orange-500 font-bold text-lg">40% ⬆</p>
            <p className="text-xs text-gray-400">Inquiries Growth</p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-4 pb-4 border-t border-slate-700">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
            Key Features
          </p>
          <ul className="space-y-1 text-sm text-gray-50">
            <li>✓ Real-time service booking system with quote generation</li>
            <li>✓ Multi-service management (15+ cleaning services)</li>
            <li>✓ 100+ customer testimonials & 4 detailed case studies</li>
            <li>✓ SEO-optimized for local business growth</li>
            <li>✓ CI/CD automated deployments on Vercel</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="flex gap-3 pt-2">
          <Link
            href="https://mohishreefacilities.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-center py-2 rounded font-semibold hover:opacity-90 transition text-sm"
          >
            Visit Website
          </Link>
          <Link
            href="/MOHISHREE_PROJECT_SUMMARY.md"
            className="flex-1 border border-slate-600 text-white text-center py-2 rounded font-semibold hover:border-purple-500 transition text-sm"
          >
            Full Case Study
          </Link>
        </div>
      </div>
    </div>
  );
};
