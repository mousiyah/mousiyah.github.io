import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import catImage from "../assets/images/cat.png";
import oiiaAudio from "../assets/music/oiia.mp3";

export default function RotatingCat() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    return () => {
      audio?.pause();
    };
  }, []);

  const toggleAudio = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <>
      <img
        className="rotating-cat"
        src={catImage}
        alt="Rotating oiiai ooiiai cat meme"
      />
      <button
        className="voice-toggle md:mt-3"
        type="button"
        aria-label={isPlaying ? "Turn cat voice off" : "Turn cat voice on"}
        aria-pressed={isPlaying}
        onClick={toggleAudio}
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
      <div className="voice-hint" aria-hidden="true">
        <svg
          className="voice-hint__curve"
          viewBox="0 -16 64 52"
          role="presentation"
        >
          <path d="M 60 32 C 52 10, 30 2, 6 -12" />
          <path d="M 15 -12 L 6 -12 L 9 -4" />
        </svg>
        <span>
          click here for
          <br />
          full experience
        </span>
      </div>
      <audio ref={audioRef} src={oiiaAudio} loop preload="none" />
    </>
  );
}
