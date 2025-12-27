import Link from "next/link";
import { RxGithubLogo, RxLinkedinLogo, RxTwitterLogo, RxEnvelopeClosed } from "react-icons/rx";
import { Button } from "@/components/ui";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-100 py-8 px-4 border-t border-gray-700" id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links Column */}
          <div>
            <h5 className="font-semibold text-white text-body mb-4">Navigate</h5>
            <nav className="flex flex-col space-y-2">
              <Link href="#about-me" className="text-body-sm text-gray-100 hover:text-white transition-colors">
                About Me
              </Link>
              <Link href="#projects" className="text-body-sm text-gray-100 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="text-body-sm text-gray-100 hover:text-white transition-colors">
                Skills
              </Link>
              <Link href="#experience" className="text-body-sm text-gray-100 hover:text-white transition-colors">
                Experience
              </Link>
              <Link href="#education" className="text-body-sm text-gray-100 hover:text-white transition-colors">
                Education
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h5 className="font-semibold text-white text-body mb-4">Contact Info</h5>
            <div className="flex flex-col space-y-3">
              <a 
                href="mailto:vardan2701@gmail.com" 
                className="text-body-sm text-gray-100 hover:text-white transition-colors flex items-center gap-2"
                aria-label="Email Vardan Pal"
              >
                <RxEnvelopeClosed className="w-4 h-4" />
                vardan2701@gmail.com
              </a>
              <p className="text-body-sm text-gray-100">
                <span className="font-medium text-white">📍</span> Srinagar, India
              </p>
              <p className="text-body-sm text-gray-100">
                <span className="font-medium text-white">🎓</span> NIT Srinagar
              </p>
            </div>
          </div>

          {/* Social Column */}
          <div>
            <h5 className="font-semibold text-white text-body mb-4">Follow</h5>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/vardxn" 
                target="_blank" 
                rel="noreferrer noopener"
                className="text-gray-100 hover:text-white transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <RxGithubLogo className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/vardxn" 
                target="_blank" 
                rel="noreferrer noopener"
                className="text-gray-100 hover:text-white transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <RxLinkedinLogo className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com/vardxn" 
                target="_blank" 
                rel="noreferrer noopener"
                className="text-gray-100 hover:text-white transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                aria-label="Twitter Profile"
                title="Twitter"
              >
                <RxTwitterLogo className="w-6 h-6" />
              </a>
            </div>
            <p className="text-body-sm text-gray-100">
              Let&apos;s build something great together!
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-body-sm text-gray-100 text-center md:text-left">
              &copy; {new Date().getFullYear()} Vardan Pal. Crafted with care.
            </p>
            <div className="flex gap-4 text-body-sm">
              <Link href="#privacy" className="text-gray-100 hover:text-white transition-colors">
                Privacy
              </Link>
              <span className="text-gray-500">•</span>
              <Link href="#terms" className="text-gray-100 hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
