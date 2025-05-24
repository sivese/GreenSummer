import { useContext } from "react";
import { BGMContext } from "./bgm-player";

function BgmController() {
    const context = useContext(BGMContext);

    if(!context) return null;

    const { isMuted, setIsMuted, volume, setVolume, track, setTrack } = context;

    const tracks = [
        { name: 'Nap in the Summer', file: '/bgm-wave.mp3' },
    ];

    return (
        <div className="bg-gradient-to-b from-sky-50 via-sky-200 to-sky-400 text-gray-800 p-4 rounded shadow-md">
            <h2 className="text-lg font-bold mb-2">🎵 BGM Controller</h2>

            {/* Track Selection */}
            <label className="block mb-2">
                Track:
                <select
                    value={track}
                    onChange={(e) => setTrack(e.target.value)}
                    className="ml-2"
                >
                    {tracks.map((t) => (
                        <option key={t.file} value={t.file}>
                            {t.name}
                        </option>
                    ))}
                </select>
            </label>

            {/* Volume Slider */}
            <label className="block mb-2">
                Volume:
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="ml-2"
                />
                <span className="ml-2">{Math.round(volume * 100)}%</span>    
            </label>

            {/* Mute Button */}
            <button
                onClick={() => setIsMuted(!isMuted)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
            {isMuted ? 'Unmute' : 'Mute'}
            </button>
        </div>
    );
}

export default BgmController;