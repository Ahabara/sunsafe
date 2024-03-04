import './App.css'
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Sunscreen from "./assets/sunscreen.png"
import Shirt from "./assets/hawaiian-shirt.png"
import Hat from "./assets/pamela-hat.png"
import UVIndex from "./components/UVIndex";

function App() {
    return (
        <>
            <Nav/>
            <div className={"px-4 py-12"}>
                <h1 className="text-3xl font-bold">
                    I want to check the UV Index in
                    <input
                        className="animate-pulse underline underline-offset-4 appearance-none bg-transparent border-none w-48 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text" placeholder="Melbourne" aria-label="Full name"/>

                    <button className="btn  sm:btn-md md:btn-md lg:btn-lg ">Search <svg
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
            <div className={" h-screen  rounded-lg bg-gray-200 p-14"}>
                <h1 className="font-bold text-3xl pb-14"> UV Index </h1>
                <p className={"text-center text-2xl"}>Today the UV Index will reach </p>
                <h1 className={"py-8 text-center text-8xl text-red-900"}>8</h1>
                <UVIndex/>
            </div>

            <div className={"w-screen h-screen "}>
                <h1 className={"py-8 text-4xl"}> Clothes Recommendation</h1>
                <p className={"pb-24 text-xl"}> To dress according to the UV index today, you should: </p>
                <div className={"lg:grid lg:grid-cols-3 px-12"}>
                    <div className="card w-96 bg-base-100 shadow-xl">

                        <figure><img src={Sunscreen}
                                     className={"w-32"}
                                     alt="Sunscreen"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Sunscreen 🧴
                                <div className="badge badge-secondary">!</div>
                            </h2>
                            <p>Make sure you have SPF 30+ Sunscreen</p>
                            <div className="card-actions justify-end">
                                {/*<div className="badge badge-outline">Fashion</div>*/}
                                {/*<div className="badge badge-outline">Products</div>*/}
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">

                        <figure><img src={Hat}
                                     className={"w-32"}
                                     alt="Hat"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Hat 🧢
                                <div className="badge badge-secondary">!</div>
                            </h2>
                            <p>Wear a Hat!</p>
                            <div className="card-actions justify-end">
                                {/*<div className="badge badge-outline">Fashion</div>*/}
                                {/*<div className="badge badge-outline">Products</div>*/}
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">

                        <figure><img src={Shirt}
                                     className={"w-32"}
                                     alt="Shirt"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Sunscreen!
                                <div className="badge badge-secondary">!</div>
                            </h2>
                            <p>Make sure you have SPF 30+ Sunscreen</p>
                            <div className="card-actions justify-end">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default App
