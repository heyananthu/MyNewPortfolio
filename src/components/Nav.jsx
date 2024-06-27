import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Lottie from "lottie-react";
import animationconfig from './assets/Va3esHS4ga.json'

const Nav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="text-white flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4">
            <div className="flex">
                <div>
                    <Lottie className='bg-black  w-96 sm:w-52  md:w-28 mt-56 sm:mt-3 ml-0' animationData={animationconfig}  />
                </div>
                <div>
                    <h1 className="w-full font-black text-5xl text-cyan-400  hidden sm:block sm:mt-12">
                        A<span className="text-white">nanthu</span>
                    </h1>
                </div>
            </div>
            <ul className="hidden md:flex sm:mt-4">
                <li className="p-4  text-2xl text-sky-500  font-black ">Home</li>
                <li className="p-4  text-2xl text-sky-500  font-black">About</li>
                <li className="p-4  text-2xl text-sky-500  font-black">Skills</li>
                <li className="p-4  text-2xl text-sky-500  font-black">Education</li>
                <li className="p-4  text-2xl text-sky-500  font-black">Contact</li>
            </ul>
            {/* <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-slate-500 bg-black ease-in-out duration-500" : "fixed left-[-100] hidden "}>
                <h1 className="w-full font-bold text-3xl text-green-500 m-4">Quick Liks</h1>
                <ul className="uppercase">
                    <li className="p-4 border-b border-b-white text-sky-400 font-bold">Home</li>
                    <li className="p-4 border-b border-b-white text-sky-400 font-bold">Company</li>
                    <li className="p-4 border-b border-b-white text-sky-400 font-bold">Resources</li>
                    <li className="p-4 border-b border-b-white text-sky-400 font-bold">About</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div> */}
        </div>
    )
}

export default Nav;