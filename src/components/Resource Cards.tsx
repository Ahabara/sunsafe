import baby from "../assets/baby.jpg"
import old from "../assets/old-women.avif"
import hat from "../assets/hat.avif"

const ResourceCards = () => {
    return (
        <div className={"px-12 flex py-32 flex-wrap justify-evenly"}>
            <label className="swap swap-flip h-96">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox"/>
                <div className="swap-on">
                    <div className="card h-96 w-96 bg-base-100 shadow-xl ">
                        {/*<figure className="px-10 pt-10">*/}
                        {/*    <img src={hat} alt="Shoes"*/}
                        {/*         className="rounded-xl"/>*/}
                        {/*</figure>*/}
                        <div className="card-body text-l m-4">
                            <h1 className={"font-bold text-xl"}>UV</h1>
                            UV (Ultraviolet) radiation is a type of electromagnetic radiation emitted by the sun. UV
                            radiation from the sun comes in UVA and UVB forms, both of which can harm the skin and eyes.
                            UVA contributes to aging, while UVB causes sunburn and increases the risk of skin cancer.
                            Protecting against UV exposure is essential for skin health and reducing cancer risk.
                        </div>
                    </div>
                </div>
                <div className="swap-off">
                    <div className="card w-96 h-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={baby} alt="Shoes"
                                 className="rounded-xl"/>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">What is UV?</h2>
                            <div className="card-actions">
                                <div className="btn btn-primary">Press to find out</div>
                            </div>
                        </div>
                    </div>
                </div>
            </label>

            <label className="swap swap-flip h-96 ">

                {/* this hidden checkbox controls the state */}
                <input type="checkbox"/>

                <div className="swap-on">
                    <div className="card h-96 w-96 bg-base-100 shadow-xl">
                        <div className="card-body text-l m-4">
                            <h1 className={"font-bold text-xl"}>SPF</h1>
                            SPF stands for Sun Protection Factor and indicates a sunscreen's ability to protect the skin
                            from UV
                            rays, which cause sunburn. The higher the SPF number, the greater the level of protection
                            against
                            sunburn. It's essential to apply sunscreen with an adequate SPF and reapply it regularly,
                            especially
                            when spending time outdoors.
                        </div>

                    </div>
                </div>
                <div className="swap-off">
                    <div className="card h-96 w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={old} alt="Shoes"
                                 className="rounded-xl"/>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">What about SPF?</h2>
                            <div className="card-actions">
                                <div className="btn btn-primary">Tell me more</div>
                            </div>
                        </div>
                    </div>
                </div>
            </label>

            <label className="swap swap-flip h-96 ">

                {/* this hidden checkbox controls the state */}
                <input type="checkbox"/>

                <div className="swap-on">
                    <div className="card w-96 h-96 bg-base-100 shadow-xl">
                        <div className="card-body text-l m-4">
                            <h1 className={"font-bold text-xl"}>Covering Up</h1>
                            Covering up with clothing, hats, and sunglasses is an effective way to protect the skin from
                            harmful UV radiation. Clothing with a tight weave offers better protection, and dark colors
                            often provide more UV protection than lighter ones. Additionally, wide-brimmed hats and
                            sunglasses with UV protection help shield sensitive areas like the face and eyes from sun
                            damage.
                        </div>
                    </div>
                </div>
                <div className="swap-off">
                    <div className="card w-96 h-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={hat} alt="Shoes"
                                 className="rounded-xl"/>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">What should I wear?</h2>
                            <div className="card-actions">
                                <div className="btn btn-primary">Tell me more</div>
                            </div>
                        </div>
                    </div>
                </div>
            </label>

        </div>
    );
};

export default ResourceCards;


