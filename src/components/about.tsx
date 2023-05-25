const About = () => {
    return (
        <>
        <div className=" flex min-h-screen flex-col py-5 mb-4">
            <div className=" -mb-32 lg:-mb-48">
                <div className=" mt-36 mb-16 lg:mt-62">
                    <div className=" mx-auto mt-5 mb-10 max-w-7xl px-6 lg:px-2">
                        <div className=" grid grid-cols-1">
                            <h1 className=" text-justify text-3xl lg:text-4xl col-span-1 mb-10 font-semibold leading-8 text-cyan-500">
                                About
                            </h1>
                        </div>

                        <div className=" text-center grid grid-rows-6 lg:grid-cols-6 lg:gap-y-0 lg:gap-x-28 lg:-mb-72">
                            <h1 className=" row-span-2 lg:col-span-2 text-2xl lg:text-4xl font-semibold font-mono tracking-tight text-black">
                                Fullstack Web Developer
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;