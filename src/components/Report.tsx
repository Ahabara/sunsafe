// @ts-nocheck
import UVIndex from "./UVIndex";
import UVChart from "../assets/uv-index.png"

const Report = ({dates, colorsUV, maxStyling, maxUV, UVs, currentUV}) => {
    const currentUVDisplay = {
        0: "py-8 text-center text-8xl text-green-500 font-bold",
        1: "py-8 text-center text-8xl text-green-500 font-bold",
        2: "py-8 text-center text-8xl text-green-500 font-bold",
        3: "py-8 text-center text-8xl text-yellow-500 font-bold",
        4: "py-8 text-center text-8xl text-yellow-500 font-bold",
        5: "py-8 text-center text-8xl text-orange-500 font-bold",
        6: "py-8 text-center text-8xl text-orange-500 font-bold",
        7: "py-8 text-center text-8xl text-orange-500 font-bold",
        8: "py-8 text-center text-8xl text-red-500 font-bold",
        9: "py-8 text-center text-8xl text-red-500 font-bold",
        10: "py-8 text-center text-8xl text-red-500 font-bold",
        11: "py-8 text-center text-8xl text-fuchsia-600 font-bold",
        12: "py-8 text-center text-8xl text-fuchsia-600 font-bold",
    }
    const styling = currentUVDisplay[Math.floor(currentUV)]
    return (

        <div className={"rounded-lg bg-pink-200 p-14"}>
            <h1 className="font-bold text-3xl pb-14"> UV Index </h1>
            <div className="flex justify-center">
                <div><p className={"text-center text-2xl px-12"}>Today's Maximum </p>
                    <h1 className={colorsUV[maxStyling]}>{maxUV}</h1></div>

                <div><p className={"text-center text-2xl px-12"}>Current UV </p>
                    <h1 className={styling}>{currentUV}</h1></div>
            </div>

            <div className="flex items-center justify-center">
                <img src={UVChart} className={"bg-white rounded-md h-48"} alt="UV Chart"/></div>
            {dates.length >= 0 && <UVIndex time={dates.slice(0, 23)} uv={UVs.slice(0, 24)}/>}

        </div>
    );
};
//

export default Report;
