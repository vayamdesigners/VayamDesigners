import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="min-h-screen bg-[#070708] text-white">
      <div className="p-2">
        {/* navbar */}

        {/* Navbar */}
        <div className="border md:mx-16 lg:mx-[24%] rounded-full md:px-10 md:py-3 py-2 border-gray-500 m-1 md:m-6">
          <div className="flex justify-between text-[10px] md:text-[16px] lg:text[24px]">
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
              to="/about"
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
              <img
                src="https://res.cloudinary.com/dbenkbws8/image/upload/v1713886773/vayam_png_white_acgj2h.png"
                alt="logo"
              />
            </div>
            <Link
              to="/service"
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
              to="/contact"
              className={`menu-item md:w-20 p-2 md:px-4 mx-1 cursor-pointer ${
                selectedItem === 4
                  ? "bg-white text-black rounded-full md:-mx-4 md:-my-1 md:pt-3 font-semibold"
                  : "bg-white text-black rounded-full md:-mx-4 md:-my-1 md:pt-3 font-semibold"
              }`}
              onClick={() => handleClick(4)}
            >
              Contact
            </Link>
          </div>
        </div>
        {/* img sm */}
        <div className="md:hidden relative block m-3 mt-5 pb-5">
          <div className="relative">
            <img
              className="rounded-2xl"
              src="https://s3-alpha-sig.figma.com/img/e211/1692/3c3d7c3c846eab77857081e04985627e?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZmE6RIa43N~LZQ9A0RZVYXJUAvcfLbR14vaz03~gR8SkRdYV8nVIyzDMUrlV8Juz0K-~ZhixzS4-9n0-9gSgWPJSLPOn-2GvOY2vABsK9QuYilijpN7sCCM1-mc0tgeWlPwkrWhBZuRlSJFDS-7z6bQhs3OlAtC0Kc5AUipVzu3M9I4WoPBejrP4RAYa9kyVo5-BOWw81yILWkXv1Anubtc4NmFuSKyLQ3M4L1gCuZAEucIQxXE-sZFmDPO2G9j3odatIK8yl8w8nY9KYwBYJP6pvykaHwcE7wjTDcSi~TWlpsPDzDFZWfTy-HsMzsPzWP-LKeJf05MnJFfXgzujLQ__"
              alt="background"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pt-1 bg-[#070708] rounded-t-2xl text-left">
              <div className="bg-[#070708] rounded-full">
                <div className="flex justify-center space-x-2 border-2 border-black bg-[#070708] p-1 rounded-full">
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
        </div>

        {/* descrptn sm */}
        <div className="text-left  md:hidden block mx-[5%]">
          <p className="uppercase text-[12px] text-gray-500">contact us</p>
          <p className="uppercase pt-1 text-lg ">Get in Touch with us </p>
          <p className="pt-3 text-gray-500 text-[11px]">
            "Got a vision you're eager to bring to life? Let's collaborate!
            Whether it's revamping your brand's identity or crafting stunning
            visuals, our team at Vayam is here to make it happen. Reach out to
            us today to start the conversation and turn your ideas into
            captivating designs. Let's create something extraordinary together."
          </p>
        </div>
        <hr className="border-gray-800  my-5" />

        <div className="text-left mb-5  md:hidden block mx-[5%]">
          <p className="uppercase text-lg text-gray-500 font-semibold">
            contact Information
          </p>
          <p className="pt-3 text-gray-500 text-[11px]">
            Feel free to reach out to us through various channels. We are
            available by phone, email, and social media for your convenience.
          </p>
          <p className="text-[14px] pt-4 underline underline-offset-2 text-gray-300"> +91 9032141474</p>
          <p className="text-[14px] pt-2  underline underline-offset-2 text-gray-300"> vayamdesigners@gmail.com</p>
        </div>

        {/* img  md*/}
        <div className="p-2 relative">
          <div>
            <div className="hidden md:block m-[5%] relative">
              <img
                className="rounded-3xl"
                src="https://s3-alpha-sig.figma.com/img/e211/1692/3c3d7c3c846eab77857081e04985627e?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZmE6RIa43N~LZQ9A0RZVYXJUAvcfLbR14vaz03~gR8SkRdYV8nVIyzDMUrlV8Juz0K-~ZhixzS4-9n0-9gSgWPJSLPOn-2GvOY2vABsK9QuYilijpN7sCCM1-mc0tgeWlPwkrWhBZuRlSJFDS-7z6bQhs3OlAtC0Kc5AUipVzu3M9I4WoPBejrP4RAYa9kyVo5-BOWw81yILWkXv1Anubtc4NmFuSKyLQ3M4L1gCuZAEucIQxXE-sZFmDPO2G9j3odatIK8yl8w8nY9KYwBYJP6pvykaHwcE7wjTDcSi~TWlpsPDzDFZWfTy-HsMzsPzWP-LKeJf05MnJFfXgzujLQ__"
                alt="background"
              />
            </div>
            {/* div 1 on img */}
            <div className="hidden absolute top-[17%] right-[4.5%] md:flex justify-center items-center">
              {/* div 1 on img */}
              <div className="bg-[#070708] rounded-l-full p-3">
                <div className="flex space-x-2 border-2 right-0 border-black bg-[#070708] p-1 rounded-full">
                  <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-3">
                    <IoLogoFacebook className="text-white" />
                  </div>
                  <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-3">
                    <FaTwitter className="text-white" />
                  </div>
                  <div className="border-2 border-[#2F2F37] bg-[#2F2F37] rounded-full p-3">
                    <FaLinkedin className="text-white" />
                  </div>
                </div>
              </div>
            </div>
            {/* div 2 on img */}
            <div className="hidden absolute top-[28%] left-[4.5%] lg:w-[60%] md:w-[50%] md:flex justify-center items-center">
              <div className="bg-[#070708] text-left rounded-r-3xl p-5">
                <p className="lg:text-[18px] md:text-[13px]  uppercase  text-gray-500 lg:pt-5 md:pt-3">
                  Contact Me
                </p>
                <p className="uppercase lg:text-[35px] md:text-[20px] lg:pt-2 pt-1 font-semibold">
                  Get in Touch with Us
                </p>
                <p className=" text-gray-500 lg:text-[17px] md:text-[12px] lg:py-6 md:py-4">
                  "Got a vision you're eager to bring to life? Let's
                  collaborate! Whether it's revamping your brand's identity or
                  crafting stunning visuals, our team at Vayam is here to make
                  it happen. Reach out to us today to start the conversation and
                  turn your ideas into captivating designs. Let's create
                  something extraordinary together."
                </p>
              </div>
            </div>
            {/* div 3 on img */}
            <div className="hidden rounded-t-3xl bg-[#070708] w-[17%] text-left absolute bottom-[10%] right-[4.5%] md:flex justify-center items-center">
              <div className="p-5 pl-7">
                <p className="lg:text-md md:text-sm text-gray-500 ">
                  Scroll Down To Send me a Message
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-900" />
        {/* Message */}
        <div className="flex flex-col mx-[5%] lg:flex-row pt-[7%] md:pt-[5%]">
          <div className="w-full lg:w-[30%] mb-8 lg:mb-0">
            <p className="uppercase text-left lg:text-[30px]">Send a Message</p>
            <p className="text-left text-gray-500 pt-4 lg:text-[15px]">
              Have a specific inquiry or message for us? Please use the contact
              form below, and we'll get back to you promptly.
            </p>
          </div>
          <div className="w-full lg:w-[10%]"></div>
          <div className="w-full lg:w-[60%] flex flex-col lg:flex-row ml-0 lg:ml-10 ">
            <div className="w-full lg:w-[30%] text-left mb-8 lg:mb-0">
              <p className="text-[13px]">First Name</p>
              <p className="text-gray-500 pt-3 pb-2">First Name</p>
              <hr className="border-gray-700" />
              <p className="pt-4 text-[13px]">Email</p>
              <p className="text-gray-500 pt-3 pb-2">Email Address</p>
              <hr className="border-gray-700" />
              <p className="text-[13px] pt-6"> Your Message</p>
              <p className="uppercase text-gray-500 pt-3 pb-2">Message</p>
              <hr className="border-gray-700" />
            </div>

            <div className="w-full lg:w-[30%] text-left lg:ml-10">
              <p className="text-[13px]">Last Name</p>
              <p className="text-gray-500 pt-3 pb-2">Last Name</p>
              <hr className="border-gray-700" />
              <p className="pt-4 text-[13px]">Phone Number</p>
              <p className="text-gray-500 pt-3 pb-2">Phone Number</p>
              <hr className="border-gray-700" />
            </div>
          </div>
        </div>

        <div>
          <p className="text-3xl pb-[10%] text-white pt-10 cursor-pointer uppercase">
            {" "}
            send message
          </p>
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

export default Contact;
