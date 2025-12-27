import { Encryption } from "@/components/main/encryption";
import { Education } from "@/components/main/education";
import { Experience } from "@/components/main/experience";
import { Footer } from "@/components/main/footer";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-0">
        {/* Hero: First impression and primary CTA */}
        <Hero />
        
        {/* Projects: Show work first - let results speak for themselves */}
        <Projects />
        
        {/* Skills: Demonstrate technical expertise */}
        <Skills />
        
        {/* Experience: Professional background */}
        <Experience />
        
        {/* Education: Academic credentials */}
        <Education />
        
        {/* Security/Performance: Trust indicators */}
        <Encryption />
      </div>
      
      {/* Footer: Contact and navigation footer */}
      <Footer />
    </main>
  );
}
