import TeamPhoto from "../assets/Team Photo.jpeg"
import erman from "../assets/erman-face-shot.png"
import minghzi from "../assets/mingzhi-face-shot.jpeg"
import aneri from "../assets/aneri-face-shot.png"
import abdel from "../assets/abdel-face-shot.jpeg"
import Nav from "./Nav";
import Footer from "./Footer";

const MeetTheTeam = () => {
    return (
        <div>
            <Nav/>
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="w-full lg:w-5/12 flex flex-col pt-8">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">About
                            Us</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">At SunSafe, we are
                            a team of passionate Master's students from Monash University, specializing in Data Science,
                            Information Technology & Business Information System. With a shared commitment to promoting
                            sun safety and healthy living, we
                            embarked on this journey to develop an innovative solution to address the pressing issue of
                            sunburn and skin damage.
                        </p>
                        <br/>
                        <p>At the core of our mission is a dedication to empowering individuals to make informed
                            decisions about sun protection. We believe that everyone deserves access to reliable sun
                            safety information and tools that enable them to enjoy the outdoors safely. Through
                            meticulous research and development, we have crafted SunSafe. Now to be a comprehensive
                            resource for users seeking to enhance their sun safety practices.
                        </p>
                    </div>
                    <div className="w-full lg:w-8/12">
                        <img className="w-full h-full rounded-3xl" src={TeamPhoto}
                             alt="A group of People"/>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Our
                            Story</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">Our goal is simple
                            yet profound: to empower individuals to enjoy the outdoors safely through innovative
                            technology and user-centric design. Join us as we strive to make a positive impact on the
                            health and well-being of people worldwide.</p>
                    </div>
                    <div className="w-full lg:w-8/12 lg:pt-8">
                        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden w-32 max-h-32 rounded-md" src={abdel}
                                     alt="Olivia featured Image"/>
                                <img className="md:hidden block  w-48" src={abdel}
                                     alt="Olivia featured Image"/>
                                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Abdel</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden w-32 max-h-32 rounded-md" src={erman}
                                     alt="Olivia featured Image"/>
                                <img className="md:hidden block w-48" src={erman}
                                     alt="Olivia featured Image"/>
                                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Erman</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden max-w-32 max-h-32 rounded-md" src={minghzi}
                                     alt="Liam featued Image"/>
                                <img className="md:hidden block w-48" src={minghzi}
                                     alt="Liam featued Image"/>
                                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Mingzhi</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden w-32 max-h-32 rounded-md" src={aneri}
                                     alt="Elijah featured image"/>
                                <img className="md:hidden block w-48" src={aneri}
                                     alt="Elijah featured image"/>
                                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Aneri</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default MeetTheTeam;
