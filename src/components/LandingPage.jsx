import React from "react";
import landingImage from '../assets/tutor-landing-page.png'
import CardSlider from "./CardSlider";
import pageTutor from '../assets/page-tutor.png'
import pageCourse from '../assets/page-courses.png'
import CourseSlider from "./CardCourse";
import Footer from "./Footer";
import About from "./About";

const LandingPage = () => {

    //logic
    return (
        <div id="home">
            <div className="fixed z-30 w-full max-w-screen-md bg-white/80 shadow backdrop-blur-lg inset-x-0 top-0 mx-auto border-[2px] border-green-500 py-3 md:top-6 md:rounded-3xl lg:max-w-screen-lg">
                <div className="px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex shrink-0">
                            <div className="flex items-center gap-1">
                                {/* <Logo /> */}
                                <div className="text-xl sm:text-2xl font-bold pt-0.5 text-green-500">
                                Mengajar
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex md:items-center md:justify-center md:gap-5"></div>
                        <div className="flex items-center justify-end sm:gap-3">
                            <a href="#home" span className="cursor-pointer hidden sm:inline-block text-sm font-medium text-white transition-all duration-200 rounded-lg px-2 py-1 hover:bg-white hover:text-green-500 bg-green-500 border-[2px] border-green-500">
                                Home
                            </a>
                            <a href="#course" span className="cursor-pointer hidden sm:inline-block text-sm font-medium text-white transition-all duration-200 rounded-lg px-2 py-1 hover:bg-white hover:text-green-500 bg-green-500 border-[2px] border-green-500">
                                Courses
                            </a>
                            <a href="#tutor" span className="cursor-pointer sm:inline-block text-sm font-medium text-white transition-all duration-200 rounded-lg px-2 py-1 hidden hover:bg-white hover:text-green-500 bg-green-500 border-[2px] border-green-500">
                                Tutor
                            </a>
                            <a href="#about" span className="cursor-pointer sm:inline-block text-sm font-medium text-white transition-all duration-200 rounded-lg px-2 py-1 hidden hover:bg-white hover:text-green-500 bg-green-500 border-[2px] border-green-500">
                                About
                            </a>
                            <a href="pilih-akun" span className="cursor-pointer sm:inline-block text-sm font-medium text-white transition-all duration-200 rounded-lg px-2 py-1 hidden hover:bg-white hover:text-green-500 bg-green-500 border-[2px] border-green-500">
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Main Content */}
            <div className="md:pt-10 flex items-center justify-center h-screen px-4">
                <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto">
                    {/* Illustration */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src={landingImage}
                            alt="Illustration"
                            className="w-3/4 max-w-md"
                        />
                    </div>

                    {/* Text */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                            Experience The Magic of Learning!{" "}
                            <span className="text-green-600">Join Us!</span>
                        </h2>
                        <p className="text-gray-600 mt-4">
                            Selamat datang di mengajar, menuju masa depan yang baik dengan
                            memilih platform belajar yang keren!
                        </p>
                    </div>
                </div>
            </div>

            <div id="course">
                <div className="md:pt-10 flex items-center justify-center h-auto md:h-screen px-4">
                    <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto bg-green-500 rounded-lg shadow-lg p-6 md:p-10">
                    {/* Text */}
                    <div className="flex-1 order-2 md:order-1 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                        Ready for an exciting learning adventure?{" "}
                        {/* <span className="text-green-600"
                            style={{
                                textShadow: "1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white",
                                }}>Join Us!
                        </span> */}
                        </h2>
                        <p className="text-white mt-4">
                            Belajar bukan beban, tapi kesempatan untuk menjadi versi terbaik dari dirimu, 
                            Setiap langkah kecil yang kamu ambil adalah kemajuan yang berarti!
                        </p>
                    </div>

                    {/* Illustration */}
                    <div className="flex-1 flex justify-center order-1 md:order-2">
                        <img
                        src={pageCourse}
                        alt="Illustration"
                        className="w-3/4 max-w-md md:w-full"
                        />
                    </div>
                    </div>
                </div>

                <CourseSlider />
            </div>

            <div id="tutor">
                <div className="md:pt-10 flex items-center justify-center h-auto md:h-screen px-4">
                    <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto h-30 bg-green-500 rounded-lg shadow-lg p-6 md:p-10">
                        {/* Text */}
                        <div className="flex-1 order-2 md:order-1 text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                            Experience the magic of unforgettable learning in our newest course!{" "}
                                {/* <span className="text-green-600" style={{
                                    textShadow: "1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white",
                                    }}>Join Us!
                                    </span> */}
                            </h2>
                            <p className="text-white mt-4">
                                Belajarlah dengan tekun dan sabar karena kesuksesan tidak datang dalam sekejap, 
                                Bersemangatlah dalam mempelajari sesuatu yang bermanfaat!
                            </p>
                        </div>

                        {/* Illustration */}
                        <div className="flex-1 flex justify-center order-1 md:order-2">
                            <img
                                src={pageTutor}
                                alt="Illustration"
                                className="w-3/4 max-w-md md:w-full"
                            />
                        </div>
                    </div>
                </div>

                <CardSlider />
            </div>

            <div id="about">
                <About />
            </div>
            <div id="footer">
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage;