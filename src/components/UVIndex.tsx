// @ts-nocheck

import {Card, CardBody, CardHeader, Typography,} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import {Square3Stack3DIcon} from "@heroicons/react/24/outline";
import {useEffect, useMemo, useState} from "react";
import {Skeleton} from "./Skeleton";


export default function UVIndex({time, uv}) {

    const [isChecked, setIsChecked] = useState(false);
    // const [uvIndex, setUVindex] = useState([])

    const options = useMemo(() => {
            return {
                type: "bar",
                height: 240,
                series: [
                    {
                        name: "UV",
                        data: uv,
                    },
                ],
                options: {
                    chart: {
                        toolbar: {
                            show: false,
                        },
                    },
                    title: {
                        show: "",
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    colors: ["#020617"],
                    stroke: {
                        lineCap: "round",
                        curve: "smooth",
                    },
                    markers: {
                        size: 0,
                    },
                    xaxis: {
                        axisTicks: {
                            show: false,
                        },
                        axisBorder: {
                            show: false,
                        },
                        labels: {
                            style: {
                                colors: "#616161",
                                fontSize: "12px",
                                fontFamily: "inherit",
                                fontWeight: 400,
                            },
                        },
                        categories: time,
                    },
                    yaxis: {
                        labels: {
                            style: {
                                colors: "#616161",
                                fontSize: "12px",
                                fontFamily: "inherit",
                                fontWeight: 400,
                            },
                        },
                    },
                    grid: {
                        show: true,
                        borderColor: "#dddddd",
                        strokeDashArray: 5,
                        xaxis: {
                            lines: {
                                show: true,
                            },
                        },
                        padding: {
                            top: 5,
                            right: 20,
                        },
                    },
                    fill: {
                        opacity: 0.8,
                    },
                    tooltip: {
                        theme: "dark",
                    },
                },
            }
        }
        , [time, uv])
    const optionsLine = useMemo(() => {
        return {
            type: "line",
            height: 240,
            series: [
                {
                    name: "UV",
                    data: uv,
                },
            ],
            options: {
                chart: {
                    toolbar: {
                        show: false,
                    },
                },
                title: {
                    show: "",
                },
                dataLabels: {
                    enabled: false,
                },
                colors: ["#020617"],
                stroke: {
                    lineCap: "round",
                    curve: "smooth",
                },
                markers: {
                    size: 0,
                },
                xaxis: {
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                    labels: {
                        style: {
                            colors: "#616161",
                            fontSize: "12px",
                            fontFamily: "inherit",
                            fontWeight: 400,
                        },
                    },
                    categories: time,
                },
                yaxis: {
                    labels: {
                        style: {
                            colors: "#616161",
                            fontSize: "12px",
                            fontFamily: "inherit",
                            fontWeight: 400,
                        },
                    },
                },
                grid: {
                    show: true,
                    borderColor: "#dddddd",
                    strokeDashArray: 5,
                    xaxis: {
                        lines: {
                            show: true,
                        },
                    },
                    padding: {
                        top: 5,
                        right: 20,
                    },
                },
                fill: {
                    opacity: 0.8,
                },
                tooltip: {
                    theme: "dark",
                },
            },
        }
    }, [time, uv])

    const [chartConfig, setChartConfig] = useState<any>(optionsLine);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        isChecked ? setChartConfig(optionsLine) : setChartConfig(options)
    };

    useEffect(() => {
        if (uv.length > 0 && isChecked) {
            setChartConfig(options);
        } else {
            setChartConfig(optionsLine);
        }
    }, [uv, isChecked, options, optionsLine]);


    return (
        <div>
            <div className={"flex justify-center py-8 gap-4"}>
                <p>Line</p>
                <input type="checkbox" checked={isChecked}
                       onChange={handleCheckboxChange}
                       className="toggle toggle-info"/>
                <p>Bar</p>
            </div>
            {uv.length > 0 ? <Card placeholder={""}
            >
                <CardHeader
                    placeholder={""}

                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
                >
                    <div className="m-3 w-max rounded-lg bg-gray-900 p-5 text-white">
                        <Square3Stack3DIcon className="h-6 w-6"/>
                    </div>
                    <div>
                        <Typography variant="h6" color="blue-gray" placeholder={""}
                        >
                            UV Prediction
                        </Typography>
                        <Typography
                            variant="small"
                            color="gray"
                            className="max-w-sm font-normal"
                            placeholder={""}
                        >

                            {time.length > 0 ? <p>Please dress accordingly and don't forget to slip, slop, slap!</p> :
                                <p>Please enter a city to view visualisation</p>}
                        </Typography>
                    </div>
                </CardHeader>
                {time.length > 0 ? <CardBody className="px-2 pb-0" placeholder={""}>
                        <Chart {...chartConfig} />
                    </CardBody>
                    : <p className={"text-center pb-32"}> No data to present</p>
                }

            </Card> : <Skeleton/>}

        </div>

    );
}