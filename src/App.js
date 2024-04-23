import { useState } from "react";
import "./App.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="App min-h-screen bg-[#070708] text-white">
      <div className="p-2">
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
        <div className="flex flex-col md:flex-row w-full p-4 mt-10 md:p-7 mb-8">
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
          <div className="lg:w-[70%] md:w-[60%] w-[50%] pl-[%]  ">
            <p className="text-left text-sm md:text-md lg:text-xl font-medium text-gray-400 mb-2">
              SERVICES
            </p>
            <p className="text-left text-white text-md md:text-2xl lg:text-4xl font-semibold">
              OUR SERVICES
            </p>
          </div>
          <div className="flex justify-end md:w-3/10 w-1/2 my-auto pr-[5%] m-4">
            <div className="flex mt-1 border-2 border-gray-900 lg:mx-5 mx-2 rounded-3xl ">
              <div className="bg-zinc-800 p-3 m-1 rounded-full">
                <FaChevronLeft />
              </div>
              <div className="bg-zinc-800 p-3 m-1 rounded-full">
                <FaChevronRight />
              </div>
            </div>
            <div className="flex mt-2 bg-zinc-800 p-2 px-3 rounded-md">
              <p className="text-xs md:text-[15px] pt-2">View All Services</p>
              <FaArrowRightLong className=" md:mt-[7px] md:text-[19px] ml-2" />
            </div>
          </div>
        </div>
        <hr className="border-gray-900 mt-8" />
        {/* photo grid */}
        <div className="flex flex-col items-center my-5 ">
          <div className="flex  bg-zinc-800 md:pt-3 md:px-3 rounded-t-3xl">
            <img
              className="h-[20mm] w-[20mm] m-1 md:h-[40mm] md:w-[50mm] md:m-2 lg:h-[85mm] lg:w-[85mm] lg:m-3 rounded-md md:rounded-3xl"
              src="https://s3-alpha-sig.figma.com/img/b128/db12/63e72cc6709754d8b9b8e023adab5a77?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hfZapXVMlsbPMQc76sj2nadvWrORSQImuaF35w02giEU8Jc2Y8IM3wWcforPlkiJ8agGqOkfUUUmpIQhdOMMwLQUsh6XKKBwFZ5RZW9xXPsuelZytQ2sYYIQrIqp-Sm41Usoey-Zv7HnKZnIRgoNZM3k-qzsYVqjEyYXJMo06xAkkVe0G1o5~8NiTA4Dav5DrVB4o0JkWxxj8u9KRrKgYMmsCSQOZ-2G45JrB8Kw-Ki92duCGB9zz7fUhiKPkSP5goI7QjLWGVeAPPPYHP5WQ6KhY88KzhfXb7SX6RRBHPLuuuJBcIn0Iff3O3OD4Qwf~d9QDvQoRW63B3EWZbYARg__"
            />
            <img
              className="h-[20mm] w-[30mm] m-1 md:h-[40mm] md:w-[70mm] md:m-2 lg:h-[85mm] lg:w-[100mm] lg:m-3 rounded-md md:rounded-3xl"
              src="https://s3-alpha-sig.figma.com/img/c494/bbfd/18004bbbd2c95a943ff7b35834094082?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZokrqrDR89OhclDPzTAfBi7fGKHS4dczhoZCpPKfh~7Mu7khZJtoW2HWe0p450XFeWu6djr7Vvksvkz4jb1WyKKKeF9UaDewHqqxXlMyH10sQKebfU8TUpapJfE~UaE3RQKuiB15XuDQAO4XM5cx2922Z2ROAHBePSxnnkRCAJPvAzSER1fj99UvaA3MnnlVYpdk2HgzFMNqG0IFAQeYRNAABCifdu9sS8MR~GUTBYBIxLCImIilSSg-CLOdGknmHlmDrx9CZ3BU4O-qh1qwpUKInD8BnBwl6sn5NfqrhKdDTrsccNEzyDXgVJOMNSZiViG6vQ44B87BpfIAhiwLiw__"
            />
            <img
              className="h-[20mm] w-[20mm] m-1 md:h-[40mm] md:w-[50mm] md:m-2 lg:h-[85mm] lg:w-[85mm] lg:m-3 rounded-md md:rounded-3xl"
              src="https://s3-alpha-sig.figma.com/img/e65c/c093/53fc992f5f93511a061329d902be7c4a?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eJ7s8hpyjiNP9Xygw3EEs7GjuvL5MnQuri8NlB9ye6IxkxABxTHSpHnKl2a6cTMO1zAbIVQgu47fMSBqPyTWlyHwwcEBTKMbae9u1DorKmmbIKxLjqY2jFQYaJoyNgGrG3j0CpXtN9bIowO5ZhvgoJhonty52bDnvsaTyOULIyCvH4z1VaZMrV4xeGlqDBPGLtmW6iiShkg1kCJKcXjNdJ4EfEzy60O7TfYC3cIdmikpMIK9D2CP~YpO~LoTcAX-XyIsyKLoxmmRGQV~0h813TnvFSMB1mCBG6nJAAqeiqcmOzoEfqA5Xw~eBMXY65OmE0EUPefVbx3qo7Sj3qYXDg__"
            />
          </div>
          <div className="flex  bg-zinc-800 md:pb-3 md:px-3 rounded-b-3xl">
            <img
              className="h-[20mm] w-[15mm] m-1 md:h-[40mm] md:w-[45mm] md:m-2 lg:h-[85mm] lg:w-[60mm] lg:m-3 rounded-md md:rounded-3xl"
              src="https://s3-alpha-sig.figma.com/img/1cbb/253c/3801e71f1419720fe20c6f96c610c6e9?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xg585tNQJxy5~Id0dW4eSlAOHiS9KmVvZSk-EGxr~z-bWsxgLRfUCb43CoyE2uB5JZtEPfp7ZJGnvB4VPzdAqdPcl28JjYQiw1dpshBQkPtgGFUc3zwaniVOsafORMEAYrSkXL3aww9xrgdSl8rQBQLQlqNqM39naIF276CX0jc~diJmOvhy2utr1em9~t~TkJrgx42wXrsM7vTxxIfbhS70TTRvsBl6NlS78zcZWZEAXtPaLb~Ffqg7VgYSDSufYZm45i6xfFcuK0BaopKPOj3528Yis0RcAFbDMef-rnDNXcY4YMbE12a~2IQ2Fl9eGzGfFzNvgYzNxWmZEqhLKQ__"
            />
            <img
              className="h-[20mm] w-[40mm] m-1 md:h-[40mm] md:w-[80mm] md:m-2 lg:h-[85mm] lg:w-[150mm] lg:m-3 rounded-md md:rounded-3xl"
              src="https://s3-alpha-sig.figma.com/img/f2ee/117f/bf6447bc028d3afc309e3b7b6e42ce32?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DWGAhheHaE5EosRzryq2l6a-r5MivxE5zIxROdIceKG~abZgRX5CASZk7nt7CJ-7vhFYCRcqO0zXy4a3eiNW0q0hoPxAjlTpXjwvftj0aX9LM0Sup0u76QNPkMc2ijtN7LeaDO2-7Nzao5qjnWlTS6A1UxKL9K8j3sdXAIS4w7qhdoMtcEIVKEc6zFEQPWJkFYIo0gdjOcm4YM6rPDbhp4Ew55hMstuJjDRlOrLfoN43Qe0xKvyvuSg4Nff~umkUZzeo302B9OkxiC3Uv1r8lO03-5voioaeQRP0fsyzQguda9IKzdBdOCptGKoZmny4HAMBGSHWIrDW8EVklz3vSg__"
            />
            <img
              className="h-[20mm] w-[15mm] m-1 md:h-[40mm] md:w-[45mm] md:m-2 lg:h-[85mm] lg:w-[60mm] lg:m-3 rounded-md md:rounded-3xl"
              src="https://s3-alpha-sig.figma.com/img/0730/43e4/87f10a69565e16d02e86647660dd27d7?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L5VyLNg122AaWVLPHrWnJPWk7fgt9L4lR~Eey8w7wK8W1KHdUgfVZcqRElBD~029IObcyrvc~4JwC8D2B4JSFaL9-0nrTJEOKQUIGiihHLf1zvw9R-Vo7t3-FRaRpRiTSbSoAcwzFO0FRlDPTbHaGZAItCftWvuxcPqkLzSZ31XEETP~pHZRsPiDIREiH0PSkdSdoy6f35mqZbHH4Itp9ZLFlS2FnmWlPCOuR8LaOh02dmwPikptZKGbY6UbtN5pjLD~1had-xo8kpdsjwH6gtrrodLmFVxj9Cdgi6tcqMYY0FuSbUCSmNOPWOi8z9ZJ8K8f742oA6-5PXJSLpaJpg__"
            />
          </div>
        </div>
        {/* total reviews */}
        <div className="ml-[5%] mt-[5%] my-10">
          <div className="mb-2">
            <p className="text-left text-[8px] md:text-lg font-semibold text-gray-400">
              TESTIMONIALS
            </p>
            <p className="text-left text-md md:text-3xl lg:text-4xl font-semibold text-white">
              WHAT MY CLIENTS SAY
            </p>
          </div>
          <div className="flex w-[100%] mt-[2%]">
            <div className="lg:w-[70%] md:w-[60%] w-[50%]  ">
              <p className="text-left text-sm md:text-md  font-medium text-gray-400 mb-2">
                Total Reviews
              </p>
              <p className="text-left text-white text-sm md:text-xl font-semibold">
                323
              </p>
            </div>
            <div className="flex justify-end md:w-3/10 w-1/2 my-auto pr-[5%] m-4">
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
            </div>
          </div>
        </div>
        <hr className="border-gray-900" />
        <div className="mt-10 flex flex-wrap justify-center px-2">
  {/* box1 */}
  <div className="w-full md:w-[45%] lg:w-[30%] xl:w-[30%] px-2 mb-8 md:mb-0">
    <div className="bg-[#18181B] p-4 rounded-lg h-full">
      <div className="flex items-center justify-between">
        <div className="text-left">
          <p className="text-white font-semibold">Moodale</p>
          <p className="text-gray-400">Coimbatore, India</p>
        </div>
        <div className="flex space-x-2">
          <div><IoLogoFacebook className="text-white" /></div>
          <div><FaTwitter className="text-white" /></div>
          <div><FaLinkedin className="text-white" /></div>
        </div>
      </div>
      <div className="flex items-center mt-2">
        {[...Array(5)].map((_, index) => (
          <div key={index}><FaStar className="fill-yellow-500" /></div>
        ))}
      </div>
      <p className="text-white text-left mt-2">
        "Bravo to Vayam for their excellent graphic design! They exceeded all expectations. Highly recommended!"
      </p>
    </div>
  </div>
  {/* box2 */}
  <div className="w-full md:w-[45%] lg:w-[30%] xl:w-[30%] px-2 mb-8 md:mb-0">
    <div className="bg-[#18181B] p-4 rounded-lg h-full">
      <div className="flex items-center justify-between">
        <div className="text-left">
          <p className="text-white font-semibold">Drinkcart</p>
          <p className="text-gray-400">Lucknow, India</p>
        </div>
        <div className="flex space-x-2">
          <div><IoLogoFacebook className="text-white" /></div>
          <div><FaTwitter className="text-white" /></div>
          <div><FaLinkedin className="text-white" /></div>
        </div>
      </div>
      <div className="flex items-center mt-2">
        {[...Array(5)].map((_, index) => (
          <div key={index}><FaStar className="fill-yellow-500" /></div>
        ))}
      </div>
      <p className="text-white mt-2 text-left">
        "An outstanding achievement! Vayam earns a resounding five-star rating for their exceptional UI/UX work."
      </p>
    </div>
  </div>
  {/* box3 */}
  <div className="w-full md:w-[45%] lg:w-[30%] xl:w-[30%] px-2 mb-8 md:mb-0">
    <div className="bg-[#18181B] p-4 rounded-lg h-full">
      <div className="flex items-center justify-between">
        <div className="text-left">
          <p className="text-white font-semibold">Aaien: The careers</p>
          <p className="text-gray-400">USA, California</p>
        </div>
        <div className="flex space-x-2">
          <div><IoLogoFacebook className="text-white" /></div>
          <div><FaTwitter className="text-white" /></div>
          <div><FaLinkedin className="text-white" /></div>
        </div>
      </div>
      <div className="flex items-center mt-2">
        {[...Array(5)].map((_, index) => (
          <div key={index}><FaStar className="fill-yellow-500" /></div>
        ))}
      </div>
      <p className="text-white mt-2 text-left">
        "Vayam's photography skillfully captured the essence of our wedding day. Their editing brings our cherished memories to life.!"
      </p>
    </div>
  </div>
</div>


      </div>
    </div>
  );
}

export default App;
