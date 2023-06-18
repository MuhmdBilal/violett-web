import React, { FC } from 'react'
import { images } from "../../../Services/Constants/images"
import { CgCornerUpRight, CgMoreAlt, CgArrowTopRight } from "react-icons/cg"
import { TbCheckbox } from "react-icons/tb"
// import { Switch } from "@material-tailwind/react";
import { FiMoreVertical } from "react-icons/fi"
import { HiOutlineArrowRight } from "react-icons/hi"
import Chart from './Chart'
type Props = {}

const Home: FC<Props> = () => {
    return (
        <div>
            <div className=' home-css'>
                <div className='container pl-8 mt-8' >
                    <span className='what-text font-light font-light mt-5'>What’s new</span>
                </div>
                <div className='home-down'>
                    <div className='box-set mt-4'>
                        <div className='py-1 mt-3  w-5/6'>
                            <div className='py-2 mt-3 flex justify-between  w-full'>
                                <img src={images.calendar} alt="calendar" width="20px" />
                                <img src={images.move} width="20px" alt="move"/>
                            </div>
                            <div className='py-3 font-normal text-xl  w-5/6'>Meet Mr. Raul Atwood in the office after<br />
                                <span className='text-start text-black text-xl font-medium   w-5/6' style={{ borderBottom: "2px solid rgba(34, 34, 34, 0.25)" }}>1 Hour</span>
                            </div>
                        </div>
                        <div className='py-3 mt-3  w-5/6'>
                            <div className='py-3 mt-3 flex justify-between  w-full'
                           
                            >
                                <div className='text-xs'>
                                    <span className='text-start text-black text-xl font-medium '>16 Apr</span><br />
                                    <span className='text-start text-xs font-medium'>MONDAY</span>
                                </div>
                                <div className='flex w-2/5 justify-between'>
                                    <CgCornerUpRight />
                                    <TbCheckbox />
                                    <CgMoreAlt />
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* second */}
                    <div >
                        <div className='box-set-second mt-4'>
                            <div className='py-1 mt-3  w-4/6'>
                                <div className='py-2 mt-3 flex justify-between  w-full'
                                >
                                    <img src={images.icon} width="20px" alt="icon"/>
                                    <img src={images.move} width="20px" alt="move"/>
                                </div>

                            </div>
                            <div className='py-1 mt-3  w-4/6 text-start' >
                                <div className='text-xs'>
                                    <span className='font-light text-xl text-black'>$ 12,487</span>
                                    <br />
                                    <span className='text-start text-xs font-light'>+864 Comp.</span>
                                </div>
                                <div className='py-3 mt-3 flex justify-between  w-full'
                                    style={{ borderTop: "2px solid #DDDDDD" }} >
                                    <div className='text-xs flex justify-center items-center'>
                                        <CgArrowTopRight size={20} />
                                        <span className='text-start text-xs font-medium'>+24%</span>
                                    </div>
                                    <div className=''>

                                        <CgMoreAlt />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='box-set-second-mini mt-4'>
                            <div className='py-1 mt-3  w-4/6 text-start'>
                                <div className='text-xs'>
                                    <span className='font-normal text-xl text-black'>Dark Mode</span>
                                    <br />
                                    <span className='font-medium text-xs'>Enabled</span>
                                </div>
                            </div>
                            <div className='py-1 mt-3  w-4/6 text-center' >
                                <div className='py-3 mt-3 flex justify-between  w-full'>
                                    <div className=''>
                                        <CgMoreAlt />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* third */}
                    <div >
                        <div className='box-set-third mt-4'>
                            <div className='py-1 mt-2  w-4/6'>
                                <div className='py-2 flex justify-end  w-full'>
                                    <img src={images.move} width="20px" alt="move"/>
                                </div>
                            </div>
                            <div>
                                <img src={images.pie} width="80px" alt="pie"/>
                            </div>
                            <div className='w-4/6 text-start flex items-center justify-between' >
                                <div className='text-xs'>
                                    <span className='font-light text-xl text-white'>35%</span>
                                    <br />
                                    <span className='text-start  font-light text-gray-100'>Desktop users</span>
                                </div>
                                <FiMoreVertical color='#fff' />
                            </div>
                        </div>
                        <div className='box-set-third-mini mt-4'>
                            <div className='py-2  w-4/6'>
                                <div className='py-2 flex justify-between  w-full'
                                
                                >
                                    <img src={images.cake} width="20px" alt="cake"/>
                                    <img src={images.move} width="20px" alt="move"/>
                                </div>

                            </div>
                            <div className='py-1 mt-3  w-4/6 text-start' >
                                <div className='text-xs'>
                                    <span className='font-light text-xl text-black'>New Sale!</span>

                                </div>
                                <div className='py-3 mt-3 flex justify-between  w-full'
                                    style={{ borderTop: "2px solid #DDDDDD" }} >
                                    <div className='text-xs items-center'>
                                        <span className='font-light text-xs text-black'>Alexandria</span>
                                        <br />
                                        <span className='text-start text-xs font-light' style={{ fontSize: "9px" }}>+24.68$</span>
                                    </div>
                                    <div className=''>

                                        <HiOutlineArrowRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* forth */}
                    <div >
                        <div className='box-set-forth mt-4'>
                            <div className='py-1   w-10/12'>
                                <div className='py-1 flex justify-between  w-full'
                                >
                                    <img src={images.charts} width="20px" alt="charts"/>
                                    <img src={images.move} width="20px" alt="move"/>
                                </div>

                            </div>
                            <div className='w-full flex justify-center items-center' >
                            <div className=' w-11/12 flex justify-center items-center'>
                                <Chart />
                            </div>
                            </div>
                            
                            <div className='w-10/12 text-start flex items-center justify-between' >
                                <div className='flex items-center justify-start'>
                                    <img src={images.color} width="25px" alt="color"/>
                                    <div className='text-xs pl-3'>
                                        <span className='text-start text-sm  font-light text-black'>+13%</span><br />
                                        <span style={{ fontSize: "12px" }}>Earnings</span>
                                    </div>
                                </div>
                                <div style={{ borderLeft: "1px solid  #DDDDDD" }}></div>
                                <div className='flex items-center justify-start'>
                                    <img src={images.color1} width="25px" alt="color1"/>
                                    <div className='text-xs pl-3'>
                                        <span className='text-start text-sm  font-light text-black'>-28%</span><br />
                                        <span style={{ fontSize: "12px" }}>Expenses</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='box-set-fotrth-mini mt-4 text-start'>
                                <img src={images.plus} alt="plus"/>
                                <span className='text-xs font-medium text-black mt-3'>Add a Tile</span>
                            </div>
                            <div className='box-set-fotrth-mini mt-4 text-start'>
                                <img src={images.iconSettings} alt="iconSettings"/>
                                <span className='text-xs font-medium text-black mt-3'>Add a Tile</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home