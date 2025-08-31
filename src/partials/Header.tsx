import TypewriterText from "../ui/TypewriterText";
import { Linkedin, Github } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full h-screen flex items-center justify-center px-6 md:px-12 lg:px-96">
      <div className="text-center max-w-4xl mx-auto">
        <div className="text-6xl">
          <TypewriterText
            text="hi, i'm muslima."
            speed={100}
            className="block"
            highlightWords={["muslima"]}
          />
        </div>
        <p className="text-2xl font-semibold mt-2">
          I do create stuff and do research
        </p>
        <p className="mt-2 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          I'm a computer science graduate, a Master in Business Analytics, and a
          PhD student in Operational Research
        </p>
        <p className="mt-2 text-base">muslimakarimova@gmail.com</p>

        {/* Social Media Buttons */}
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/mousiyah/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          <a
            href="https://github.com/mousiyah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>

        {/* Email Button */}
        <div className="mt-6">
          <a href="mailto:muslimakarimova@gmail.com" className="btn-primary">
            Email me
          </a>
        </div>
      </div>
    </header>
  );
}
