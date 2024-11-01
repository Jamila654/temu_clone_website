"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdAssignmentReturn } from "react-icons/md";
import { RiExchangeDollarFill } from "react-icons/ri";
import { FaThumbsUp } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdCelebration } from "react-icons/md";
import { IoSearchCircle } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FaHourglassHalf } from "react-icons/fa";
import { RiCoupon2Line } from "react-icons/ri";
import { IoIosPricetag } from "react-icons/io";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";

export default function Home() {
  const [showReturn, setShowReturn] = useState(true);
  const [footerShow, setfooterShow] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowReturn((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setfooterShow((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-[family-name:var(--font-geist-sans)] min-h-screen">
      <div className="hidden navbar bg-black text-white sm:flex sm:items-center sm:justify-between px-20">
        <div className="first flex items-center gap-4 text-[#ACFFA3]">
          <div className="icon">
            <TbTruckDelivery className="size-10" />
          </div>
          <div className="free_shipping w-[200px] hover:underline cursor-pointer">
            <h1>Free shipping on all orders</h1>
            <h3>Limited-time offer</h3>
          </div>
        </div>

        <div className="sec">
          <div className="line h-8 w-[0.8px] bg-white rotate-180"></div>
        </div>

        <div className="third flex items-center gap-4 text-[#FFF8A7]">
          {showReturn ? (
            <>
              <div className="icon">
                <MdAssignmentReturn className="size-8" />
              </div>
              <div className="return w-[150px] hover:underline cursor-pointer transition-opacity duration-1000 ease-in-out">
                <h1>Free returns</h1>
                <h3>Up to 90 days*</h3>
              </div>
            </>
          ) : (
            <>
              <div className="icon">
                <RiExchangeDollarFill className="size-8" />
              </div>
              <div className="price_adjustment w-[200px] hover:underline cursor-pointer transition-opacity duration-1000 ease-in-out">
                <h1>Price adjustment</h1>
                <h3>Within 30 days</h3>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="header text-nowrap text-sm w-full px-5 md:p-5 lg:p-8 flex items-center justify-between h-[60px]">
        <div className="image">
          <Image src={"/icon.png"} alt="icon" width={50} height={50}></Image>
        </div>
        <div className="title"></div>
        <div className="first hidden font-bold lg:flex lg:items-center gap-4 text-sm">
          <div className="best_seller flex items-center gap-2">
            <FaThumbsUp />
            <p>Best Sellers</p>
          </div>
          <div className="5-star flex items-center">
            <MdOutlineStarPurple500 />
            <p>5-Star Rated</p>
          </div>
          <div className="celebrate flex items-center gap-1">
            <MdCelebration />
            <p>11.11</p>
          </div>
          <div className="new-arrivals">New Arrivals</div>
          <div className="categories">
            <select title="categories" name="categories" id="">
              <option value="categories">Categories</option>
            </select>
          </div>
        </div>
        <div className="small_screen flex items-center gap-2 md:hidden">
          <GiHamburgerMenu />
          <FaUser />
          <FaShoppingCart />
        </div>
        <div className="search relative cursor-pointer hover:opacity-75">
          <input
            title="search"
            type="text"
            placeholder="ladies clothing"
            className=" w-[200px] sm:w-[250px] lg:w-[300px] rounded-full p-2 border-2 border-black"
          />
          <IoSearchCircle className=" size-12 absolute top-[-5px] right-[-6px]" />
        </div>
        <div className="user hidden md:flex md:items-center gap-2 text-sm">
          <div className="icon">
            <FaUser className=" size-5" />
          </div>
          <div className="user">
            <h1>Sign in/Register</h1>
            <h3 className=" font-bold">Orders & Account</h3>
          </div>
        </div>
        <div className="support hidden md:flex md:items-center gap-1 text-sm">
          <div className="icon">
            <BiSupport className=" size-5" />
          </div>
          <div className="user">
            <h3 className=" font-bold">Support</h3>
          </div>
        </div>
        <div className="cart hidden md:flex">
          <FaShoppingCart className=" size-7" />
        </div>
      </div>
      <div className="line w-full h-[1px] bg-black mt-2"></div>
      <div className="products w-full p-5 flex flex-col gap-4">
        <div className="title md:text-2xl sm:text-xl text-lg lg:text-4xl font-bold">
          Result for "temu"
        </div>
        <div className="cards w-full">
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"/first.webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
              1pc/3pcs, Motivational Watter Bottles,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.351 <s>376</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[35px] border-2 border-[#FB7702] text-[#FB7702]">
                -6%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>29,957</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/ba7eaa32509947f94436225e2287679c.jpg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            1pc 2L/67.63oz Portable Flip Top Wat,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.877 <s>1570</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -44%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>29,957</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/open/2023-02-11/1676095995789-d6fb59f522fc4cd9a80855c9484bf872-goods.jpeg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            1/5/10pairs Men Women Socks Comfo,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.50 <s>62</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -19%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>97,161</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/fancy/a3ccb674-a187-44c1-bf7b-f650241d4221.jpg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            1pc Lalayuan Powerful Electric Milk Fr,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.431 <s>515</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[35px] border-2 border-[#FB7702] text-[#FB7702]">
                -16%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>9,153</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/fancy/6badbd43-d937-4b34-9096-1433b782747b.jpg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            Boys' Cozy Fleece-Lined Hoodie & Jo,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.898 <s>6038</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -86%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>29,957</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/c40f63ff8021b75928e25b3b9f89587e.jpg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            1pc 750ml/25.36oz Gradient Color W,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.744 <s>1221</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -39%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>13,773</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/fancy/ac5e8b25-ae2c-47b0-9989-90516cf10eac.jpg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
              Grinkwell 26oz Frosted Sports Water,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.546 <s>1439</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -61%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>29,957</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/fancy/19e45d00-95a1-4aee-8082-ecc26010a140.jpg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            BPA-Free Polycarbonate Water Bottle,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.510 <s>1560</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -61%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>58</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/7cc35e3a0e47afbff74dde9d663c7c4c.jpg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            1pc 300ml/750ml Gradient Color Leak,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.332 <s>751</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -52%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>9,399</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/fancy/0576616e-d8b3-4a8d-a130-3d16ecc232d7.jpg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            Boys' Cozy Fleece-Lined Hoodie & Jo,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.898 <s>6036</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -85%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>4.3k+sold</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/9fbdd61457b0ae681b318bf85d3028e2.jpg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            3-Pack Gradient Frosted Plastic Wate,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.1925 <s>3069</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -37%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>198</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/fancy/b31757b3-a33e-4e10-aeec-fe9b0d02343e.jpg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            5 Pairs Vintage 3D Textured Floral Em,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.213 <s>1809</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -88%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>2034</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/fancy/839d5b5b-5b88-46eb-b67f-1b1249555644.jpg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            Hydrating Gloss Lipstick in 3 Shades,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.198 <s>634</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -68%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>408</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/985a95bbeb128bfbc8b4e70c358f4a5f.jpg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            Stay Hydrated & Motivated With This,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.977 <s>1077</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -61%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>50,447</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/3c0448f233ec2c1894350eec7bb834d3.jpg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            1/2pcs Leaf Shape Soap Box Drain So,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.153 <s>433</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -64%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>938</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/fancy/1da3c86b-9167-4f74-9d59-e4cda14dc43a.jpg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            750ML Leak-Proof Sports Water Bottl,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.681 <s>1460</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -68%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>631</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/open/2024-09-10/1725975477849-99c4af47ea78408ba0a5d00482911ba2-goods.jpeg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            HOT Kuromi Melody Children'S Korea,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.466 <s>1963</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -77%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>3</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"/first.webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
              1pc/3pcs, Motivational Watter Bottles,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.351 <s>376</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[35px] border-2 border-[#FB7702] text-[#FB7702]">
                -6%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>29,957</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/1edc13d3c05dd7509e59f399cab414aa.jpg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            1 Pair Dangle Earrings +1 Pc Necklace,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.404 <s>2173</s> <span>8.8k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -81%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>490</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/fancy/9bcce070-c17d-418b-a9cd-e8bbb6e3f6a1.jpg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            Cute Cartoon Hair Bands For Kids, 10,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.192 <s>642</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -70%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>524</p>
            </div>
          </div>
        </div>
        <div className="explore w-full p-5 flex flex-col gap-4">
          <div className="title md:text-2xl sm:text-xl text-lg lg:text-4xl font-bold">
            Explore Your Interests
          </div>
          <div className="cards w-full">
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/fancy/d2501a2b-98ed-45f8-90eb-88c2fbdd96e3.jpg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            Men's Breathable Mesh Sneakers,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.4734 <s>10,255</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -53%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>29,957</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/fancy/656067da-7766-44af-ac65-f3f780f95240.jpg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            Chic Blue Nylon Crossbody Sling Bag,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.519 <s>1972</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -76%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>29,957</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/e845b50e5eb32f39667294111b0913d4.jpg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            Gradient Water Bottle With Time Mark,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.862 <s>1809</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -26%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>29</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/fancy/ae307412-54cd-497d-8ab2-9bfc2d282bcb.jpg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            4pcs Hair Claw Clip Set With Rhinest,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.201 <s>500</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -16%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>22,957</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/open/2024-05-12/1715534697055-1ff1c626d2ac42eab07a4f6da84ec352-goods.jpeg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            Aromatherapy Machine With USB Hu,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.452 <s>1553</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -66%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>29,957</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"/first.webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
              1pc/3pcs, Motivational Watter Bottles,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.351 <s>376</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[35px] border-2 border-[#FB7702] text-[#FB7702]">
                -6%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>29,957</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/fancy/05fa49b4-50df-4a69-a949-de725c7d720c.jpg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            Unisex Solid Color Slippers, Comforta,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.609 <s>3761</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -86%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>29,957</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/b9363bc29fe12b3209b65325bc344073.jpg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            Electroplated Flash Powder Super Ma,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.274 <s>1760</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -76%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>29,957</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"https://img.kwcdn.com/product/fancy/cff6756c-20de-401e-a1ee-45d9fafe8f60.jpg?imageView2/2/w/800/q/70/format/webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
            Portable Mini Faux Leather Jewelry B,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.351 <s>876</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[45px] border-2 border-[#FB7702] text-[#FB7702]">
                -56%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>29,957</p>
            </div>
          </div>
          <div className="card w-[260px] h-[360px] flex flex-col items-start justify-between">
            <Image
              src={"/first.webp"}
              alt="first"
              width={100}
              height={100}
              className="zoom w-full h-[50%]"
            ></Image>
            <p className=" text-sm text-nowrap">
              1pc/3pcs, Motivational Watter Bottles,...
            </p>
            <div className="price flex items-center gap-2">
              <h1>
                Rs.351 <s>376</s> <span>100k+sold</span>
              </h1>
              <div className="discount w-[35px] border-2 border-[#FB7702] text-[#FB7702]">
                -6%
              </div>
              <FaShoppingCart />
            </div>
            <div className="rating flex items-center gap-2 -translate-y-10">
              <Image
                src={"/rating.png"}
                alt="rating"
                width={100}
                height={100}
                className=" w-full h-full"
              ></Image>
              <p>29,957</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="footer w-full h-auto lg:h-[500px] p-5 bg-[#1E1E1E]">
        <div className="first hidden  w-full lg:flex lg:justify-between">
        <div className="company_info">
          <h1 className=" text-white font-bold text-2xl">Company Info</h1>
          <h3 className=" text-[#8F8F8F] hover:text-white cursor-pointer">About Temu</h3>
          <h3 className=" text-[#8F8F8F] hover:text-white cursor-pointer">Temu - Team Up, Price Down!</h3>
          <h3 className=" text-[#8F8F8F] hover:text-white cursor-pointer">Affiliate & Influencer: Earn Commission</h3>
          <h3 className=" text-[#8F8F8F] hover:text-white cursor-pointer">Contact us</h3>
          <h3 className=" text-[#8F8F8F] hover:text-white cursor-pointer">Careers</h3>
          <h3 className=" text-[#8F8F8F] hover:text-white cursor-pointer">Press</h3>
          <h3 className=" text-[#8F8F8F] hover:text-white cursor-pointer">Temu's Tree Planting Program</h3>
        </div>
        <div className="customer_info">
        <h1 className=" text-white font-bold text-2xl">Customer Info</h1>
        <h3 className=" text-[#8F8F8F] hover:text-white cursor-pointer">Return and refund policy</h3>
        <h3 className=" text-[#8F8F8F] hover:text-white cursor-pointer">Shipping info</h3>
        <h3 className=" text-[#8F8F8F] hover:text-white cursor-pointer">Intellectual property policy</h3>
        <h3 className=" text-[#8F8F8F] hover:text-white cursor-pointer">Report suspicious activity</h3>
        </div>
        <div className="help">
        <h1 className=" text-white font-bold text-2xl">Help</h1>
        <h3 className=" text-[#8F8F8F] hover:text-white cursor-pointer">Support center & FAQ</h3>
        <h3 className=" text-[#8F8F8F] hover:text-white cursor-pointer">Safety center</h3>
        <h3 className=" text-[#8F8F8F] hover:text-white cursor-pointer">Temu purchase protection</h3>
        <h3 className=" text-[#8F8F8F] hover:text-white cursor-pointer">Sitemap</h3>
        <h3 className=" text-[#8F8F8F] hover:text-white cursor-pointer">Partner with Temu</h3>
        </div>
        <div className="download flex flex-col gap-2">
        <h1 className=" text-white font-bold text-2xl">Download The Temu App</h1>
        {footerShow ? (
          <>
          <div className="del flex items-center gap-2 text-white">
          <TbTruckDelivery/>
          <h3>Track orders anytime</h3>
          </div>
          <div className="low flex items-center gap-2 text-white">
          <FaHourglassHalf />
          <h3>Low stock items alerts</h3>
          </div>
          <div className="del flex items-center gap-2 text-white">
          <RiCoupon2Line/>
          <h3>Coupons & offer alerts</h3>
          </div>
          </>
        ): (
          <>
          <div className="del flex items-center gap-2 text-white">
          <IoIosPricetag/>
          <h3>Price-drop alerts</h3>
          </div>
          <div className="del flex items-center gap-2 text-white">
          <RiSecurePaymentLine/>
          <h3>Faster & more secure checkout</h3>
          </div>
          <div className="del flex items-center gap-2 text-white">
          <BiSolidOffer/>
          <h3>Exclusive offers</h3>
          </div>
          </>
        )}
        <div className="download-app flex flex-col gap-2">
          <div className="app-store cursor-pointer hover:border-white w-[185px] flex items-center justify-center gap-2 border-2 rounded-full border-[#8F8F8F]">
            <div className="icon text-white"><FaApple className=" size-10"/></div>
            <div className="title"><span className=" text-[#8F8F8F]">Download on the <br /></span> <span className=" text-white text-center">App Store</span></div>
          </div>
          <div className="google-store cursor-pointer hover:border-white w-[180px] flex items-center justify-center gap-2 border-2 rounded-full border-[#8F8F8F]">
            <div className="icon text-white"><FaGooglePlay className=" size-10"/></div>
            <div className="title"><span className=" text-[#8F8F8F] ">Get it on <br /></span> <span className=" text-white text-center">Google Play</span></div>
          </div>
        </div>
        </div>
        <div className="connect flex flex-col gap-3">
        <h1 className=" text-white font-bold text-2xl">Connect With Temu</h1>
        <div className="first flex items-center justify-center gap-2 text-white">
          <FaInstagramSquare className=" size-10"/>
          <FaFacebook className=" size-10" />
          <RiTwitterXFill className=" size-10"/>
        </div>
        <div className="sec flex items-center justify-center gap-2 text-white">
          <FaTiktok className=" size-10"/>
          <CiYoutube className=" size-10" />
          <FaPinterest className=" size-10"/>
        </div>
        </div>
        </div>
        <div className="line w-full h-[1px] bg-[#8F8F8F] mt-28"></div>
        <div className="last w-full text-nowrap md:flex md:items-center md:justify-center gap-10 mt-10 text-[#8F8F8F]">
          <h1>© 2024 WhaleCo Inc.</h1>
          <h1 className=" underline">Terms of use</h1>
          <h1 className=" underline">Privacy policy</h1>
          <h1 className=" underline">Your privacy choices</h1>
          <h1 className=" underline">Ad Choices</h1>
        </div>
      </div>
    </div>
  );
}
