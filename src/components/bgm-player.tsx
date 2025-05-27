import { createContext, useEffect, useRef, useState } from 'react';

export const BGMContext = createContext<{
    audio: HTMLAudioElement | null;
    isMuted: boolean;
    setIsMuted: (isMuted: boolean) => void;
    volume: number;
    setVolume: (volume: number) => void;
    track: string;
    setTrack: (track: string) => void;
} | null>(null);

type Props = {
  children: React.ReactNode;
};

function BgmPlayer({ children }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [track, setTrack] = useState('/bgm-wave.mp3');

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    const audio = new Audio(track);
    audio.loop = true;
    audio.volume = volume;

    if (!isMuted) {
      audio.play().catch(console.warn);
    }

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [track]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <BGMContext.Provider
      value={{ audio: audioRef.current, isMuted, setIsMuted, volume, setVolume, track, setTrack }}
    >
      {children} {/* ✅ This allows controller (and rest of app) to use the context */}
    </BGMContext.Provider>
  );
}

export default BgmPlayer;