import Sunscreen from "../assets/sunscreen.png";
import Hat from "../assets/pamela-hat.png";
import Shirt from "../assets/hawaiian-shirt.png";

const Recommendations = ({currentUV, maxUV}) => {
    return (
        <div className={"  "}>
            {currentUV}
            {maxUV}
            <h1 className={"py-8 text-4xl"}> Clothes Recommendation</h1>
            <p className={"pb-24 text-xl"}> Given the maximum UV today is {maxUV}, to dress according, you should: </p>
            <div className={"grid lg:grid-cols-3 gap-12 place-items-center"}>
                <div className="card w-72 bg-base-100 shadow-xl">
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
                <div className="card w-72 bg-base-100 shadow-xl">
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
                <div className="card w-72 bg-base-100 shadow-xl">
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
            <div className={"pb-48"}>
                <h1 className={"py-8 text-4xl"}>Need a reminder?</h1>
                <div className={"pr-72"}>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                             className="w-4 h-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"/>
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"/>
                        </svg>
                        <input type="text" className="grow" placeholder="Email"/>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Recommendations;
