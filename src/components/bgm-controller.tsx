import { useContext } from "react";
import { BGMContext } from "./bgm-player";
import { FaVolumeMute } from "react-icons/fa";
import { FaVolumeHigh} from "react-icons/fa6";

function BgmController({ className }: { className?: string }) {
    const context = useContext(BGMContext);

    if(!context) return null;

    const { isMuted, setIsMuted } = context;

    return (
        <div className={className} >
            {/* Mute Button */}
            <button
                onClick={() => setIsMuted(!isMuted)}
            >
            {isMuted ?  <FaVolumeHigh/> : <FaVolumeMute/> }
            </button>
        </div>
    );
}

export default BgmController;