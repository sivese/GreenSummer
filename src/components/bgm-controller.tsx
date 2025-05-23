import { useContext } from "react";
import { BGMContext } from "./bgm-player";

function BgmController() {
    const context = useContext(BGMContext);

    if(!context) return null;

    return (
        <div className="bgm-controller">
        <button className="bgm-button">Play</button>
        <button className="bgm-button">Pause</button>
        <button className="bgm-button">Stop</button>
        </div>
    );
}

export default BgmController;