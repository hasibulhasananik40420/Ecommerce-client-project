"use client";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Container from "./Container";
import { LuUsers } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className=" bg-white border border-b">
      <Container>
        <div className="flex justify-between items-center h-[12vh]">
          <div>logo</div>

          <div>
            <div className="relative text-gray-600">
              <input
                type="search"
                name="serch"
                placeholder="Search"
                className="bg-white h-12 px-5 pr-10 rounded-full border-[1.5px] text-[18px] w-[400px] focus:outline-none"
              />
              <button type="submit" className="absolute right-4 top-3">
                <CiSearch className="size-6" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer">
              <CiHeart className="size-10 hover:text-[#0169C8] duration-300" />
              <span className="absolute top-[-3px] left-6 size-5 bg-[#0169C8] rounded-full  flex justify-center items-center">
                <p className="text-[14px] font-semibold text-white">0</p>
              </span>
            </div>

            <Link href="/cart" className="relative cursor-pointer">
              <CiShoppingCart className="size-10 hover:text-[#0169C8] duration-300" />
              <span className="absolute top-[-3px] left-6 size-5 bg-[#0169C8] rounded-full  flex justify-center items-center">
                <p className="text-[14px] font-semibold text-white">0</p>
              </span>
            </Link>

            <Link href="/login">
              <LuUsers className="size-7 cursor-pointer hover:text-[#0169C8]" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
