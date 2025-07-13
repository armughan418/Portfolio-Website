import React, { useState } from 'react';
import { FaUserGraduate, FaHome, FaCode, FaPhone, FaFileInvoice, FaBars, FaDownload, FaFileDownload, FaCloudDownloadAlt, FaBriefcase, FaArrowAltCircleLeft, FaArrowCircleRight, FaArrowLeft, FaArrowsAltV } from 'react-icons/fa';
import { FaArrowDownLong, FaArrowDownZA, FaArrowLeftLong, FaArrowPointer, FaArrowRightArrowLeft, FaArrowRightToCity, FaArrowRotateLeft, FaArrowsLeftRight, FaArrowsSpin, FaDiagramProject } from 'react-icons/fa6';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiDownloadCloud } from 'react-icons/fi';
import { MdContactPhone, MdContacts, MdWork } from 'react-icons/md';
import { HiOutlineIdentification } from 'react-icons/hi';
import { TbMessage2Share } from 'react-icons/tb';
import { BiBriefcase } from 'react-icons/bi';
import { GiArrowCluster, GiArrowhead, GiFastArrow } from 'react-icons/gi';

const StyledWrapper = styled.div``;

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const navigate = useNavigate();
    const toggleSidebar = () => setShowSidebar(!showSidebar);

    return (
        <StyledWrapper>
            <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#1a0024] via-[#320979] to-[#240066]">
                <div className="flex justify-between items-center px-11 h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <img
                            src="./images/logo1.png"
                            alt="Logo"
                            className="w-10 h-10 rounded-full object-cover bg-yellow-500"
                        />
                        <h1 className="text-white font-bold text-2xl">Armughan's Portfolio</h1>
                    </div>

                    {/* Nav Links */}
                    <div className="hidden xl:flex items-center gap-5">
                        <ScrollLink
                            to="home"
                            smooth={true}
                            duration={500}
                            offset={-60}
                            className="cursor-pointer px-5 py-2 transition ease-in duration-200 hover:bg-yellow-500 hover:text-white text-white"
                        >
                            Home
                        </ScrollLink>
                        <ScrollLink
                            to="about"
                            smooth={true}
                            duration={500}
                            offset={-60}
                            className="cursor-pointer px-5 py-2 transition ease-in duration-200 hover:bg-yellow-500 hover:text-white text-white"
                        >
                            About Me
                        </ScrollLink>
                        <ScrollLink
                            to="acadamics"
                            smooth={true}
                            duration={500}
                            offset={-60}
                            className="cursor-pointer px-5 py-2 transition ease-in duration-200 hover:bg-yellow-500 hover:text-white text-white"
                        >
                            Academics
                        </ScrollLink>
                        <ScrollLink
                            to="tools"
                            smooth={true}
                            duration={500}
                            offset={-60}
                            className="cursor-pointer px-5 py-2 transition ease-in duration-200 hover:bg-yellow-500 hover:text-white text-white"
                        >
                            Tools & Technologies
                        </ScrollLink>
                        <ScrollLink
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-60}
                            className="cursor-pointer px-5 py-2 transition ease-in duration-200 hover:bg-yellow-500 hover:text-white text-white"
                        >
                            Projects
                        </ScrollLink>
                        <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-60}
                            className="cursor-pointer px-5 py-2 transition ease-in duration-200 hover:bg-yellow-500 hover:text-white text-white"
                        >
                            Contact
                        </ScrollLink>
                    </div>

                    {/* Hamburger Icon */}
                    <button className="xl:hidden text-white text-2xl" onClick={toggleSidebar}>
                        <FaBars />
                    </button>
                </div>
            </nav>

            {/* Sidebar */}
            {showSidebar && (
                <div className="fixed inset-0 z-40 flex flex-row-reverse">
                    <div className="bg-white w-64 h-full shadow-lg mt-11">
                        <div className="px-4 py-4 border-b bg-gradient-to-r from-[#1a0024] via-[#320979] to-[#240066]">
                            <div className="flex justify-between items-center">
                                <button className="text-white text-3xl" onClick={toggleSidebar}>
                                    <FaArrowLeft size={22} className=" font-bold mr-3 text-white mt-6" />
                                </button>
                            </div>
                            <div className="flex justify-center items-center mt-4 flex-col gap-2 cursor-pointer">
                                <img
                                    src="./images/my-photo2.png"
                                    alt="Armughan"
                                    className="h-24 w-24 rounded-full border-2 border-blue-900 bg-white p-1 object-cover"
                                />
                                <h1 className="font-bold text-white text-xl">Armughan</h1>
                            </div>
                        </div>

                        <div className="px-4 py-6">
                            <ul className="space-y-4">
                                <li>
                                    <ScrollLink
                                        to="home"
                                        smooth={true}
                                        duration={500}
                                        offset={-60}
                                        className="cursor-pointer flex items-center text-gray-800 hover:bg-gray-200 rounded-full px-4 py-2"
                                        onClick={toggleSidebar}
                                    >
                                        <FaHome className="mr-3 text-blue-900" />
                                        Home
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        to="about"
                                        smooth={true}
                                        duration={500}
                                        offset={-60}
                                        className="cursor-pointer flex items-center text-gray-800 hover:bg-gray-200 rounded-full px-4 py-2"
                                        onClick={toggleSidebar}
                                    >
                                        <FaUserGraduate className="mr-3 text-blue-900" />
                                        About Me
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        to="acadamics"
                                        smooth={true}
                                        duration={500}
                                        offset={-60}
                                        className="cursor-pointer flex items-center text-gray-800 hover:bg-gray-200 rounded-full px-4 py-2"
                                        onClick={toggleSidebar}
                                    >
                                        <FaUserGraduate className="mr-3 text-blue-900" />
                                        Academics
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        to="tools"
                                        smooth={true}
                                        duration={500}
                                        offset={-60}
                                        className="cursor-pointer flex items-center text-gray-800 hover:bg-gray-200 rounded-full px-4 py-2"
                                        onClick={toggleSidebar}
                                    >
                                        <FaCode className="mr-3 text-blue-900" />
                                        Tools & Technologies
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        to="projects"
                                        smooth={true}
                                        duration={500}
                                        offset={-60}
                                        className="cursor-pointer flex items-center text-gray-800 hover:bg-gray-200 rounded-full px-4 py-2"
                                        onClick={toggleSidebar}
                                    >
                                        <FaDiagramProject className="mr-3 text-blue-900" />
                                        Projects
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        to="contact"
                                        smooth={true}
                                        duration={500}
                                        offset={-60}
                                        className="cursor-pointer flex items-center text-gray-800 hover:bg-gray-200 rounded-full px-4 py-2 gap-3"
                                    >
                                        <TbMessage2Share size={25} className='text-blue-900' />
                                        Contact Me
                                    </ScrollLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="flex-1 bg-black bg-opacity-50"
                        onClick={toggleSidebar}
                    ></div>
                </div>
            )}
        </StyledWrapper>
    );
};

export default Navbar;