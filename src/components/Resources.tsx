import sunny from "../assets/sunny-day.jpg"

function SunSafetyPage() {
    return (
        <div id="resources" className="relative bg-white overflow-hidden mt-16">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg
                        className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                        fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <polygon points="50,0 100,0 50,100 0,100"/>
                    </svg>
                    <div className="pt-1"/>
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h2 className="my-6 text-xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-8xl">
                                Resources
                            </h2>

                            <p className={"mr-8"}>
                                Discover the staggering reality: Approximately two-thirds of Australians will confront
                                skin cancer during their lifetime. Shockingly, recent studies reveal that a staggering
                                74% of young Australians underestimate their vulnerability to this silent threat. Why
                                are the youth of our nation overlooking the imperative message of sun safety?

                            </p>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
                     src={sunny} alt=""/>
            </div>
        </div>
    );
}

export default SunSafetyPage;
