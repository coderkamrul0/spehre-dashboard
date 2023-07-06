import React from "react";
import {
  FaSearch,
  FaRegBell,
  FaRegEnvelope,
  FaUsers,
  FaPlusCircle,
} from "react-icons/fa";
import ToggleButton from "../ToggleButton/ToggleButton";
import CircleProgress from "../CircleProgress/CircleProgress";

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
            <div className="w-1/3 -mt-20">
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
                      <FaPlusCircle size={26} />
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
                <CircleProgress/>
              </div>
            </div>
            {/* Details  */}
            <div className="w-2/3">d</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
