// @ts-nocheck
import Sunscreen from "../assets/sunscreen.png";
import Hat from "../assets/pamela-hat.png";
import Shirt from "../assets/hawaiian-shirt.png";
import Dusk from "../assets/dusk.png"
import Shade from "../assets/beach-umbrella.png"
import Sun from "../assets/sun.png"
import LongSleeve from "../assets/long-clothes.png"

const SunscreenApplicationGuidelines = () => {
    return (
        <div className="container mx-auto  py-12">
            <header className="text-3xl font-bold mb-8">General Sunscreen Application Guidelines</header>
            <ul className="list-disc pl-8 mb-8">
                <li>Apply sunscreen to all skin not covered by clothing.</li>
                <li>Use a broad-spectrum, water-resistant sunscreen with an SPF of 30 or higher.</li>
                <li>Apply sunscreen 20 minutes before going outside, and reapply every two hours, or after swimming or
                    sweating.
                </li>
            </ul>
            <header className="text-3xl font-bold mb-8">Spoons of Sunscreen</header>
            <div className="flex items-start mb-8">
                <img src={"https://www.cancercouncil.com.au/wp-content/uploads/2020/03/Sunscreen-amount.png"}
                     alt="Where to put sunscreen" className="mr-4 max-w-80"/>


                <p className="flex-1 mr-32"><br/> <strong>For children</strong>, it’s generally recommended to use
                    approximately half a teaspoon
                    of
                    sunscreen for each of the following areas: each arm, the face, and the neck. Each leg, the front
                    torso, and the back torso should each receive about one teaspoon. For a full-body application, you
                    might need around 3 to 4 teaspoons, depending on the child’s size. <br/><br/> <strong>For
                        adults</strong>, most people
                    use too little (between a quarter and three-quarters) of the amount of sunscreen necessary to
                    achieve the sun protection claimed on the label. A teaspoon per limb is a good rule of thumb. Add
                    another teaspoon for your face, front and back. This comes to seven teaspoons (35ml) in all if you
                    are at the beach in board shorts or a bikini.
                    <br/>
                </p>
            </div>
        </div>
    );
};

const LowUVIndex = ({max}) => {
    return (
        <div className="flex justify-center">
            <div className="flex items-start">
                <img src={Dusk} className="h-72 mr-4 self-start" alt="Image"/>
                <div className="mt-8 w-72">
                    <h1 className="text-2xl">Enjoy Being Outside!</h1>
                    <p>Looks like the UV Index is low. Just make sure to monitor the UV Index and pack sunscreen and
                        clothes just in case! The UV can get as high as {max}! </p>
                </div>
            </div>
        </div>
    );
};


const MidUVIndex = () => {
    return <div className={"grid lg:grid-cols-4 gap-12 place-items-center"}>
        <div className="card w-64 h-72	bg-base-100 shadow-xl">
            <figure><img src={Sunscreen}
                         className={"w-28"}
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
        <div className="card w-64 h-72 bg-base-100 shadow-xl">
            <figure><img src={Hat}
                         className={"w-28"}
                         alt="Hat"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Hat 🧢
                    <div className="badge badge-secondary">!</div>
                </h2>
                <p>Wear a Hat!</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
        <div className="card w-64 h-72	 bg-base-100 shadow-xl">
            <figure><img src={Shirt}
                         className={"w-28"}
                         alt="Shirt"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Wear long clothing!
                    <div className="badge badge-secondary">!</div>
                </h2>
                <p>Make sure you have SPF 30+ Sunscreen</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
        <div className="card w-64 h-72	bg-base-100 shadow-xl">
            <figure><img src={Shade}
                         className={"w-28"}
                         alt="Shirt"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Seek shade
                    <div className="badge badge-secondary">!</div>
                </h2>
                <p>Avoid direct sun exposure</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>

    </div>
}

const HighUVIndex = () => {
    return <div className={"grid lg:grid-cols-3 gap-12 place-items-center p-4"}>
        <div className="card w-72 h-80 bg-base-100 shadow-xl">
            <figure><img src={Sun}
                         className={"h-32"}
                         alt="Sunscreen"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Avoid Being Outdoors ☀️
                    <div className="badge badge-secondary">!</div>
                </h2>
                <p>Wait until its cooler to go outside</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
        <div className="card w-72 h-80 bg-base-100 shadow-xl">
            <figure><img src={Shade}
                         className={"w-32"}
                         alt="Shirt"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Seek shade 🕶️
                    <div className="badge badge-secondary">!</div>
                </h2>
                <p>Make sure you're not in direct sunlight</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
        <div className="card w-72 h-80 bg-base-100 shadow-xl">
            <figure><img src={Sunscreen}
                         className={"w-32"}
                         alt="Sunscreen"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Sunscreen 🧴
                    <div className="badge badge-secondary">!</div>
                </h2>
                <p>Make sure you apply SPF 30+ sunscreen regularly</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
        <div className="card w-72 h-80 bg-base-100 shadow-xl">
            <figure><img src={Hat}
                         className={"w-32"}
                         alt="Hat"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Hat 🧢
                    <div className="badge badge-secondary">!</div>
                </h2>
                <p>A hat is a must!</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
        <div className="card w-72 h-80  bg-base-100 shadow-xl">
            <figure><img src={LongSleeve}
                         className={"w-32"}
                         alt="Shirt"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Cover Up 🧥
                    <div className="badge badge-secondary">!</div>
                </h2>
                <p>Cover as much skin as you can</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>


    </div>
}


const Recommendations = ({currentUV, maxUV}) => {
    return (
        <div className={" p-8 "}>
            <h1 className={"py-8 text-4xl"}> Clothes Recommendation</h1>
            <p className={"pb-8 text-xl"}> Given the current UV is <strong>{currentUV}</strong>, to keep yourself safe,
                you should: </p>
            {currentUV >= 8 ? (
                <HighUVIndex/>
            ) : currentUV >= 3 && currentUV <= 7 ? (
                <MidUVIndex/>
            ) : (
                <LowUVIndex max={maxUV}/>
            )}
            <SunscreenApplicationGuidelines/>
        </div>
    );
};

export default Recommendations;
