import React from 'react';
import { Document, Font, Page, StyleSheet, Text, View } from '@react-pdf/renderer'

const About = () => {
    return (
        <>
        <div className=" flex min-h-screen flex-col py-5 mb-4">
                <div className=" mb-10">
                    <div className=" mx-auto mt-5 mb-10 max-w-7xl px-6 lg:px-2">
                        <div className=" grid grid-cols-1">
                            <h1 className=" text-justify lg:text-center text-3xl lg:text-4xl col-span-1 mb-10 font-semibold leading-8 text-cyan-500">
                                About
                            </h1>
                        </div>

                    <div className=" text-center grid grid-rows-6 lg:grid-cols-6 lg:gap-y-0 lg:gap-x-28">

                            {/* <h1 className=" row-span-2 lg:col-span-2 text-xl lg:text-2xl font-semibold font-mono tracking-tight text-cyan-200">
                                Fullstack Web Developer
                            </h1> */}
                            
                                <div className=" row-span-2 lg:col-span-2 text-xl lg:text-2xl front-semibold font-mono tracking-tight text-cyan-200">
                                    <h1>Who I am</h1>
                                    <ul className="list-disc mx-10 text-justify">
                                
                                    <li>
                                    My interests
                                    </li>
                                    <li>
                                    some other aspect
                                    </li>
                                    <li>
                                    why is this not working lol
                                    </li>
                                    </ul>
                                </div>
                        </div>
                        <Document author={"Sergio Salas"} title={`Resume for ${"Sergio Salas"}, ${2023}`}>
                                <Page size={"LETTER"} style={Styles.Page}>
                                    
                                </Page>
                        </Document>

                    </div>
                </div>
        </div>
        </>
    )
}

export default About;