import React from "react";
import { Link } from "react-router-dom";
import { BiLogoMicrosoft,BiLogoChrome,BiSolidEnvelope, BiChart,BiSolidUser  } from "react-icons/bi";
import { FaBolt, FaGreaterThan } from "react-icons/fa";





const Sidebar = () => {
  return (
    <div className="border-r border-r-[#e1d4ee] h-[100vh]">
        {/* Title  */}
      <div className="h-14 flex justify-center items-center shadow-md">
        <h6 className="font-bold text-lg flex items-center gap-1"> <FaBolt className="text-[#7671FF]"/>Sphere</h6>
      </div>

      <div>
        {/* Navbar  */}
        <div className="mx-5 py-5 border-b-2">
            <ul className="flex flex-col gap-3">
                <Link to={'/'}><li className="flex items-center gap-3 text-[#7671FF] font-bold bg-[#e7e6f5] py-2 px-3 rounded-md"><BiLogoMicrosoft size={26}/>Home</li></Link>
                <Link to={'/'}><li className="flex items-center gap-3 text-[#b0aeec] font-bold hover:bg-[#e7e6f5] rounded-md py-2 px-3 hover:text-[#7671FF]"><BiSolidEnvelope size={26}/>Job Invites</li></Link>
                <Link to={'/'}><li className="flex items-center gap-3 text-[#b0aeec] py-2 px-3 font-bold hover:bg-[#e7e6f5] rounded-md  hover:text-[#7671FF]"><BiChart size={26}/>Analytics</li></Link>
                <Link to={'/'}><li className="flex items-center gap-3 text-[#b0aeec] py-2 px-3 font-bold hover:bg-[#e7e6f5] rounded-md  hover:text-[#7671FF]"><BiSolidUser size={26}/>My Profile</li></Link>
                <Link to={'/'}><li className="flex items-center gap-3 text-[#b0aeec] py-2 px-3 font-bold hover:bg-[#e7e6f5] rounded-md  hover:text-[#7671FF]"><BiLogoChrome size={26}/>Explore</li></Link>
            </ul>
        </div>
        {/* Feed  */}
        <div>
            <div className="mx-5 py-5">
                <h4 className="font-bold text-xl">Communities Feed</h4>
                <div className="flex flex-col gap-5 py-5 px-3">
                    <div className="flex items-center gap-2">
                        <img src="./user2.png" className="h-12 rounded-full" alt="" />
                        <div>
                            <p className="font-semibold">Indonesia UI Designer</p>
                            <p>734 member</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="./user3.png" className="h-12 rounded-full" alt="" />
                        <div>
                            <p className="font-semibold">Indonesia UI Researcher</p>
                            <p>734 member</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="./user4.png" className="h-12 rounded-full" alt="" />
                        <div>
                            <p className="font-semibold">Prototyping Club</p>
                            <p>734 member</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="./user5.png" className="h-12 rounded-full" alt="" />
                        <div>
                            <p className="font-semibold">Indonesia UI Designer</p>
                            <p>734 member</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="flex items-center gap-2 text-[#7671FF]">Show 5 More <FaGreaterThan/></p>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className="px-10 pt-10 pb-2">
                <ul className="flex gap-5 flex-wrap justify-center">
                    <li>About</li>
                    <li>Accessibility</li>
                    <li>Help</li>
                    <li>Privacy & Terms</li>
                    <li>Advertise</li>
                    <li>More</li>
                </ul>
                <div>
                    <p className="text-center"><span className="font-bold text-[#7671FF] ">Spehre.io</span> © 2023</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
