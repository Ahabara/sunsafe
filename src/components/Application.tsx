// @ts-nocheck
import Report from "./Report";
import Recommendations from "./Recomendation";
import Reminder from "./Reminder";
import {useEffect, useState} from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Application = () => {
    const [weather, setWeather] = useState<undefined | any>(undefined)
    const [city, setCity] = useState("")
    const [error, setError] = useState("")
    const [maxUV, setMaxUV] = useState<number | undefined>()
    const [maxStyling, setMaxStyling] = useState(1)
    const [dates, setDates] = useState([])
    const [UVs, setUVs] = useState([])
    const [currentUV, setCurrentUV] = useState<number>()
    const [coOrds, setCoOrds] = useState(['-37.7990822', '144.8962504'])

    const handleGeocodeByDefault = async (address) => {
        const url = `https://fourtitude.me/UVI/UVIByGeo/${address}`
        try {
            const response = await fetch(url);
            if (!response.ok) {
                return alert('Failed to fetch geocode data');
            }
            const data = await response.json()
            if (data.success) {
                console.log()
                const JSONFILE = JSON.parse(data.data)
                const [datesArray, UVArray] = sanitise(JSONFILE)
                setDates(datesArray)
                setUVs(UVArray)
                console.log(UVArray)
                setMaxUV(Math.max(...UVArray))
                setWeather(data.data)
                setCurrentUV(UVArray[0])
                setMaxStyling(Math.floor(Math.max(...UVArray)))
            } else throw Error("whoops")
        } catch (error) {
            console.error(error);
            const res = await fetch(`https://fourtitude.me/UVI/UVIByCity/clayton`)
            const data = await res.json()
            console.log("error 51 ", data.data())
            if (data.success) {
                const JSONFILE = JSON.parse(data.data)
                const [datesArray, UVArray] = sanitise(JSONFILE)
                setDates(datesArray)
                setUVs(UVArray)
                setMaxUV(Math.max(...UVArray))
                setWeather(data.data)
                setCurrentUV(UVArray[0])
                setMaxStyling(Math.floor(Math.max(...UVArray)))
            }

        }
    };

    useEffect(() => {
        const getLocation = async () => {
            try {
                const position = await new Promise<GeolocationPosition>((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });
                const address = `${position.coords.latitude}&${position.coords.longitude}`
                console.log(`Address is ${address}`)
                await handleGeocodeByDefault(address);
            } catch (error) {
                console.error('Error getting user location:', error);
                await fetch("https://fourtitude.me/uv/UVLevel/clayton,melbourne");
            }
        };

        getLocation();

        return () => {
            // Cleanup function to stop continuous execution (optional)
        };
    }, []);

    const handleGeocode = async () => {
        if (city.length === 0) {
            return alert("Please enter a city name")
        }
        try {
            const response = await fetch(`https://fourtitude.me/UVI/UVIByCity/${city}`);
            if (!response.ok) {
                alert('Failed to fetch geocode data');
            }
            const data = await response.json();
            if (data.success) {
                const JSONFILE = JSON.parse(data.data)
                const [datesArray, UVArray] = sanitise(JSONFILE)
                setDates(datesArray)
                setUVs(UVArray)
                setMaxUV(Math.max(...UVArray))
                setWeather(data.data)
                setCurrentUV(UVArray[0])
                setMaxStyling(Math.floor(Math.max(...UVArray)))
            } else {
                setError(data.msg)
                return alert(data.msg)
            }
        } catch (error) {
            setError('Failed to fetch geocode data');
        }
    };

    const sanitise = (JSONFILE: object) => {
        const datesArray = []
        const UVArray = []
        for (const timestamp in JSONFILE) {
            const date = new Date(parseInt(timestamp) * 1000);
            const formattedDate = date.toLocaleString('en-US', {
                hour: 'numeric',
                hour12: true // To display time in 12-hour format (AM/PM)
            });
            datesArray.push(formattedDate);
            UVArray.push(JSONFILE[timestamp] as number)
        }
        return [datesArray, UVArray]
    }

    const colorsUV = {
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

    return (
        <>
            <Nav/>
            <div id={"mainapp"} className="max-w-6xl mx-auto">
                <div className={"px-4 py-12"}>
                    <h1 className="text-3xl font-bold">
                        I want to check the UV Index in
                        <input
                            onChange={(event => setCity(event.target.value))}
                            className="animate-pulse underline underline-offset-4 appearance-none bg-transparent border-none w-48 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text" placeholder="Melbourne" aria-label="Full name"/>
                        <button className="btn  sm:btn-md md:btn-md lg:btn-lg " onClick={handleGeocode}>Search <svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                            className="w-4 h-4 opacity-70">
                            <path fillRule="evenodd"
                                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                  clipRule="evenodd"/>
                        </svg>
                        </button>
                    </h1>
                </div>
                <div className="divider"/>
                <Report
                    currentUV={currentUV}
                    dates={dates}
                    colorsUV={colorsUV}
                    maxStyling={maxStyling}
                    maxUV={maxUV}
                    UVs={UVs}
                />
                <Recommendations maxUV={maxUV} currentUV={currentUV}/>
                <Reminder coOrds={coOrds}/>
            </div>
            <Footer/>
        </>
    );
};

export default Application;
