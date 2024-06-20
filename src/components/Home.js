import { useState } from "react";
// import "./App.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
// import { FaArrowRightLong } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { HiMiniEye } from "react-icons/hi2";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className=" min-h-screen bg-[#070708] text-white">
      <div className="p-2">
        {/* navbar */}
        <div className="p-2">
          <div className="border md:mx-16 lg:mx-[24%] rounded-full  md:px-10 md:py-3 py-2 border-gray-500 m-1 md:m-6">
            <div className="flex justify-between text-[10px] md:text-[16px] lg:text[24px] ">
              <Link to="/"
                className={`menu-item md:w-20 p-2 md:px-4 mx-1 cursor-pointer ${
                  selectedItem === 0
                    ? "bg-white text-black rounded-full md:-mx-4 md:-my-1 md:pt-3 font-semibold"
                    : "bg-white text-black rounded-full md:-mx-4 md:-my-1 md:pt-3 font-semibold"
                }`}
                onClick={() => handleClick(0)}
              >
                Home
              </Link>
              <Link to="/About"
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
              <Link to='/Service'
                className={`menu-item md:w-20 p-2 md:px-4 cursor-pointer ${
                  selectedItem === 3
                    ? "bg-white text-black rounded-full md:-mx-4 md:-my-1 md:pt-3 font-semibold"
                    : ""
                }`}
                onClick={() => handleClick(3)}
              >
                Service
              </Link>
              <Link to='/Contact'
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
        {/* Logo */}
        <div className="flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/dbenkbws8/image/upload/v1713886372/vayam_png_white_ojcpo1.png"
            alt="VAYAM Screenshot"
            className="scale-75 md:scale-100 "
          />
        </div>
        {/* LINE */}
        <div className="image-container flex justify-center">
          <img
            src="https://res.cloudinary.com/dbenkbws8/image/upload/v1713866016/Screenshot_2024-04-23_152315_ereikd.png"
            alt="VAYAM Screenshot"
            className="w-full"
          />
        </div>
        {/* first div */}
        <hr className="border-gray-900  mx-[10%]" />
        <div className="flex w-[100%] md:py-12 py-7">
          <div className="w-[50%]">
            <p className="lg:text-lg md:text-sm text-[6px] pl-[10%] lg:pl-[20%] text-left font-medium text-gray-600">
              DESIGN COMPANY
            </p>
            <div className="lg:text-7xl md:text-6xl text-2xl pl-[10%] lg:pl-[20%] text-left font-semibold text-gray-300">
              VAYAM
            </div>
          </div>
          <div className="w-[50%]">
            <p className="lg:text-5xl md:text-4xl text-xl md:pl-[10%] pl-[5%]  lg:pl-[32%] text-left font-medium text-white">
              LET'S
            </p>
            <p className="lg:text-5xl md:text-4xl text-xl md:pl-[10%] pl-[5%]  lg:pl-[32%] text-left font-medium text-white">
              WORK TOGETHER
            </p>
          </div>
        </div>
        <hr className="border-gray-900 mx-[10%]" />
        {/* image text div */}
        <div className="flex flex-col md:flex-row w-full p-4 mt-10 md:p-7 mb-8">
          <div className="w-full md:w-1/2 p-2 md:p-4">
            <img
              className="scale-75"
              src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1716454021/jijcrenaonkynjkg0bnb.png"
              alt="VAYAM Screenshot"
            />
          </div>
          <div className="w-full md:w-1/2 p-2 md:p-4 lg:mr-10 border-gray-900 border-2 rounded-2xl md:my-auto">
            <div className="text-left text-lg flex  md:text-xl lg:text-3xl font-medium text-gray-200 mb-4">
              <img
                className="px-2 md:scale-90 scale-75 pt-0 lg:pt-2 md:pt-1 "
                src="https://res.cloudinary.com/dbenkbws8/image/upload/v1713974953/Soft_Star_j3e13v.png"
              />
              <p className="pt-2 md:mt-0 "> Introduction</p>
            </div>
            <p className="text-left text-sm md:text-[11px] lg:[18px]  lg:text-base leading-relaxed text-gray-400">
              Welcome to Vayam, your premier destination for all things
              creative! At Vayam, we specialize in a wide range of services to
              bring your vision to life. From captivating graphic design and
              sleek UI/UX solutions to flawless photo and video editing,
              intricate 3D modeling, and mesmerizing digital art, we are your
              one-stop-shop for all your creative needs. With a talented team of
              experts and a passion for innovation, we are dedicated to
              delivering exceptional results that exceed your expectations.
              Whether you're a budding entrepreneur, an established business, or
              an individual looking to make a statement, trust Vayam to
              transform your ideas into stunning realities. Let's embark on a
              journey of creativity together!
            </p>
          </div>
        </div>
        {/* SERVICES */}
        <div className="flex w-[100%] ">
          <div className="lg:w-[70%] md:w-[60%] w-[40%] pl-[10%]  ">
            <p className="text-left text-[14px] md:text-md lg:text-xl font-medium text-gray-400 mb-2">
              SERVICES
            </p>
            <p className="text-left text-white text-[16px] md:text-2xl lg:text-4xl font-semibold">
              OUR SERVICES
            </p>
          </div>
          <div className="flex scale-[60%] md:scale-100 justify-end md:w-3/10 w-[60%] my-auto pr-[5%] mt-2 md:mt-0  md:m-4">
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
        <div className="md:hidden">
          {/* graphic */}
          <div>
            <div className="mx-[6%] mt-5 relative">
              <img
                className="rounded-3xl w-[95%] mx-auto"
                src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1717660483/chicken_khmvyg.png"
                alt="your image"
                style={{ height: "200px", width: "950%", objectFit: "cover" }}
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
                style={{ height: "200px", width: "950%", objectFit: "cover" }}
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
          {/* photography
           */}
          <div className="pt-[7%]">
            <div className="mx-[6%] mt-5 relative">
              <img
                className="rounded-3xl object-scale-down mx-auto"
                src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1717660483/car_bm6ad4.png"
                alt="your image"
                style={{ height: "200px", width: "950%", objectFit: "cover" }}
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
        <hr className="border-gray-900 mt-8 mx-[10%]" />
        {/* photo grid */}
        <div className="hidden md:flex flex-col items-center my-5 ">
          <div className="flex  bg-zinc-800 md:pt-3 md:px-3 rounded-t-3xl">
        
            <Link to="/GDService" className="relative group cursor-pointer">
              <img
                className="h-[20mm] w-[20mm] m-1 md:h-[40mm] md:w-[50mm] md:m-2 lg:h-[85mm] lg:w-[85mm] lg:m-3 rounded-md md:rounded-3xl"
                src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1718525541/burger_fyg3qr.png"
              />
              <div className="h-[20mm] w-[20mm] m-1 md:h-[40mm] md:w-[50mm] md:m-2 lg:h-[85mm] lg:w-[85mm] lg:m-3 rounded-md md:rounded-3xl absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 flex justify-center items-end pb-10 transition duration-300">
                <p className="text-white opacity-0 group-hover:opacity-100 font-aileron font-thin tracking-widest uppercase text-[29px]">
                  Graphic Designer
                </p>
              </div>
            </Link>

            <Link to="/UXService" className="relative group cursor-pointer">
              <img
                className="h-[20mm] w-[30mm] m-1 md:h-[40mm] md:w-[70mm] md:m-2 lg:h-[85mm] lg:w-[100mm] lg:m-3 rounded-md md:rounded-3xl"
                src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1717660483/shoe_aa7jty.png"
              />
              <div className="h-[20mm] w-[30mm] m-1 md:h-[40mm] md:w-[70mm] md:m-2 lg:h-[85mm] lg:w-[100mm] lg:m-3 rounded-md md:rounded-3xl absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 flex justify-center items-end pb-10 transition duration-300">
                <p className="text-white opacity-0 group-hover:opacity-100 font-aileron font-thin tracking-widest uppercase text-[29px]">
                  UI/UX DESIGN
                </p>
              </div>
            </Link>
            <Link to="/PVService" className="relative group cursor-pointer">
              <img
                className="h-[20mm] w-[20mm] m-1 md:h-[40mm] md:w-[50mm] md:m-2 lg:h-[85mm] lg:w-[85mm] lg:m-3 rounded-md md:rounded-3xl"
                src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1717662528/bike_mopq0o.jpg"
              />
              <div className="h-[20mm] w-[20mm] m-1 md:h-[40mm] md:w-[50mm] md:m-2 lg:h-[85mm] lg:w-[85mm] lg:m-3 rounded-md md:rounded-3xl absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 flex justify-center items-end pb-10 transition duration-300">
                <p className="text-white opacity-0 group-hover:opacity-100 font-aileron font-thin tracking-widest uppercase text-[29px]">
                  Photography
                </p>
              </div>
            </Link>
          </div>

          <div className="flex  bg-zinc-800 md:pb-3 md:px-3 rounded-b-3xl">
            <div className="relative group cursor-pointer">
              <img
                className="h-[20mm] w-[15mm] m-1 md:h-[40mm] md:w-[45mm] md:m-2 lg:h-[85mm] lg:w-[60mm] lg:m-3 rounded-md md:rounded-3xl"
                src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1718894351/castle_xuhxss.png"
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
                src="https://res.cloudinary.com/dyf6jb0yu/image/upload/v1718894205/Scar_side0_aavdvm.jpg"
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
        <div className="mx-[10%] mt-[5%] my-10">
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
        <hr className="border-gray-900  md:mx-[10%]" />
        <div className="mt-10 mx-[2%] md:mx-[10%] grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <p className="text-white  text-left ">
                "It’s A Happy Collaboration With This Team As In They Listen To
                Your Requirements With Utmost Patience And Deliver A Very Well
                Curated Piece Of Content."
              </p>
                  

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
              <p className="text-white text-left">
                "An outstanding achievement! Vayam earns a resounding five-star
                rating for their exceptional UI/UX work."
              </p>
            </div>
          </div>
                {/*box3*/} 
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
                  <p className="text-white font-semibold">TTPOC</p>
                  <p className="text-gray-400 text-sm">Hyderabad</p>
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
              <p className="text-white text-left">
                "Their creative team has consistently delivered stunning graphic
                designs, photography, and videography that perfectly capture
                our brand and event essence."
              </p>
            </div>
          </div>
        </div>

        {/* background */}
           <div className="mt-[5%] h-[20mm] md:h-[65mm] flex justify-end mr-[4%] md:mr-[10%]">
          
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
              <p className="cursor-pointer text-[#AFB0B6]  text-[4mm]  px-5 pb-3 text-left">
                HOME
              </p>
              <Link to="/About" className="cursor-pointer text-left text-[4mm] px-5 py-2 underline underline-offset-8">
                ABOUT ME
              </Link>
              <p className="cursor-pointer text-left text-[4mm] px-5 py-2 underline underline-offset-8">
                MY WORKS
              </p>
              <p className="cursor-pointer text-left text-[4mm] px-5 py-2 underline underline-offset-8">
                TESTIMONIALS
              </p>
            </div>
            <div className="flex flex-col w-[50%] pt-5">
              <p className="cursor-pointer text-[#AFB0B6] px-5 pb-3 text-[4mm] text-right">
                CLIENTS
              </p>
              <p className="cursor-pointer text-right py-2 pl-2 px-5 text-[4mm] underline underline-offset-8">
                MOODALE
              </p>
              <p className="cursor-pointer text-right text-[4mm] px-5 py-2 pl-2 underline underline-offset-8">
                DRINKCART
              </p>
              <p className="cursor-pointer text-right pt-2 pl-2 text-[4mm] px-5 ">
                AAIEN: THE
              </p>
              <p className="cursor-pointer text-right pl-2 text-[4mm] px-5 underline underline-offset-8">
                CAREERS
              </p>
          <p className="cursor-pointer text-right text-[4mm] px-5 py-2 pl-2 underline underline-offset-8">
                TTPOC
              </p>
            </div>
          </div>
          <div className="flex flex-row w-[100%] px-2 pt-6 ">
            <div className="flex flex-col w-[50%] pt-5">
              <p className="text-[#AFB0B6] px-5 pb-3 text-[4mm] text-left">
                PORTFOLIO
              </p>
              <Link to="/GDService" className="cursor-pointer text-left py-2 text-[3.5mm] px-5 underline underline-offset-8">
                GRAPHIC DESIGN
              </Link>
              <Link to="/UXService" className="cursor-pointer text-left py-2 text-[4mm] px-5 underline underline-offset-8">
                UI/UX DESIGN
              </Link>
              <Link to="/PVService" className="cursor-pointer text-left py-2 text-[4mm] px-5 underline underline-offset-8">
                PHOTOGRAPHY
              </Link>
              <p className="cursor-pointer text-left py-2 text-[4mm] px-5 underline underline-offset-8">
                PHOTO EDIT
              </p>
              <Link to="/PVService" className="cursor-pointer text-left py-2 text-[4mm] px-5 underline underline-offset-8">
                VIDEOGRAPHY
              </Link>
              <p className="cursor-pointer text-left py-2 text-[4mm] px-5 underline underline-offset-8">
                VIDEO EDIT
              </p>
            </div>
            <div className="flex flex-col w-[50%] pt-5">
              <p className="cursor-pointer text-[#AFB0B6] pb-3 text-[4mm]  px-5 text-right">
                SERVICES
              </p>
              <Link to="/GDService" className="cursor-pointer text-right py-2 text-[3.5mm] px-5 underline underline-offset-8">
                GRAPHIC DESIGN
              </Link>
              <Link to="/UXService" className="cursor-pointer text-right py-2 text-[4mm] px-5 underline underline-offset-8">
                UI/UX DESIGN
              </Link>
              <Link to="/PVService" className="cursor-pointer text-right py-2 text-[4mm] px-5 underline underline-offset-8">
                PHOTOGRAPHY
              </Link>
              <p className="cursor-pointer text-right py-2 text-[4mm] px-5 underline underline-offset-8 uppercase">
                Editing
              </p>
              <p className="cursor-pointer text-right py-2 text-[4mm] px-5 underline underline-offset-8 uppercase">
                digital art
              </p>
              <p className="cursor-pointer text-right py-2 text-[4mm] px-5 underline underline-offset-8 uppercase">
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
                <p className="cursor-pointer text-[#AFB0B6] text-[3mm]  px-5 pb-3 text-left">
                  HOME
                </p>
                <p className="cursor-pointer text-left text-[3.1mm] px-5 py-2 underline underline-offset-8">
                  ABOUT ME
                </p>
                <p className="cursor-pointer text-left text-[3.1mm] px-5 py-2 underline underline-offset-8">
                  MY WORKS
                </p>
                <p className="cursor-pointer text-left text-[3.1mm] px-5 py-2 underline underline-offset-8">
                  TESTIMONIALS
                </p>
              </div>
              <div>
                <p className="cursor-pointer text-[#AFB0B6] px-5 pb-3 text-[3mm] text-left">
                  CLIENTS
                </p>
                <p className="cursor-pointer text-left py-2 pl-2 text-[3.1mm] underline underline-offset-8">
                  MOODALE
                </p>
                <p className="cursor-pointer text-left text-[3.1mm] px-5 py-2 pl-2 underline underline-offset-8">
                  DRINKCART
                </p>
                <p className="cursor-pointer text-left pt-2 pl-2 text-[3.1mm] px-5 ">
                  AAIEN: THE
                </p>
                <p className="cursor-pointer text-left pl-2 text-[3.1mm] px-5 underline underline-offset-8">
                  CAREERS
                </p>
               <p className="cursor-pointer text-left text-[3.1mm] px-5 py-2 pl-2 underline underline-offset-8">
                  TTPOC
                </p>
              </div>
              <div>
                <p className="cursor-pointer text-[#AFB0B6] px-5 pb-3 text-[3mm] text-left">
                  PORTFOLIO
                </p>
                <p className="cursor-pointer text-left py-2 text-[3mm] px-5 underline underline-offset-8">
                  GRAPHIC DESIGN
                </p>
                <p className="cursor-pointer text-left py-2 text-[3.1mm] px-5 underline underline-offset-8">
                  UI/UX DESIGN
                </p>
                <p className="cursor-pointer text-left py-2 text-[3.1mm] px-5 underline underline-offset-8">
                  PHOTOGRAPHY
                </p>
                <p className="cursor-pointer text-left py-2 text-[3.1mm] px-5 underline underline-offset-8">
                  PHOTO EDIT
                </p>
                <p className="cursor-pointer text-left py-2 text-[3.1mm] px-5 underline underline-offset-8">
                  VIDEOGRAPHY
                </p>
                <p className="cursor-pointer text-left py-2 text-[3.1mm] px-5 underline underline-offset-8">
                  VIDEO EDIT
                </p>
              </div>
              <div>
                <p className="cursor-pointer text-[#AFB0B6] pb-3 text-[3mm]  px-5 text-left">
                  SERVICES
                </p>
                <p className="cursor-pointer text-left py-2 lg:text-[3mm] md:text-[2.5mm] px-5 underline underline-offset-8">
                  GRAPHIC DESIGN
                </p>
                <p className="cursor-pointer text-left py-2 text-[3.1mm] px-5 underline underline-offset-8">
                  UI/UX DESIGN
                </p>
                <p className="cursor-pointer text-left py-2 text-[3.1mm] px-5 underline underline-offset-8">
                  PHOTOGRAPHY
                </p>
                <p className="cursor-pointer text-left py-2 text-[3.1mm] px-5 underline underline-offset-8 uppercase">
                  Editing
                </p>
                <p className="cursor-pointer text-left py-2 text-[3.1mm] px-5 underline underline-offset-8 uppercase">
                  digital art
                </p>
                <p className="cursor-pointer text-left py-2 text-[3mm] px-5 underline underline-offset-8 uppercase">
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
}

export default Home;
