import Image from 'next/image';

const Hero = () => {
    return (
        <>
        
        <div className='flex min-h-screen flex-col py-5 mb-4'>
             <div className="mx-auto max-w-7xl my-10">
                <div className=" text-center grid grid-rows-3 lg:grid-cols-3 gap-12 lg:gap-32 gap-x-10 lg:gap-x-72 lg:gap-y-0">
                    {/* <div className=" row-span-1 lg:col-span-1 text-2xl lg:text-4xl font-semibold font-mono tracking-tight text-gray-600">
                        <h4 className=' text-2xl lg:text-1xl'>Fullstack Web Developer</h4>
                    </div> */}
                    <div className=" row-span-1 lg:col-span-2 text-2xl lg:text-1xl font-semibold font-mono tracking-tight text-gray-600">
                        <h2 className='mx-auto mb-10'>Fullstack Web Developer</h2>
                        <h2 className=''>Hi, I am a fullstack developer reshaping user interaction</h2>
                        <h2 className=''>My mission is to design and develop a website that cultivates your audience and captures your values, your vision.</h2>
                    </div>
                    <Image className=" row-span-1 lg:col-span-1 row-start-1 lg:row-auto lg:max-h-32 max-h-fit rounded-3xl lg:rounded-3xl w-full mb-0 object-contain" src={''} alt="profile" />
                </div>
             </div>
        </div>

        </>
    )
}

export default Hero;