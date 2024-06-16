import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const GDService = () => {
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
                    : ""
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
                    : "bg-white text-black rounded-full md:-mx-4 md:-my-1 md:pt-3 font-semibold"
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

        {/* First Div  */}
        <div>
          <img src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1718526454/3_aoft4x.png" />
        </div>

        {/* 3 words */}
        <div className="bg-[#0E0E10] flex justify-center justify-evenly my-3 text-[#1C1C21] uppercase text-[12px] md:text-[20px] lg:text-[30px] font-serif">
          <div>Moodale</div>
          <div>Drinkcart</div>
          <div>AAina: the careers</div>
        </div>

        {/* large & medium */}
        <div className="md:block hidden">
          {/* Branding */}
          <div>
            <div className="flex ml-4 md:ml-[4%] px-[4%] pt-[3%] ">
              <div className="lg:w-[70%] md:w-[60%] w-[40%]  ">
                <p className="text-left text-[#797C86] uppercase font-semibold  text-[22px] md:text-[29px] lg:text-[30px]">
                  Branding
                </p>
              </div>
              <div className="flex -mt-2  justify-end md:w-3/10 w-[60%]  pr-[5%] md:m-4">
                <div className="md:scale-100 scale-[70%] md:-mt-5 mt-0 flex   border-2 border-gray-900 lg:mx-5 mx-2 rounded-3xl ">
                  <div className="bg-zinc-800  p-3 m-1 rounded-full">
                    <FaChevronLeft />
                  </div>
                  <div className="bg-zinc-800 p-3 m-1 rounded-full">
                    <FaChevronRight />
                  </div>
                </div>
              </div>
              {/* images */}
            </div>
            <img
              src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1718525087/Vector_zadhag.png"
              className="scale-[85%] h-[60%]"
            />
          </div>
          {/* Social Media Posts */}
          <div>
            <div className="flex ml-4 md:ml-[4%] px-[4%] pt-[3%] ">
              <div className="lg:w-[70%] md:w-[60%] w-[40%]  ">
                <p className="text-left text-[#797C86] uppercase font-semibold  text-[22px] md:text-[29px] lg:text-[30px]">
                  Social Media posts
                </p>
              </div>
              <div className="flex -mt-2  justify-end md:w-3/10 w-[60%] lg:w-[30%] md:w-[40%]  pr-[5%] md:m-4">
                <div className="md:scale-100 scale-[70%] md:-mt-5 mt-0 flex   border-2 border-gray-900 lg:mx-5 mx-2 rounded-3xl ">
                  <div className="bg-zinc-800  p-3 m-1 rounded-full">
                    <FaChevronLeft />
                  </div>
                  <div className="bg-zinc-800 p-3 m-1 rounded-full">
                    <FaChevronRight />
                  </div>
                </div>
              </div>
            </div>
            {/* images */}
            <div className="flex mx-[5%] scale-[95%]">
              <div className="mx-4">
                <img src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1718525530/pizza_gxtmq6.png" />
                <p className="uppercase text-left pt-3">DELICIOUS PIZZA</p>
              </div>
              <div className="mx-4">
                <img src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1718525530/mojito_grzuwl.png" />
                <p className="text-left pt-3">
                  MOJITO (doubling the good times){" "}
                </p>
              </div>
              <div className="mx-4 ">
                <img src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1718525541/burger_fyg3qr.png" />
                <p className="uppercase text-left pt-3">TIME TO BE SINGLE </p>
              </div>
            </div>
          </div>
          {/* Posters and Flyers */}
          <div>
            <div className="flex ml-4 md:ml-[4%] px-[4%] pt-[3%] ">
              <div className="lg:w-[70%] md:w-[60%] w-[40%]  ">
                <p className="text-left text-[#797C86] uppercase font-semibold  text-[22px] md:text-[29px] lg:text-[30px]">
                  Posters & Flyers
                </p>
              </div>
              <div className="flex -mt-2  justify-end md:w-3/10 w-[60%] lg:w-[30%] md:w-[40%]   pr-[5%] md:m-4">
                <div className="md:scale-100 scale-[70%] md:-mt-5 mt-0 flex   border-2 border-gray-900 lg:mx-5 mx-2 rounded-3xl ">
                  <div className="bg-zinc-800  p-3 m-1 rounded-full">
                    <FaChevronLeft />
                  </div>
                  <div className="bg-zinc-800 p-3 m-1 rounded-full">
                    <FaChevronRight />
                  </div>
                </div>
              </div>
            </div>
            {/* images */}
            <div className="flex mx-[5%] scale-[95%]">
              <div className="mx-5 scale-90">
                <img src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1718525537/gwagon_vinbl1.png" />
                <p className="uppercase text-left pt-3  pl-2">G-WAGON</p>
              </div>
              <div className="mx-5 scale-90">
                <img src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1718525538/car2_v1vheh.png" />
                <p className="text-left pt-3 pl-2">McLAREN 720s</p>
              </div>
              <div className="mx-5 scale-90">
                <img src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1718525529/porsche_sz8hna.png" />
                <p className="uppercase text-left pt-3  pl-2">
                  PORSCHE 911 GT3 RS
                </p>
              </div>
              <div className="mx-5 scale-90">
                <img src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1718525530/Mercedes_Benz_AMG_GT_1_ivrnc7.png" />
                <p className="uppercase text-left pt-3  pl-2">
                  MERCEDES BENZ AMG GT{" "}
                </p>
              </div>
            </div>
          </div>
          {/* Brouchures & MAGAZINES */}
          <div>
            <div className="flex ml-4 md:ml-[4%] px-[4%] pt-[3%] ">
              <div className="lg:w-[70%] md:w-[60%] w-[40%]  ">
                <p className="text-left text-[#797C86] uppercase font-semibold  text-[22px] md:text-[29px] lg:text-[30px]">
                  Brouchures & MAGAZINES
                </p>
              </div>
              <div className="flex -mt-2  justify-end md:w-3/10 w-[60%]  pr-[5%] md:m-4">
                <div className="md:scale-100 scale-[70%] md:-mt-5 mt-0 flex   border-2 border-gray-900 lg:mx-5 mx-2 rounded-3xl ">
                  <div className="bg-zinc-800  p-3 m-1 rounded-full">
                    <FaChevronLeft />
                  </div>
                  <div className="bg-zinc-800 p-3 m-1 rounded-full">
                    <FaChevronRight />
                  </div>
                </div>
              </div>
            </div>
            {/* images */}
            <div className="flex mx-[3%] scale-[90%]">
              <div className="mr-[3%] h-10mm  scale-90">
                <img src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1718525545/1_zaabzk.png" />
                <p className=" text-left pt-3  pl-2">Modern Super Car 2024</p>
              </div>
              <div className="mx-[5%] h-10mm  scale-90">
                <img src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1718525545/2_gltqed.png" />
                <p className="text-left pt-3 pl-2">Sports Car</p>
              </div>
              <div className="ml-[3%] h-10mm scale-90">
                <img src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1718525542/3_qok4md.png" />
                <p className=" text-left pt-3  pl-2">Soccer</p>
              </div>
            </div>
          </div>

          {/* Envelopes */}
          <div>
            <div className="flex  ml-4 md:ml-[4%] px-[4%] pt-[3%] ">
              <div className="lg:w-[70%] md:w-[60%] w-[40%]  ">
                <p className="text-left text-[#797C86] uppercase font-semibold  text-[22px] md:text-[29px] lg:text-[30px]">
                  Envelopes
                </p>
              </div>
              <div className="flex -mt-2  justify-end md:w-3/10 w-[60%] lg:w-[30%] md:w-[40%]   pr-[5%] md:m-4">
                <div className="md:scale-100 scale-[70%] md:-mt-5 mt-0 flex   border-2 border-gray-900 lg:mx-5 mx-2 rounded-3xl ">
                  <div className="bg-zinc-800  p-3 m-1 rounded-full">
                    <FaChevronLeft />
                  </div>
                  <div className="bg-zinc-800 p-3 m-1 rounded-full">
                    <FaChevronRight />
                  </div>
                </div>
              </div>
            </div>
            {/* images */}
            <div className="flex mx-[3%] scale-[100%]">
              <div className="ml-[3%] h-10mm  scale-90">
                <img src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1718525530/image_6_rfcjch.png" />
                <p className=" text-left pt-3  pl-2">MOCK UP ENVEL0PE</p>
              </div>
              <div className="mx-[3%] h-10mm  scale-90">
                <img src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1718525530/image_7_oejthj.png" />
                <p className="text-left pt-3 pl-2">MOCK UP ENVEL0PE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Small */}
        <div className="md:hidden block">
          <div className="md:hidden">
            {/* graphic */}
            <div>
              <div className="pt-10 text-left mx-[7%] text-gray-600">
                <p className="text-2xl  uppercase text-gray-400">
                  Social Media Posts
                </p>
              </div>
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
              {/* <p className="pt-5 text-left mx-10 text-gray-400">
              Delicious Pizza </p> */}
            </div>
            {/* ui.ux */}
            <div>
              <div className="pt-10 text-left mx-[7%] text-gray-600">
                <p className="text-2xl  uppercase text-gray-400">
                Posters & Flyers
                </p>
              </div>
              <div className="mx-[6%] mt-5 relative">
                <img
                  className="rounded-3xl w-[95%] mx-auto"
                  src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1716453710/yjbczxmsil9ngpcrapov.png"
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
              {/* <p className="pt-5 text-left mx-10 text-gray-400">
              McLaren 720s </p> */}
            </div>
            {/* photography*/}
            <div className="mb-10">
              <div className="pt-10 text-left mx-[7%] text-gray-600">
                <p className="text-2xl  uppercase text-gray-400">
                Brouchers & MAGAZINES
                </p>
              </div>
              <div className="mx-[6%] mt-5 relative">
                <img
                  className="rounded-3xl w-[95%] mx-auto"
                  src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1718525545/2_gltqed.png"
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
              {/* <p className="pt-5 text-left mx-10 text-gray-400">
              McLaren 720s </p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Complete bottom */}
      <div>
        {/* background */}
        <div className="mt-[5%]  h-[20mm] md:h-[65mm] flex justify-end mr-[4%] md:mr-[10%]">
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

export default GDService;
