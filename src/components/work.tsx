import Image from 'next/image';
import sql from '../../public/images/sql-screen-resize.png'

const Work = () => {
    return (
        <>
        <div className=" flex min-h-screen flex-col py-5 mb-4">
            <div className=" mb-10">
                <div className=" mx-auto mt-5 mb-10 max-w-7xl px-6 lg:px-2">
                    <div className=" grid grid-cols-1">
                        <h1 className=" lg:text-justify text-center text-3xl lg:text-4xl col-span-1 mb-10 font-semibold leading-8 text-cyan-500">
                            Recent Work
                        </h1>
                    </div>
                <div className=' grid lg:grid-cols-4 grid-rows-4'>
                    <div className=" row-span-1 lg:col-span-2 bg-gray-600 max-w-sm rounded-md mb-5 overflow-hidden shadow-lg">
                        <Image className=" " src={sql} alt="snap-sql" />
                        <div className=' px-6 py-4'>
                            <div className=' font-semibold text-xl mb-2'>
                                PWP
                            </div>
                            <p className=' text-cyan-400 text-base'>lorem ipsum</p>
                        </div>
                        <div className=' px-6 pt-4 pb-2'>
                            <span className=' inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2'>#sqlchallenge</span>
                        </div>
                    </div>

                    <div className=" row-span-1 lg:col-span-2 bg-gray-600 max-w-sm rounded-md mb-5 overflow-hidden shadow-lg">
                        <Image className=" w-full" src={sql} alt="snap-sql" />
                        <div className=' px-6 py-4'>
                            <div className=' font-semibold text-xl mb-2'>
                                PWP
                            </div>
                            <p className=' text-cyan-400 text-base'>lorem ipsum</p>
                        </div>
                        <div className=' px-6 pt-4 pb-2'>
                            <span className=' inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2'>#sqlchallenge</span>
                        </div>
                        
                    </div>
                    <div className=" row-span-1 lg:col-span-2 bg-gray-600 max-w-sm rounded-md mb-5 overflow-hidden shadow-lg">
                        <Image className=" w-full" src={sql} alt="snap-sql" />
                        <div className=' px-6 py-4'>
                            <div className=' font-semibold text-xl mb-2'>
                                PWP
                            </div>
                            <p className=' text-cyan-400 text-base'>lorem ipsum</p>
                        </div>
                        <div className=' px-6 pt-4 pb-2'>
                            <span className=' inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2'>#sqlchallenge</span>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Work;