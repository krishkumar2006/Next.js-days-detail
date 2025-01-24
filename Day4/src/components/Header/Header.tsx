import Image from "next/image"
import acc from "../../../public/Image/acc.png"
import heart from "../../../public/Image/heart.png"
import search from "../../../public/Image/search.png"
import cart from "../../../public/Image/cart.png"
import singleseater from "../../../public/Image/single seater.png"
import table from "../../../public/Image/table.png"
import sofa from "../../../public/Image/sofa.png"
import img1 from "../../../public/Image/img1.png"
import img2 from "../../../public/Image/img2.png"
import img3 from "../../../public/Image/img3.png"
import img4 from "../../../public/Image/img4.png"
import asgaard from "../../../public/Image/asgaard.png"
import allinone from "../../../public/Image/allinone.png"
import Link from "next/link"




const Header = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="flex w-full h-[100px] bg-[#FBEBB5] justify-end items-center border-black border-2">
        <ul className="flex justify-between item-center space-x-4 md:space-x-8 text-sm md:text-base">
          <Link href="/"> Home</Link>
          <Link href="/shop"> Shop</Link>
          <Link href="/about"> about</Link>
          <Link href="/contact"> contact</Link>
        </ul>
        <div className="flex space-x-4 md:space-x-8 mx-8">
         <Link href="/account"> <Image src={acc} alt="Account" className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" /></Link>
          <Link href=""><Image src={heart} alt="Likes" className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" /></Link>
         <Link href=""> <Image src={search} alt="Search" className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" /></Link>
         <Link href="/cart"> <Image src={cart} alt="Cart" className="w-<[20px] h-[20px] md:w-[30px] md:h-[30px]" /></Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[#FBEBB5] w-full h-auto md:h-[900px] flex flex-col md:flex-row items-center">
        {/* Left Text */}
        <div className="text-center md:text-left md:absolute md:left-24 top-1/2 transform md:-translate-y-1/2 px-8">
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-snug">
            Rocket single <br /> seater
          </h1>
          <a href="#" className="mt-4 inline-block text-lg font-medium text-gray-700 hover:underline">
            Shop Now
          </a>
        </div>
        {/* Right Image */}
      <div className="flex justify-end"> <div className="mt-8 md:mt-0 flex justify-end ">
          <Image src={singleseater} alt="Rocket Single Seater" className="rounded-lg shadow-sm flex justify-end" />
        </div>
      </div></div>

      {/* Side Table Section */}
      <div className="flex flex-wrap justify-center gap-8 p-4">
        {/* Side Table 1 */}
        <div className="flex flex-col items-center w-[90%] md:w-[45%] lg:w-[30%]">
          <Image src={table} alt="Side Table" className="w-full h-[200px] md:h-[300px] object-cover" />
          <h1 className="text-xl font-bold text-gray-900 mt-4">Side table</h1>
          <button className="text-sm text-gray-700 underline mt-2">View More</button>
        </div>
        {/* Side Table 2 */}
        <div className="flex flex-col items-center w-[90%] md:w-[45%] lg:w-[30%]">
          <Image src={sofa} alt="Sofa" className="w-full h-[200px] md:h-[300px] object-cover" />
          <h1 className="text-xl font-bold text-gray-900 mt-4">Side table</h1>
          <button className="text-sm text-gray-700 underline mt-2">View More</button>
        </div>
      </div>

      {/* Top Picks Section */}
      <div className="w-full p-4">
        <div className="text-center font-semibold text-2xl md:text-4xl mb-4">Top pick for you</div>
        <h1 className="text-center text-sm md:text-lg px-4">
          Find a bright and ideal fit to suit your taste with our guest selection of suspension, floor, and lights.
        </h1>
        <div className="bg-slate-300 flex flex-wrap justify-center gap-4 p-5">
          {/* Product Cards */}
          {[img1, img2, img3, img4].map((img, index) => (
            <div key={index} className="flex flex-col items-center w-[90%] md:w-[45%] lg:w-[20%]">
              <Image src={img} alt={`img${index + 1}`} className="w-full h-[200px] md:h-[300px] object-cover" />
              <h1 className="mt-4 font-semibold text-lg">Product Name</h1>
              <h1 className="text-3xl font-bold mt-2">Rs.25,000.00</h1>
              <hr className="w-full border-t-2 border-gray-400 mt-4" />
            </div>
          ))}
        </div>
      </div>

      {/* New Arrival Section */}
      <div className="w-full flex flex-wrap md:flex-nowrap items-center">
        <div className="w-full md:w-[50%]">
          <Image src={asgaard} alt="Asgaard Sofa" className="w-full h-[300px] md:h-full object-cover" />
        </div>
        <div className="w-full md:w-[50%] p-8 text-center md:text-left">
          <h1 className="text-xl md:text-2xl">New Arrival</h1>
          <h1 className="text-2xl md:text-4xl font-semibold">Asgaard Sofa</h1>
          <button className="mt-4 px-6 py-2 border-2 border-black hover:bg-black hover:text-white text-black">
            Order Now
          </button>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="bg-slate-400 text-center p-8">
        <h1 className="text-2xl md:text-4xl">Our Instagram</h1>
        <p>Follow our store for more</p>
        <button className="mt-4 px-4 py-2 border-2 border-white bg-slate-50 rounded-lg hover:border-black">
          Follow us
        </button>
      </div>
    </div>
  );
};


export default Header
