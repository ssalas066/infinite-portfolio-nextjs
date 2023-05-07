import Image from 'next/image';
import profile from '../../public/images/hero-profile-photo-resize.jpg';

const Hero = () => {
    return (
        <>
        
        <div className='flex min-h-screen flex-col py-5 mb-4'>
             <div className="mx-auto max-w-7xl my-10">
                <div className=" text-center grid grid-rows-3 mt-8 lg:mt-32 lg:grid-cols-5 gap-12 lg:gap-32 gap-x-10 lg:gap-x-40 lg:gap-y-0">
                    {/* <div className=" row-span-1 lg:col-span-1 text-2xl lg:text-4xl font-semibold font-mono tracking-tight text-gray-600">
                        <h4 className=' text-2xl lg:text-1xl'>Fullstack Web Developer</h4>
                    </div> */}
                    <div className=" row-span-1 lg:col-span-3 text-2xl lg:text-1xl font-semibold font-mono tracking-tight text-gray-600">
                        <h2 className='mx-auto mb-10'>Fullstack Web Developer</h2>
                        <h2 className=''>Hi, I am a fullstack developer reshaping user interaction</h2>
                        <h2 className=''>My mission is to design and develop a website that cultivates your audience and captures your values, your vision.</h2>
                    </div>
                    <Image className=" row-span-1 lg:row-span-3 row-start-1 lg:col-span-2 lg:max-h-full max-h-fit rounded-2xl lg:rounded-2xl mb-10 w-full object-contain" src={profile} alt="profile" />
                </div>
             </div>
        </div>

        </>
    )
}

export default Hero;