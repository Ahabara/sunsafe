import hero_pic from "../assets/hero-pic.jpg"
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <section className="bg-white dark:bg-gray-900 pb-12 xl:h-svh">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Stay
                        ☀️ sun safe with our comprehensive advice</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Your
                        go-to resource for staying safe under the sun. Stay informed about the UV index, recommended
                        clothing, and sunscreen essentials to safeguard your skin against harmful rays.</p>
                    <a href="#resources"
                       className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-orange-400 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Learn more!
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <Link to="/sunsafe/app"
                          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Check UV
                    </Link>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={hero_pic}
                         className={"rounded-3xl"}
                         alt="beach clothes and items"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;
