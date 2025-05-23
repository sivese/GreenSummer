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

function BgmPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(0.5);
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
            audio.src = '/bgm-wave.mp3';
        }
    }, [track]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume; // Set volume to 50%
        }
    }, [volume]);

    return (
        <BGMContext.Provider value={{ 
            audio: audioRef.current, 
            isMuted, 
            setIsMuted, 
            volume, 
            setVolume, 
            track, 
            setTrack 
        }}>
        </BGMContext.Provider>
    );
}

export default BgmPlayer;