import UVIndex from "./UVIndex";

const Report = ({dates, colorsUV, maxStyling, maxUV, UVs}) => {
    return (

        <div className={"  rounded-lg bg-pink-200 p-14"}>
            <h1 className="font-bold text-3xl pb-14"> UV Index </h1>
            <p className={"text-center text-2xl"}>Today the UV Index will reach </p>
            <h1 className={colorsUV[maxStyling]}>{maxUV}</h1>
            {dates.length >= 0 && <UVIndex time={dates.slice(0, 23)} uv={UVs.slice(0, 24)}/>}

        </div>
    );
};

export default Report;
