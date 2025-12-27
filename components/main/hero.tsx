import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col min-h-[100svh] w-full overflow-hidden">
      <div
        className="absolute inset-0 -z-30 bg-gradient-to-b from-[#0b032d] via-[#110044] to-[#050018]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-25 hero-aurora" aria-hidden="true" />
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center -z-20 rotate-180 scale-[1.08] md:scale-100"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
        {/* Optional MP4 fallback: add a blackhole.mp4 file to /public/videos and uncomment below */}
        {/* <source src="/videos/blackhole.mp4" type="video/mp4" /> */}
      </video>

      <HeroContent />
    </div>
  );
};
