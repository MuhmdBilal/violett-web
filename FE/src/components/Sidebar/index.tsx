import React, { FC } from 'react'
import Home from '../../pages/app/Home/Home'
import "../../assets/Styles/navbar.css"
import { images } from "../../Services/Constants/images"

import { CgCornerUpRight, CgMoreAlt, CgArrowTopRight } from "react-icons/cg"
import { TbCheckbox } from "react-icons/tb"
import { Switch } from "@material-tailwind/react";
import { FiMoreVertical } from "react-icons/fi"
import { HiOutlineArrowRight } from "react-icons/hi"
import Chart from '../../pages/app/Home/Chart'
import { useNavigate } from 'react-router-dom';
type Props = {}

const Sidebar: FC<Props> = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="sidebar">
                <div className="logo-details ">
                    <i className="bx bxl-c-plus-plus icon" />
                    <div className="logo_name">CodingLab</div>
                    {/* <i className="bx bx-menu" id="btn" /> */}
                </div>
                <ul className="nav-list">

                    <li>
                        <a href="#">
                            <img src={images.home} />
                        </a>
                        <span className="tooltip">Home</span>
                    </li>
                    <li>
                        <a href="#">
                            <img src={images.dashboard} width="10px" />
                            <span className="links_name">Dashboard</span>
                        </a>
                        <span className="tooltip">Dashboard</span>
                    </li>
                    <li>
                        <a href="#">
                            <img src={images.wallet} width="10px" />
                            <span className="links_name">Wallet</span>
                        </a>
                        <span className="tooltip">Wallet</span>
                    </li>
                    <li>
                        <a href="#">
                            <img src={images.inventory} width="10px" />
                            <span className="links_name">Inventory</span>
                        </a>
                        <span className="tooltip">Inventory</span>
                    </li>
                    <li>
                        <a href="#">
                            <img src={images.calendar} width="10px" />
                            <span className="links_name">Calendar</span>
                        </a>
                        <span className="tooltip">Calendar</span>
                    </li>
                    <li>
                        <a href="#">
                            <img src={images.orders} width="10px" />
                            <span className="links_name">Order</span>
                        </a>
                        <span className="tooltip">Order</span>
                    </li>
                    <div className="profile">
                        <li>
                            <a href="#">
                                <img src={images.settings} width="10px" />
                                <span className="links_name">Settings</span>
                            </a>
                            <span className="tooltip">Settings</span>
                        </li>
                        <li onClick={()=>navigate("/")}>
                            <a href="#">
                                <img src={images.logout} width="10px" />
                                <span className="links_name">Log Out</span>
                            </a>
                            <span className="tooltip">Log Out</span>
                        </li>
                    </div>

                </ul>
            </div>
            <section className="home-section ">
                <div className="text flex">
                    <Home />
                </div>
            </section>
        </div>
    )
}

export default Sidebar