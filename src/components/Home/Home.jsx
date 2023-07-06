import React from "react";
import {
  FaSearch,
  FaRegBell,
  FaRegEnvelope,
  FaUsers,
  FaPlusCircle,
  FaPen,
  FaSuitcase,
  FaGraduationCap,
} from "react-icons/fa";
import ToggleButton from "../ToggleButton/ToggleButton";
import CircleProgress from "../CircleProgress/CircleProgress";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* header  */}
      <div className="flex justify-end">
        <div className="h-14 flex gap-5 justify-end items-center">
          <div className="border-2 flex items-center gap-3 px-3">
            <div className="border-r-2 pr-3">
              <FaSearch />
            </div>
            <input
              className="outline-none py-1 px-3 "
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="border p-1 inline-block">
            <FaRegBell size={26} className="text-[#7671FF]" />
          </div>
          <div className="border p-1 inline-block">
            <FaRegEnvelope size={26} className="text-[#7671FF]" />
          </div>

          <div>
            <img src="./profile1.jpg" className="h-10 rounded-full" alt="" />
          </div>
        </div>
      </div>

      {/* Main Content  */}
      <div>
        <div>
          <div>
            <img src="./banner.jpg" className="h-40 w-full" alt="" />
          </div>
          <div className="flex gap-4">
            {/* Profile  */}
            <div className="w-1/3 -mt-20 shadow-md">
              <div className="flex flex-col items-center">
                <img
                  src="./profile1.jpg"
                  className="h-36 w-36 rounded-full border-4"
                  alt=""
                />
                <p className="font-bold text-lg">Ayaat Khanna</p>
                <p className="text-sm text-gray-400">UI/UX Designer</p>
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex items-center">
                    <FaUsers />
                    <p>21 Followers</p>
                  </div>
                  <p>43 following</p>
                </div>
              </div>
              <div className="flex flex-col gap-5 pt-5">
                <div className="px-5">
                  <div className="flex justify-between gap-3">
                    <p className="font-bold text-lg">
                      Make my profile visible to employers
                    </p>
                    <div>
                      <ToggleButton />
                    </div>
                  </div>
                  <p>
                    Your profile and career gools will appear when employers
                    search our database for candidates
                  </p>
                </div>
                <div className="px-5">
                  <div className="flex justify-between gap-3">
                    <p className="font-bold text-lg">Online Links</p>
                    <div>
                      <FaPlusCircle size={26} className="text-indigo-500" />
                    </div>
                  </div>
                  <p>
                    Added your online portfolio links to increase your profile
                    strength
                  </p>
                </div>
                <div className="flex justify-center gap-5 bg-[#e7e6f5] py-3 rounded-md mx-5">
                  <img src="./facebook.png" className="h-6" alt="" />
                  <img src="./dropbox.png" className="h-6" alt="" />
                  <img src="./instagram.png" className="h-6" alt="" />
                </div>
              </div>

              <div className="flex gap-2 flex-col justify-center items-center bg-[#e7e6f5] mx-5 rounded-lg py-3 my-3">
                <p>Wheel of Opportunities</p>
                <CircleProgress />
              </div>

              <div className="mx-5">
                <p className="font-bold">Your Ranking</p>
                <div className="mt-2 bg-gray-300 rounded-full">
                  <div className="w-8/12 mt-2 bg-gradient-to-r from-purple-500 to-indigo-600 py-3 text-center rounded-full"></div>
                </div>
                <p className="text-center font-semibold">
                  Hurray! You are in the top{" "}
                  <span className="text-indigo-700">27%</span>
                </p>
              </div>
            </div>
            {/* Details  */}
            <div className="w-2/3 mt-5">
              <div className="w-full h-full shadow-xl">
                <div className="px-8">
                  <div>
                    <ul className="flex justify-around py-2 font-semibold text-gray-500">
                      <Link className="text-black" to={"/"}>
                        About
                      </Link>
                      <Link className="hover:text-black" to={"/"}>
                        Skills & Certificate
                      </Link>
                      <Link className="hover:text-black" to={"/"}>
                        Posts
                      </Link>
                      <Link className="hover:text-black" to={"/"}>
                        Spaces
                      </Link>
                    </ul>
                  </div>
                  <hr />
                  <div className="py-8">
                    <div className="flex gap-20 text-gray-400 text-lg">
                      <p>
                        The discovery was made by Richard McClintock, a
                        professor of Latin at Hampden- Sydney College in
                        Virginia, who faced the impetuous recurrence of the dark
                        word consectetur in the text Lorem ipsum researched its
                        origins to identify them in sections 1.10.32 and 1.10.33
                        of the aforementione
                      </p>
                      <div className=" h-fit bg-indigo-600 rounded-full p-3">
                        <FaPen size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className="py-8">
                    <p className="font-bold text-xl">Experience</p>
                    <div className="flex justify-between py-5">
                      <div className="flex gap-5">
                        <div className="bg-indigo-300 h-fit p-3 rounded-full">
                          <FaSuitcase size={30} className="text-indigo-600" />
                        </div>
                        <div>
                          <p className="font-semibold">
                            Crisis Intervention Specialist
                          </p>
                          <p className="text-sm text-gray-500">
                            January 2023 - Present
                          </p>
                          <p className="text-sm text-gray-300">
                            lcoderz - AhmedDabad, India
                          </p>

                          <p className="pt-5">
                            Work with clients and web studios as freelancer.
                            Work in next areas: eCommerce web projects; creative
                            landing pages; iOS and Android apps; corporate web
                            sites and corporate identity sometimes.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div>
                          <FaPlusCircle size={26} className="text-indigo-500" />
                        </div>
                        <div>
                          <div className=" w-fit bg-indigo-600 rounded-full p-2">
                            <FaPen size={10} className="text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="flex justify-between pt-5">
                      <div className="flex gap-5">
                        <div className="bg-indigo-300 h-fit p-3 rounded-full">
                          <FaGraduationCap size={30} className="text-indigo-600" />
                        </div>
                        <div>
                          <p className="font-semibold">
                            B.E - Electronics & Telecommunication Engg.
                          </p>
                          <p className="text-sm text-gray-500">
                            Aug 2015 - Jun 2019
                          </p>
                          <p className="text-sm text-gray-300">
                            SBJITMR - Nagpur, India
                          </p>

                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div>
                          <FaPlusCircle size={26} className="text-indigo-500" />
                        </div>
                        <div>
                          <div className=" w-fit bg-indigo-600 rounded-full p-2">
                            <FaPen size={10} className="text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
