'use client';
import React, {useEffect, useState} from 'react';
import Drawer from './DiagonalDrawer';
import '../Header/DiagonalDrawer.css';


export default function Header() {
    const [selectedIndex1, setSelectedIndex1] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0);
        }
        window.addEventListener("scroll", handleScroll);

        return() => {
            window.removeEventListener("scroll", handleScroll);
        }
    },[]);

    const openDrawer = () => {
        setIsOpen(true);
    };


  return (
    <React.Fragment>
        <div className={`diagonal-drawer ${isOpen ? "open" : ""}`}>
            <Drawer
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            selectedIndex1={selectedIndex1}
            setSelectedIndex1={setSelectedIndex1}
            />
        </div>
        <header className={`${isScrolled ? "headerShow" : ""} ${isScrolled ? "bg-white" : "bg-transparent"} ${isScrolled ? "dark:bg-night-50" : "dark:bg-transparent"} w-full fixed top-0 z-50 transition-all duration-500`}
        style={{
            boxShadow: isScrolled ? "#A8AFDE -10px 25px 50px 10px" : ""
        }}
        >

            <div className='relative '>
                <div 
                onClick={openDrawer}
                className='z-30 absolute cursor-pointer w-14 h-14 lg:w-24 lg:h-24 bg-[#48AFDE] flex justify-center items-center rounded-br-3xl'
                >
                    <div className='relative w-7 lg:w-10 h-7 lg:h-10 justify-center items-center'>
                        <img src='/drawer.png' alt='drawer item' className='w-[150px] h-10'/>
                    </div>
                </div>
            </div>

            <nav className='invisible xl:visible xl:max-w-4xl 2xl:max-w-7xl mx-auto'>
                <ul className='flex font-recoletaBlack flex-row items-center h-24'>
                    <li className='group text-2xl relative font-bold mr-20'>
                        {selectedIndex1 === 0 ? (
                            <span className='menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
                        ) : (
                            <span className='menu-effect transform opacity-100 rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
                        )}
                        <a className={`menu-item ${selectedIndex1 === 0 ? "text-black" : ""} ${selectedIndex1 === 0 ? "dark:text-[#666D47]" : ""} text-[#666D47] group-hover:text-black dark:group-hover:text-white`}
                        href='/#home'
                        onClick={() => setSelectedIndex1(0)}
                        >
                            Home
                        </a>
                    </li>
                    <li className='group text-2xl relative font-bold mr-20'>
                        {selectedIndex1 === 1 ? (
                            <span className='menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
                        ) : (
                            <span className='menu-effect transform opacity-100 rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
                        )}
                        <a className={`menu-item ${selectedIndex1 === 0 ? "text-black" : ""} ${selectedIndex1 === 0 ? "dark:text-[#666D47]" : ""} text-[#666D47] group-hover:text-black dark:group-hover:text-white`}
                        href='/#portfolio'
                        onClick={() => setSelectedIndex1(1)}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li className='group text-2xl relative font-bold mr-20'>
                        {selectedIndex1 === 2 ? (
                            <span className='menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
                        ) : (
                            <span className='menu-effect transform opacity-100 rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
                        )}
                        <a className={`menu-item ${selectedIndex1 === 0 ? "text-black" : ""} ${selectedIndex1 === 0 ? "dark:text-[#666D47]" : ""} text-[#666D47] group-hover:text-black dark:group-hover:text-white`}
                        href='/#about-me-component'
                        onClick={() => setSelectedIndex1(2)}
                        >
                            AboutMe
                        </a>
                    </li>
                    <li className='group text-2xl relative font-bold mr-20'>
                        {selectedIndex1 === 3 ? (
                            <span className='menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
                        ) : (
                            <span className='menu-effect transform opacity-100 rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
                        )}
                        <a className={`menu-item ${selectedIndex1 === 0 ? "text-black" : ""} ${selectedIndex1 === 0 ? "dark:text-[#666D47]" : ""} text-[#666D47] group-hover:text-black dark:group-hover:text-white`}
                        href='/#home'
                        onClick={() => setSelectedIndex1(3)}
                        >
                            Hire Me
                        </a>
                    </li>
                </ul>
            </nav>
        </header>  
    </React.Fragment>
  )
}
