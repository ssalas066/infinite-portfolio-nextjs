import Image from 'next/image';

const Hero = () => {
    return (
        <>
        
        <div className='flex min-h-screen flex-col py-5 mb-4'>
             <div className="mx-auto max-w-7xl">
                <div className=" text-center grid grid-rows-3 lg:grid-cols-3 gap-12 lg:gap-32 gap-x-10 lg:gap-x-72 lg:gap-y-0">
                    <div className=" row-span-1 lg:col-span-1 text-2xl lg:text-4xl font-semibold font-mono tracking-tight text-gray-600">
                        
                    </div>
                    <div className=" row-span-1 lg:col-span-1 text-2-xl lg:text-4xl font-semibold font-mono tracking-tight text-gray-600">

                    </div>
                    <Image className=" row-span-1 lg:col-span-1 lg:max-h-32 max-h-fit rounded-3xl lg:rounded-3xl w-full mb-0 object-contain" src={''} alt="profile" />
                </div>
             </div>
        </div>

        </>
    )
}

export default Hero;