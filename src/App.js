import { useState } from "react";
import "./App.css";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="App min-h-screen bg-[#070708] text-white">
      <div className="p-5">
        <div className="border md:mx-16 lg:mx-[24%] rounded-full  md:px-10 md:py-3 py-2 border-gray-500 m-1 md:m-6">
          <div className="flex justify-between text-[10px] md:text-[16px] lg:text[24px] ">
            <div
              className={`menu-item md:w-20 p-2 md:px-4 mx-1 cursor-pointer ${
                selectedItem === 0
                  ? "bg-white text-black rounded-full md:-mx-4 md:-my-1 md:pt-3 font-semibold"
                  : ""
              }`}
              onClick={() => handleClick(0)}
            >
              Home
            </div>
            <div
              className={`menu-item md:w-20 p-2 md:px-4 cursor-pointer ${
                selectedItem === 1
                  ? "bg-white text-black rounded-full md:-mx-4 md:-my-1 md:pt-3 font-semibold"
                  : ""
              }`}
              onClick={() => handleClick(1)}
            >
              About
            </div>
            <div className="menu-item md:w-20 p-2 cursor-pointer">VAYAM</div>
            <div
              className={`menu-item md:w-20 p-2 md:px-4 cursor-pointer ${
                selectedItem === 3
                  ? "bg-white text-black rounded-full md:-mx-4 md:-my-1 md:pt-3 font-semibold"
                  : ""
              }`}
              onClick={() => handleClick(3)}
            >
              Service
            </div>
            <div
              className={`menu-item md:w-20 p-2 md:px-4 mx-1 cursor-pointer ${
                selectedItem === 4
                  ? "bg-white text-black rounded-full md:-mx-4 md:-my-1 md:pt-3 font-semibold"
                  : ""
              }`}
              onClick={() => handleClick(4)}
            >
              Contact
            </div>
          </div>
        </div>
      </div>
      {/* LINE */}
      <div className="image-container flex justify-center my-7">
        <img
          src="https://res.cloudinary.com/dbenkbws8/image/upload/v1713866016/Screenshot_2024-04-23_152315_ereikd.png"
          alt="VAYAM Screenshot"
          className="w-full"
        />
      </div>
      {/* first div */}
      <hr className="border-gray-900" />
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
      <hr className="border-gray-900" />
      {/* image text div */}
      <div className="flex flex-col md:flex-row w-full p-4 mt-10 md:p-7">
        <div className="w-full md:w-1/2 p-2 md:p-4">
          <img
            className="max-w-full  mx-auto lg:w-[80%] md:[100%] w-[80%] lg:ml-[15%]"
            src="https://s3-alpha-sig.figma.com/img/365b/0ff5/53cb5d0964d1cd5d5eb4aca41448832a?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PJ9VOop4vFSYRue1uUDPpNyPIXBDpN2ck4PfkfyQRrxQX61BLZjm-vu57kbOadFEz8x39AjFv7pqo76APfsz9UwKnCyvStAtMzGqZc5Z9irfkTznfO2xzGI9nV814~p1SWM9RREeWWZubB6-z5S9dwaPTWsZ5BAYQCQP6ZmxMDjbfSnvzi-LYVD~nLIScRJz3iomnH-EKUCblqpAWsBudTsORq0vd4tEin4Qf1Y8P1gE9anRFd4kQ2K27PpnmNys1EWJFAHUh9g8i7GBQ9YzC5k7fh5Vxwfbh-yR28r6y7Y4aELdVjXaHQq3p~PT-F448fWPNw02bmaoEvPIxbM1Fg__"
            alt="VAYAM Screenshot"
          />
        </div>
        <div className="w-full md:w-1/2 p-2 md:p-4 lg:mr-10 border-gray-900 border-2 rounded-2xl md:my-auto">
          <p className="text-left text-lg md:text-xl lg:text-3xl font-medium text-gray-200 mb-4">
            Introduction
          </p>
          <p className="text-left text-sm md:text-[11px] lg:[18px]  lg:text-base leading-relaxed text-gray-400">
            Welcome to Vayam, your premier destination for all things creative!
            At Vayam, we specialize in a wide range of services to bring your
            vision to life. From captivating graphic design and sleek UI/UX
            solutions to flawless photo and video editing, intricate 3D
            modeling, and mesmerizing digital art, we are your one-stop-shop for
            all your creative needs. With a talented team of experts and a
            passion for innovation, we are dedicated to delivering exceptional
            results that exceed your expectations. Whether you're a budding
            entrepreneur, an established business, or an individual looking to
            make a statement, trust Vayam to transform your ideas into stunning
            realities. Let's embark on a journey of creativity together!
          </p>
        </div>
      </div>
      {/* SERVICES */}
      <div className="flex w-[100%]">
        <div className="w-[70%] pl-[10%]">
          <p className="text-left text-md md:text-xl lg:text-xl font-medium text-gray-400 mb-2">SERVICES</p>
          <p className="text-left text-white text-5xl md:text-3xl lg:text-4xl font-semibold">OUR SERVICES</p>
        </div>
        <div className="w-[30%] flex">
              <div></div>
              <div></div>
              <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
