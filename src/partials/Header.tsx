import TypewriterText from "../ui/TypewriterText";
import JustifiedText from "../ui/JustifiedText";
import RotatingCat from "../ui/RotatingCat";
import { Linkedin, Github } from "lucide-react";

interface HeaderProps {
  onDiscoChange: (isActive: boolean) => void;
}

export default function Header({ onDiscoChange }: HeaderProps) {
  return (
    <header className="w-full h-screen flex items-center justify-center">
      <RotatingCat onDiscoChange={onDiscoChange} />
      <div className="text-center max-w-xl mx-auto px-6 sm:px-8 md:px-8 lg:px-8">
        <div className="text-6xl">
          <TypewriterText
            text="hi, i'm muslima."
            speed={100}
            className="block"
            highlightWords={["muslima"]}
          />
        </div>
        <p className="text-2xl font-semibold mt-2">oiiai ooiiai</p>
        <JustifiedText className="mt-2 text-base text-lg max-w-2xl mx-auto leading-relaxed">
          你为什么在这里？
        </JustifiedText>
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
