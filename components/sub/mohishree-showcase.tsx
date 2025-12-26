import { TrendingUp, Users, DollarSign, Star, Zap } from "lucide-react";

export const MohishreeShowcase = () => {
  const metrics = [
    {
      icon: <TrendingUp className="w-8 h-8 text-cyan-500" />,
      label: "Business Growth",
      value: "3x Revenue",
      detail: "Expanded to 13+ service zones",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      label: "Active Clients",
      value: "100+",
      detail: "92% satisfaction rate",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      label: "Revenue Impact",
      value: "$50K+",
      detail: "Additional annual revenue",
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      label: "Customer Rating",
      value: "4.4★",
      detail: "From 100+ reviews",
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      label: "Inquiry Growth",
      value: "40% ⬆",
      detail: "Booking conversions +25%",
    },
  ];

  return (
    <div className="w-full py-10 px-4">
      {/* Project Header */}
      <div className="max-w-5xl mx-auto mb-10">
        <div className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg p-8 text-white">
          <h2 className="text-4xl font-bold mb-3">Mohishree Facility Services</h2>
          <p className="text-lg opacity-90 mb-4">
            Professional B2B SaaS Platform | Live at{" "}
            <a
              href="https://mohishreefacilities.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold hover:opacity-80 transition"
            >
              mohishreefacilities.com
            </a>
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              Next.js 14
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              TypeScript
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              PostgreSQL
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              Vercel
            </span>
          </div>

          {/* Short Description */}
          <p className="text-base leading-relaxed">
            Transformed a traditional cleaning service business into a digital-native SaaS platform. 
            From concept to production in 10 weeks. Now serving as the company&apos;s primary revenue driver, 
            generating $50K+ annually through online channels while enabling 3x business expansion.
          </p>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
          Business Impact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 border border-slate-700 hover:border-purple-500 transition"
            >
              <div className="flex items-center gap-2 mb-2">
                {metric.icon}
                <span className="text-xs text-gray-400 font-semibold">
                  {metric.label}
                </span>
              </div>
              <p className="text-xl font-bold text-white mb-1">{metric.value}</p>
              <p className="text-xs text-gray-500">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto mt-10">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
          Platform Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Smart Booking System",
              desc: "Real-time service booking with instant quote generation",
            },
            {
              title: "Service Management",
              desc: "4 main categories with 15+ specialized cleaning services",
            },
            {
              title: "Customer Portal",
              desc: "Track requests, view history, manage preferences",
            },
            {
              title: "Case Studies",
              desc: "4 detailed success stories from enterprise clients",
            },
            {
              title: "Testimonials & Reviews",
              desc: "100+ verified customer reviews with 4.4★ average rating",
            },
            {
              title: "SEO Optimization",
              desc: "Local business schema, mobile-responsive, 2.5s load time",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-lg p-4 border border-slate-700"
            >
              <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-5xl mx-auto mt-10">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
          Results & Growth
        </h3>
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg p-8 border border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-cyan-500 mb-3 text-lg">
                Before Website
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>✗ Word-of-mouth marketing only</li>
                <li>✗ Manual booking process</li>
                <li>✗ Local market only (3 zones)</li>
                <li>✗ 20-30 active clients</li>
                <li>✗ No online brand presence</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-500 mb-3 text-lg">
                After Website
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Professional digital presence</li>
                <li>✓ Automated booking system</li>
                <li>✓ Regional expansion (13+ zones)</li>
                <li>✓ 100+ active clients</li>
                <li>✓ $50K+ online revenue channel</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-600">
            <p className="text-gray-300">
              <span className="font-semibold text-white">Key Achievement:</span> This platform doesn&apos;t just showcase coding 
              skills—it demonstrates full-stack development that drives real business growth. From day one, 
              the website contributed to measurable revenue, client acquisition, and market expansion.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto mt-10 text-center">
        <a
          href="https://mohishreefacilities.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition"
        >
          Visit Live Website →
        </a>
      </div>
    </div>
  );
};
