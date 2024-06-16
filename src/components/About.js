import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { HiMiniEye } from "react-icons/hi2";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const About = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index) => {
    setSelectedItem(index);
  };
  return (
    <div className="min-h-screen bg-[#070708] text-white">
      <div className="p-2">
        {/* navbar */}
        <div className="p-2">
          <div className="border md:mx-16 lg:mx-[24%] rounded-full  md:px-10 md:py-3 py-2 border-gray-500 m-1 md:m-6">
            <div className="flex justify-between text-[10px] md:text-[16px] lg:text[24px] ">
              <Link
                to="/"
                className={`menu-item md:w-20 p-2 md:px-4 mx-1 cursor-pointer ${
                  selectedItem === 0
                    ? "bg-white text-black rounded-full md:-mx-4 md:-my-1 md:pt-3 font-semibold"
                    : ""
                }`}
                onClick={() => handleClick(0)}
              >
                Home
              </Link>
              <Link
                to="/About"
                className={`menu-item md:w-20 p-2 md:px-4 cursor-pointer ${
                  selectedItem === 1
                    ? "bg-white text-black rounded-full md:-mx-4 md:-my-1 md:pt-3 font-semibold"
                    : "bg-white text-black rounded-full md:-mx-4 md:-my-1 md:pt-3 font-semibold"
                }`}
                onClick={() => handleClick(1)}
              >
                About
              </Link>
              <div className="menu-item md:w-20 w-10 pt-2 cursor-pointer">
                <img src="https://res.cloudinary.com/dbenkbws8/image/upload/v1713886773/vayam_png_white_acgj2h.png" />
              </div>
              <Link
                to="/Service"
                className={`menu-item md:w-20 p-2 md:px-4 cursor-pointer ${
                  selectedItem === 3
                    ? "bg-white text-black rounded-full md:-mx-4 md:-my-1 md:pt-3 font-semibold"
                    : ""
                }`}
                onClick={() => handleClick(3)}
              >
                Service
              </Link>
              <Link
                to="/Contact"
                className={`menu-item md:w-20 p-2 md:px-4 mx-1 cursor-pointer ${
                  selectedItem === 4
                    ? "bg-white text-black rounded-full md:-mx-4 md:-my-1 md:pt-3 font-semibold"
                    : ""
                }`}
                onClick={() => handleClick(4)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        {/* md lg numbers */}
        <div className="md:block hidden mx-[5%]">
          <p className="uppercase text-gray-500 text-[25px] text-left font-semibold mb-10">
            vayam biography
          </p>
          <div className="flex justify-between">
            <div className="bg-[#1C1C21] rounded-md mx-1 p-4  py-8 pr-16 mb-4 flex-1">
              <p className="text-[22px] text-left">50+</p>
              <p className="text-[14px] text-left text-gray-500">
                Happy Clients
              </p>
            </div>
            <div className="bg-[#1C1C21] rounded-md mx-1 p-4 py-8 pr-16 mb-4 flex-1">
              <p className="text-[22px] text-left">25+</p>
              <p className="text-[14px] text-left text-gray-500">
                Graphic Projects
              </p>
            </div>
            <div className="bg-[#1C1C21] rounded-md mx-1 p-4 py-8 pr-16 mb-4 flex-1">
              <p className="text-[22px] text-left">10+</p>
              <p className="text-[14px] text-left text-gray-500">
                UiUx Projects
              </p>
            </div>
            <div className="bg-[#1C1C21] rounded-md mx-1 p-4 py-8 pr-16 mb-4 flex-1">
              <p className="text-[22px] text-left">15+</p>
              <p className="text-[14px] text-left text-gray-500">
                Photography Projects
              </p>
            </div>
            <div className="bg-[#1C1C21] rounded-md mx-1 p-4 py-8 pr-16 mb-4 flex-1">
              <p className="text-[22px] text-left">10+</p>
              <p className="text-[14px] text-left text-gray-500">
                Editing projects
              </p>
            </div>
          </div>
        </div>
        {/* sm numbers */}
        <div className="md:hidden block mx-[5%]">
          <p className="uppercase pt-[5%] text-gray-500 text-[25px] text-left font-semibold mb-10">
            vayam biography
          </p>
          <div className="flex flex-col justify-between w-[100%]">
            <div className="bg-[#1C1C21] rounded-md mx-1 p-4 pr-14 mb-4">
              <p className="text-[22px] text-left">5+</p>
              <p className="text-[14px] text-left text-gray-500">
                Happy Clients
              </p>
            </div>
            <div className="flex justify-between w-[100%]">
              <div className="bg-[#1C1C21] w-[50%] rounded-md mx-1 p-4 pr-14 mb-4 flex-1">
                <p className="text-[22px] text-left">70+</p>
                <p className="text-[14px] text-left text-gray-500">
                  Graphic Projects
                </p>
              </div>
              <div className="bg-[#1C1C21] w-[50%] rounded-md mx-1 p-4 pr-14 mb-4 flex-1">
                <p className="text-[22px] text-left">30+</p>
                <p className="text-[14px] text-left text-gray-500">
                  UiUx Projects
                </p>
              </div>
            </div>
            <div className="flex justify-between w-[100%]">
              <div className="bg-[#1C1C21] rounded-md mx-1 p-4 pr-14 mb-4 flex-1 w-[50%]">
                <p className="text-[22px] text-left">15+</p>
                <p className="text-[14px] text-left text-gray-500">
                  Photography Projects
                </p>
              </div>
              <div className="bg-[#1C1C21] rounded-md mx-1 p-4 pr-14 mb-4 flex-1 w-[50%]">
                <p className="text-[22px] text-left">10+</p>
                <p className="text-[14px] text-left text-gray-500">
                  Editing projects
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="block border-gray-800 my-[12%] md:hidden" />
        {/* md description */}
        <div className="mx-[5%] md:text-[14px] text-[13px]">
          <p className="text-gray-400 md:hidden font-semibold block my-4 text-left text-[21px]">
            My Biography
          </p>
          <p className="text-left text-gray-300 pt-1 md:pt-[3%] ">
            "Welcome to Vayam, your ultimate destination for unleashing
            creativity! At Vayam, we're not just a creative agency; we're your
            partners in turning dreams into digital masterpieces. Our expertise
            spans a spectrum of services designed to actualize your vision. From
            dynamic graphic design and intuitive UI/UX solutions to impeccable
            photo and video enhancements, intricate 3D modeling, and captivating
            digital artistry, we're the hub where imagination meets innovation.
          </p>
          <p className="text-left text-gray-300 pt-4 ">
            Our dedicated team of seasoned professionals is committed to pushing
            boundaries and exceeding expectations. Whether you're a budding
            entrepreneur, a seasoned business owner, or an individual with a
            vision, trust Vayam to amplify your ideas into unforgettable
            experiences. Let's embark on a journey of boundless creativity
            together!"
          </p>
        </div>
        {/* services */}
        <div className="flex w-[100%] px-[4%] pt-[5%] ">
          <div className="lg:w-[70%] md:w-[60%] w-[40%]    ">
            <p className="text-left text-[14px] md:text-md lg:text-xl font-medium text-gray-400 mb-2">
              SERVICES
            </p>
            <p className="text-left text-white text-[16px] md:text-2xl lg:text-4xl font-semibold">
              OUR SERVICES
            </p>
          </div>
          <div className="flex scale-[60%] md:scale-100 justify-end md:w-3/10 w-[60%] my-auto pr-[5%] md:mt-7 mt-2  md:m-4">
            <div className="md:flex hidden mt-1 border-2 border-gray-900 lg:mx-5 mx-2 rounded-3xl ">
              <div className="bg-zinc-800  p-3 m-1 rounded-full">
                <FaChevronLeft />
              </div>
              <div className="bg-zinc-800 p-3 m-1 rounded-full">
                <FaChevronRight />
              </div>
            </div>
            <div className="flex mt-1 md:mt-2 bg-zinc-800 p-3 px-4 md:p-2  md:px-3  rounded-full">
              <p className="text-[30px] md:text-3xl pt-1 lg:pt-0 md:pt-1">
                <HiMiniEye />
              </p>
              {/* <FaArrowRightLong className="hidden md:mt-[7px] md:text-[19px] ml-2" /> */}
            </div>
          </div>
        </div>
        {/* grphic */}
        <div className="md:hidden">
          {/* graphic */}
          <div>
            <div className="mx-[6%] mt-5 relative">
              <img
                className="rounded-3xl w-[95%] mx-auto"
                src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1717660483/chicken_khmvyg.png"
                alt="your image"
              />
              <div className="flex bg-black rounded-full m-3 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="flex m-2 border-2 border-zinc-800 rounded-full">
                  <div className="bg-zinc-800 p-3 m-1 rounded-full">
                    <FaChevronLeft />
                  </div>
                  <div className="bg-zinc-800 p-3 m-1 rounded-full">
                    <FaChevronRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-10 text-left mx-[7%] text-gray-600">
              <p className="text-2xl  uppercase text-gray-400">
                Graphic Design
              </p>
              <p className="pt-2">
                In the vibrant realm of website design, graphic design serves as
                the pulse, infusing every pixel with intention and allure. From
                captivating logos to seamless user interfaces, graphic design
                orchestrates the visual symphony that transforms digital spaces
                into captivating experiences.
              </p>
            </div>
          </div>
          {/* ui.ux */}
          <div className="pt-[7%]">
            <div className="mx-[6%] mt-5 relative">
              <img
                className="rounded-3xl w-[95%] mx-auto"
                src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1717660483/shoe_aa7jty.png"
                alt="your image"
              />
              <div className="flex bg-black rounded-full m-3 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="flex m-2 border-2 border-zinc-800 rounded-full">
                  <div className="bg-zinc-800 p-3 m-1 rounded-full">
                    <FaChevronLeft />
                  </div>
                  <div className="bg-zinc-800 p-3 m-1 rounded-full">
                    <FaChevronRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-10 text-left mx-[7%] text-gray-600">
              <p className="text-2xl  uppercase text-gray-400">UIuX design</p>
              <p className="pt-2">
                In the dynamic landscape of website design, UI/UX design emerges
                as the architect, crafting intuitive pathways and immersive
                interactions. Seamlessly blending aesthetics with functionality,
                UI/UX design elevates user journeys, transforming browsing into
                an engaging exploration.
              </p>
            </div>
          </div>
          {/* photography*/}
          <div className="pt-[7%]">
            <div className="mx-[6%] mt-5 relative">
              <img
                className="rounded-3xl object-scale-down mx-auto"
                src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1717661213/pic_gpxvf5.jpg"
                alt="your image"
                style={{ height: "300px", width: "950%", objectFit: "cover" }}
              />
              <div className="flex bg-black rounded-full m-3 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="flex m-2 border-2 border-zinc-800 rounded-full">
                  <div className="bg-zinc-800 p-3 m-1 rounded-full">
                    <FaChevronLeft />
                  </div>
                  <div className="bg-zinc-800 p-3 m-1 rounded-full">
                    <FaChevronRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-10 text-left mx-[7%] text-gray-600">
              <p className="text-2xl  uppercase text-gray-400">Photography</p>
              <p className="pt-2">
                Our event photography service is dedicated to capturing the
                magic of your special occasions. Whether it's a wedding,
                corporate event, or milestone celebration, we're there to
                document every heartfelt moment. We blend into the background,
                ensuring natural and candid shots that reflect the emotions of
                the day.
              </p>
            </div>
          </div>
        </div>
        {/* photogrid */}
        <div className="hidden md:flex flex-col items-center my-[5%] ">
          <div className="flex  bg-zinc-800 md:pt-3 md:px-3 rounded-t-3xl">
            <div className="relative group cursor-pointer">
              <img
                className="h-[20mm] w-[20mm] m-1 md:h-[40mm] md:w-[50mm] md:m-2 lg:h-[85mm] lg:w-[85mm] lg:m-3 rounded-md md:rounded-3xl"
                src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1717660483/chicken_khmvyg.png"
              />
              <div className="h-[20mm] w-[20mm] m-1 md:h-[40mm] md:w-[50mm] md:m-2 lg:h-[85mm] lg:w-[85mm] lg:m-3 rounded-md md:rounded-3xl absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 flex justify-center items-end pb-10 transition duration-300">
                <p className="text-white opacity-0 group-hover:opacity-100 font-aileron font-thin tracking-widest uppercase text-[29px]">
                  Graphic Designer
                </p>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <img
                className="h-[20mm] w-[30mm] m-1 md:h-[40mm] md:w-[70mm] md:m-2 lg:h-[85mm] lg:w-[100mm] lg:m-3 rounded-md md:rounded-3xl"
                src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1717660483/shoe_aa7jty.png"
              />
              <div className="h-[20mm] w-[30mm] m-1 md:h-[40mm] md:w-[70mm] md:m-2 lg:h-[85mm] lg:w-[100mm] lg:m-3 rounded-md md:rounded-3xl absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 flex justify-center items-end pb-10 transition duration-300">
                <p className="text-white opacity-0 group-hover:opacity-100 font-aileron font-thin tracking-widest uppercase text-[29px]">
                  UI/UX DESIGN
                </p>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <img
                className="h-[20mm] w-[20mm] m-1 md:h-[40mm] md:w-[50mm] md:m-2 lg:h-[85mm] lg:w-[85mm] lg:m-3 rounded-md md:rounded-3xl"
                src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1717662528/bike_mopq0o.jpg"
              />
              <div className="h-[20mm] w-[20mm] m-1 md:h-[40mm] md:w-[50mm] md:m-2 lg:h-[85mm] lg:w-[85mm] lg:m-3 rounded-md md:rounded-3xl absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 flex justify-center items-end pb-10 transition duration-300">
                <p className="text-white opacity-0 group-hover:opacity-100 font-aileron font-thin tracking-widest uppercase text-[29px]">
                  Photography
                </p>
              </div>
            </div>
          </div>

          <div className="flex  bg-zinc-800 md:pb-3 md:px-3 rounded-b-3xl">
            <div className="relative group cursor-pointer">
              <img
                className="h-[20mm] w-[15mm] m-1 md:h-[40mm] md:w-[45mm] md:m-2 lg:h-[85mm] lg:w-[60mm] lg:m-3 rounded-md md:rounded-3xl"
                src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1717660483/houses_yvuanx.png"
              />
              <div className="h-[20mm] w-[15mm] m-1 md:h-[40mm] md:w-[45mm] md:m-2 lg:h-[85mm] lg:w-[60mm] lg:m-3 rounded-md md:rounded-3xl absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 flex justify-center items-end pb-10 transition duration-300">
                <p className="text-white opacity-0 group-hover:opacity-100 font-aileron font-thin tracking-widest uppercase text-[29px]">
                  Digital Art
                </p>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <img
                className="h-[20mm] w-[40mm] m-1 md:h-[40mm] md:w-[80mm] md:m-2 lg:h-[85mm] lg:w-[150mm] lg:m-3 rounded-md md:rounded-3xl"
                src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1717661213/pic_gpxvf5.jpg"
              />
              <div className="h-[20mm] w-[40mm] m-1 md:h-[40mm] md:w-[80mm] md:m-2 lg:h-[85mm] lg:w-[150mm] lg:m-3 rounded-md md:rounded-3xl absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 flex justify-center items-end pb-10 transition duration-300">
                <p className="text-white opacity-0 group-hover:opacity-100 font-aileron font-thin tracking-widest uppercase text-[29px]">
                  Editing
                </p>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <img
                className="h-[20mm] w-[15mm] m-1 md:h-[40mm] md:w-[45mm] md:m-2 lg:h-[85mm] lg:w-[60mm] lg:m-3 rounded-md md:rounded-3xl"
                src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1717660483/animie_gskbnu.png"
              />
              <div className="h-[20mm] w-[15mm] m-1 md:h-[40mm] md:w-[45mm] md:m-2 lg:h-[85mm] lg:w-[60mm] lg:m-3 rounded-md md:rounded-3xl absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 flex justify-center items-end pb-10 transition duration-300">
                <p className="text-white opacity-0 group-hover:opacity-100 font-aileron font-thin tracking-widest uppercase text-[29px]">
                  3d modelling
                </p>
              </div>
            </div>
          </div>
        </div>
          {/* total reviews */}
          <div className="mx-[5%] mt-[5%] my-10">
          <div className="mb-2">
            <p className="text-left text-[8px] md:text-lg font-semibold text-gray-400">
              TESTIMONIALS
            </p>
            <p className="text-left text-md md:text-3xl lg:text-4xl font-semibold text-white">
              WHAT MY CLIENTS SAY
            </p>
          </div>
          <div className="flex w-[100%] mt-[2%]">
            <div className="lg:w-[70%] md:w-[60%] w-[70%]  ">
              <p className="text-left text-sm md:text-md  font-medium text-gray-400 mb-2">
                Total Reviews
              </p>
              <p className="text-left text-white text-sm md:text-xl font-semibold">
                323
              </p>
            </div>
            {/* <div className="flex justify-end md:w-3/10 w-1/2 my-auto pr-[5%] m-4">
              <div className="flex mt-1 border-2 border-gray-900 lg:mx-5 mx-2 rounded-3xl ">
                <div className="bg-zinc-800 p-3 m-1 rounded-full">
                  <FaChevronLeft />
                </div>
                <div className="bg-zinc-800 p-3 m-1 rounded-full">
                  <FaChevronRight />
                </div>
              </div>
              <div className="flex mt-2 bg-zinc-800 p-2 px-3 rounded-md">
                <p className="text-xs md:text-[15px] pt-2">
                  View All Testimonials
                </p>
                <FaArrowRightLong className=" md:mt-[7px] md:text-[19px] ml-2" />
              </div>
            </div> */}
            <div className="flex  scale-[60%] md:scale-100 justify-end  md:w-3/10 w-[30%] my-auto ml-[10%] md:ml-0 mt-2 md:mt-0  md:m-4">
              <div className="flex mt-1 border-2 border-gray-900 lg:mx-5 mx-2 rounded-3xl ">
                <div className="bg-zinc-800 p-3 m-1 rounded-full">
                  <FaChevronLeft />
                </div>
                <div className="bg-zinc-800 p-3 m-1 rounded-full">
                  <FaChevronRight />
                </div>
              </div>
              <div className="flex mt-1 md:mt-2 bg-zinc-800 p-1 md:p-2  px-3  rounded-full">
                <p className="text-[30px] md:text-3xl pt-2 lg:pt-0 md:pt-1">
                  <HiMiniEye />
                </p>
                {/* <FaArrowRightLong className="hidden md:mt-[7px] md:text-[19px] ml-2" /> */}
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-900  md:mx-[5%]" />
        <div className="mt-10 mx-[2%] md:mx-[5%] grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* box1 */}
          <div className="h-[60mm] w-[85mm] p-1 ">
            <div
              className="p-4 rounded-lg h-full "
              style={{
                backgroundImage:
                  "url(https://res.cloudinary.com/dbenkbws8/image/upload/v1713886080/Card_pj4dug.png)",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="text-white font-semibold">Jayanth Deepala</p>
                  <p className="text-gray-400 text-sm">Film Director</p>
                </div>
                <div className="flex space-x-2 border-2 border-black bg-black p-1 rounded-full">
                  <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-1">
                    <IoLogoFacebook className="text-white" />
                  </div>
                  <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-1">
                    <FaTwitter className="text-white" />
                  </div>
                  <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-1">
                    <FaLinkedin className="text-white" />
                  </div>
                </div>
              </div>
              <div className="flex items-center ">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="my-1">
                    <FaStar className="fill-yellow-500" />
                  </div>
                ))}
              </div>
              <p className="text-white text-[13px]  text-left ">
                "It’s A Happy Collaboration With This Team As In They Listen To
                Your Requirements With Utmost Patience And Deliver A Very Well
                Curated Piece Of Content. "
              </p>
              <p className="text-white text-[13px] text-left mt-1"> But Mind You, Quality Takes Time And Yes They Take It For Finesse.</p>

            </div>
          </div>
          {/* box2 */}
          <div className="h-[60mm] w-[85mm] p-1 ">
            <div
              className="p-4 rounded-lg h-full"
              style={{
                backgroundImage:
                  "url(https://res.cloudinary.com/dbenkbws8/image/upload/v1713886080/Card_pj4dug.png)",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="text-white font-semibold">Drinkcart</p>
                  <p className="text-gray-400 text-sm">Lucknow, India</p>
                </div>
                <div className="flex space-x-2 border-2 border-black bg-black p-1 rounded-full">
                  <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-1">
                    <IoLogoFacebook className="text-white" />
                  </div>
                  <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-1">
                    <FaTwitter className="text-white" />
                  </div>
                  <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-1">
                    <FaLinkedin className="text-white" />
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-2 ">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="my-4">
                    <FaStar className="fill-yellow-500" />
                  </div>
                ))}
              </div>
              <p className="text-white mt-2 text-left">
                "An outstanding achievement! Vayam earns a resounding five-star
                rating for their exceptional UI/UX work."
              </p>
            </div>
          </div>
          {/* box3 
          <div className="h-[60mm] w-[85mm] p-1 ">
            <div
              className="p-4 rounded-lg h-full"
              style={{
                backgroundImage:
                  "url(https://res.cloudinary.com/dbenkbws8/image/upload/v1713886080/Card_pj4dug.png)",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="text-white font-semibold">Aaien: The careers</p>
                  <p className="text-gray-400 text-sm">USA, California</p>
                </div>
                <div className="flex space-x-2 border-2 border-black bg-black p-1 rounded-full">
                  <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-1">
                    <IoLogoFacebook className="text-white" />
                  </div>
                  <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-1">
                    <FaTwitter className="text-white" />
                  </div>
                  <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-1">
                    <FaLinkedin className="text-white" />
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-2 ">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="my-4">
                    <FaStar className="fill-yellow-500" />
                  </div>
                ))}
              </div>
              <p className="text-white mt-2 text-[14px] pb-1 text-left">
                "Vayam's photography skillfully captured the essence of our
                wedding day. Their editing brings our cherished memories to
                life.!"
              </p>
            </div>
          </div>*/}
        </div>
        {/* background */}
        <div className="mt-[5%] h-[20mm] md:h-[65mm] flex justify-end mr-[4%] md:mr-[10%]">
          <img src="https://res.cloudinary.com/dbenkbws8/image/upload/v1713890705/Vayam_vector_c99jmo.png" />
        </div>

        {/* Footer Small */}

        <div className="md:hidden mx-[7%]">
          <div className="text-left pl-5">
            <p className="font-manrope font-thin tracking-wide pt-4  text-[23px]">
              Contact Information
            </p>
            <p className="font-manrope text-[14px] font-semibold text-[#E4E4E6]">
              Email
            </p>
            <p className="font-manrope mt-1 text-[#AFB0B6] text-[15px] font-normal">
              vayamdesigners@gmail.com
            </p>
            <p className="font-manrope text-[14px] font-semibold text-[#E4E4E6]">
              Phone Number
            </p>
            <p className="font-manrope mt-1 text-[#AFB0B6] text-[15px] font-normal">
              +91 9032141474
            </p>
            <div className="flex">
              <div className="flex space-x-2 border-2 my-4 border-[#2F2F37] bg-black p-1 rounded-full">
                <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-1">
                  <IoLogoFacebook className="text-white" />
                </div>
                <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-1">
                  <FaTwitter className="text-white" />
                </div>
                <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-1">
                  <FaLinkedin className="text-white" />
                </div>
              </div>
            </div>
          </div>

          <p className="bg-[#2F2F37] mt-4 p-2 rounded-2xl">Let's Work </p>
          <div className="border-s-0">
            <p className="uppercase text-[12px] py-5 pt-8 text-gray-500">
              A more meaningful home for photography
            </p>
            <p className="text-left text-[22px] pl-5">LET'S</p>
            <p className="text-left text-[22px] pl-5">WORK TOGETHER</p>
          </div>
          <div className="flex flex-row w-[100%] px-2 pt-5 ">
            <div className="flex flex-col w-[50%] pt-5">
              <p className="text-[#AFB0B6]  text-[4mm]  px-5 pb-3 text-left">
                HOME
              </p>
              <p className="text-left text-[4mm] px-5 py-2 underline underline-offset-8">
                ABOUT ME
              </p>
              <p className="text-left text-[4mm] px-5 py-2 underline underline-offset-8">
                MY WORKS
              </p>
              <p className="text-left text-[4mm] px-5 py-2 underline underline-offset-8">
                TESTIMONIALS
              </p>
            </div>
            <div className="flex flex-col w-[50%] pt-5">
              <p className="text-[#AFB0B6] px-5 pb-3 text-[4mm] text-right">
                CLIENTS
              </p>
              <p className="text-right py-2 pl-2 px-5 text-[4mm] underline underline-offset-8">
                MOODALE
              </p>
              <p className="text-right text-[4mm] px-5 py-2 pl-2 underline underline-offset-8">
                DRINKCART
              </p>
              <p className="text-right pt-2 pl-2 text-[4mm] px-5 ">
                AAIEN: THE
              </p>
              <p className="text-right pl-2 text-[4mm] px-5 underline underline-offset-8">
                CAREERS
              </p>
            </div>
          </div>
          <div className="flex flex-row w-[100%] px-2 pt-6 ">
            <div className="flex flex-col w-[50%] pt-5">
              <p className="text-[#AFB0B6] px-5 pb-3 text-[4mm] text-left">
                PORTFOLIO
              </p>
              <p className="text-left py-2 text-[3.5mm] px-5 underline underline-offset-8">
                GRAPHIC DESIGN
              </p>
              <p className="text-left py-2 text-[4mm] px-5 underline underline-offset-8">
                UI/UX DESIGN
              </p>
              <p className="text-left py-2 text-[4mm] px-5 underline underline-offset-8">
                PHOTOGRAPHY
              </p>
              <p className="text-left py-2 text-[4mm] px-5 underline underline-offset-8">
                PHOTO EDIT
              </p>
              <p className="text-left py-2 text-[4mm] px-5 underline underline-offset-8">
                VIDEOGRAPHY
              </p>
              <p className="text-left py-2 text-[4mm] px-5 underline underline-offset-8">
                VIDEO EDIT
              </p>
            </div>
            <div className="flex flex-col w-[50%] pt-5">
              <p className="text-[#AFB0B6] pb-3 text-[4mm]  px-5 text-right">
                SERVICES
              </p>
              <p className="text-right py-2 text-[3.5mm] px-5 underline underline-offset-8">
                GRAPHIC DESIGN
              </p>
              <p className="text-right py-2 text-[4mm] px-5 underline underline-offset-8">
                UI/UX DESIGN
              </p>
              <p className="text-right py-2 text-[4mm] px-5 underline underline-offset-8">
                PHOTOGRAPHY
              </p>
              <p className="text-right py-2 text-[4mm] px-5 underline underline-offset-8 uppercase">
                Editing
              </p>
              <p className="text-right py-2 text-[4mm] px-5 underline underline-offset-8 uppercase">
                digital art
              </p>
              <p className="text-right py-2 text-[4mm] px-5 underline underline-offset-8 uppercase">
                3d modelling
              </p>
            </div>
          </div>
        </div>

        {/* footer Medium */}
        <div className="hidden lg:-my-24 -my-18 md:flex mx[5%] lg:mx-[10%] border-r-2  border-zinc-900 text-white">
          <div className="flex flex-row mx-[4%] w-full  ">
            {/* Left Section */}
            <div className="flex flex-col w-[30%] lg:w-[40%] py-5">
              <div className="flex flex-row font-semibold">
                <div className="flex flex-nowrap font-manrope font-thin tracking-wide pt-4  text-[23px]">
                  <img
                    className="px-2 md:scale-90 scale-75 lg:pt-0   "
                    src="https://res.cloudinary.com/dbenkbws8/image/upload/v1713974953/Soft_Star_j3e13v.png"
                  />

                  <p>Contact Information</p>
                </div>
              </div>
              <div className="flex  pt-5">
                <div className="text-left pr-[10%]">
                  <p className="font-manrope text-[14px] font-semibold text-[#E4E4E6]">
                    Email
                  </p>
                  <p className="font-manrope mt-1 text-[#AFB0B6] text-[15px] font-normal">
                    vayamdesigners@gmail.com
                  </p>
                  <div className="flex space-x-2 border-2 mt-4 border-[#2F2F37] bg-black p-1 rounded-full">
                    <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-2">
                      <IoLogoFacebook className="text-white" />
                    </div>
                    <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-2">
                      <FaTwitter className="text-white" />
                    </div>
                    <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-2">
                      <FaLinkedin className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="pl-[8%]">
                  <p className="font-manrope text-[14px] font-semibold text-[#E4E4E6]">
                    Phone Number
                  </p>
                  <p className="font-manrope mt-1 text-[#AFB0B6] text-[15px] font-normal">
                    +91 9032141474
                  </p>
                  <div className="bg-[#2F2F37] mt-4 p-2 text-[10px] lg:text-[14px] rounded-2xl">
                    Let's Work
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-[60%] md:w-[70%] flex flex-row text-[10px] border-l-2 border-zinc-900 py-5 pl-[2%] pt-[6%]">
              <div>
                <p className="text-[#AFB0B6] text-[3mm]  px-5 pb-3 text-left">
                  HOME
                </p>
                <p className="text-left text-[3.1mm] px-5 py-2 underline underline-offset-8">
                  ABOUT ME
                </p>
                <p className="text-left text-[3.1mm] px-5 py-2 underline underline-offset-8">
                  MY WORKS
                </p>
                <p className="text-left text-[3.1mm] px-5 py-2 underline underline-offset-8">
                  TESTIMONIALS
                </p>
              </div>
              <div>
                <p className="text-[#AFB0B6] px-5 pb-3 text-[3mm] text-left">
                  CLIENTS
                </p>
                <p className="text-left py-2 pl-2 text-[3.1mm] underline underline-offset-8">
                  MOODALE
                </p>
                <p className="text-left text-[3.1mm] px-5 py-2 pl-2 underline underline-offset-8">
                  DRINKCART
                </p>
                <p className="text-left pt-2 pl-2 text-[3.1mm] px-5 ">
                  AAIEN: THE
                </p>
                <p className="text-left pl-2 text-[3.1mm] px-5 underline underline-offset-8">
                  CAREERS
                </p>
              </div>
              <div>
                <p className="text-[#AFB0B6] px-5 pb-3 text-[3mm] text-left">
                  PORTFOLIO
                </p>
                <p className="text-left py-2 text-[3mm] px-5 underline underline-offset-8">
                  GRAPHIC DESIGN
                </p>
                <p className="text-left py-2 text-[3.1mm] px-5 underline underline-offset-8">
                  UI/UX DESIGN
                </p>
                <p className="text-left py-2 text-[3.1mm] px-5 underline underline-offset-8">
                  PHOTOGRAPHY
                </p>
                <p className="text-left py-2 text-[3.1mm] px-5 underline underline-offset-8">
                  PHOTO EDIT
                </p>
                <p className="text-left py-2 text-[3.1mm] px-5 underline underline-offset-8">
                  VIDEOGRAPHY
                </p>
                <p className="text-left py-2 text-[3.1mm] px-5 underline underline-offset-8">
                  VIDEO EDIT
                </p>
              </div>
              <div>
                <p className="text-[#AFB0B6] pb-3 text-[3mm]  px-5 text-left">
                  SERVICES
                </p>
                <p className="text-left py-2 lg:text-[3mm] md:text-[2.5mm] px-5 underline underline-offset-8">
                  GRAPHIC DESIGN
                </p>
                <p className="text-left py-2 text-[3.1mm] px-5 underline underline-offset-8">
                  UI/UX DESIGN
                </p>
                <p className="text-left py-2 text-[3.1mm] px-5 underline underline-offset-8">
                  PHOTOGRAPHY
                </p>
                <p className="text-left py-2 text-[3.1mm] px-5 underline underline-offset-8 uppercase">
                  Editing
                </p>
                <p className="text-left py-2 text-[3.1mm] px-5 underline underline-offset-8 uppercase">
                  digital art
                </p>
                <p className="text-left py-2 text-[3mm] px-5 underline underline-offset-8 uppercase">
                  3d modelling
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-zinc-900 md:mx-[10%] mt-[6.5%]" />

        {/*Md  last */}
        <div className="hidden md:flex justify-between items-center py-4 mx-[12%]  md:text-[12px] lg:text-[15px] text-[#797C86]">
          {/* Div on the left */}
          <div className="flex ">
            <p className="pr-5">Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>

          {/* Div in the center */}
          <div className="flex space-x-2 border-2 border-[#2F2F37] bg-black p-1 rounded-full">
            <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-1">
              <IoLogoFacebook className="text-white" />
            </div>
            <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-1">
              <FaTwitter className="text-white" />
            </div>
            <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-1">
              <FaLinkedin className="text-white" />
            </div>
          </div>

          {/* Div on the right */}
          <div>
            <p>© 2024 Vayam Pvt Ltd Photography. All rights reserved.</p>
          </div>
        </div>
        {/* small last */}
        <div className="flex flex-col text-[#797C86] text-sm py-3 justify-center items-center md:hidden">
          <div className="flex py-2">
            <p className="">Terms & Conditions</p>
            <p className="px-2">|</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <p>© 2024 Vayam Pvt Ltd Photography. All rights reserved.</p>
          </div>
          <div className="flex space-x-2 border-2 my-4 border-[#2F2F37] bg-black p-1 rounded-full">
            <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-1">
              <IoLogoFacebook className="text-white" />
            </div>
            <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-1">
              <FaTwitter className="text-white" />
            </div>
            <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-1">
              <FaLinkedin className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
