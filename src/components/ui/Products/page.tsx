import Image from "next/image"
import products from '@/assets/product-img-2.jpg'
import { CiHeart, CiShoppingCart } from "react-icons/ci"
import { Stars } from "@/utils/Stars"
import { HiOutlineViewfinderCircle } from "react-icons/hi2"
import { HiOutlineRefresh } from "react-icons/hi"
import Container from "@/components/shared/Container"
import Link from "next/link"
const Products = () => {
  return (
    <Container>
         <div
    className="mt-10 border rounded md:w-[300px] w-full h-full bg-white relative group overflow-hidden"
    style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 15px 64px 0px" }}
  >
    <div className="px-[30px] mt-2 w-full">

      <div className="progress-title flex justify-between">
        <p className="text-xs text-black font-[500]  leading-6">
          Products Available
        </p>
        <span className="text-sm text-black font-[600] leading-6">
          {/* {availableProducts} */} 20
        </span>
      </div>
      <div className="progress w-full h-[5px] rounded-[22px] bg-gray-200 relative overflow-hidden">
        <div
          className="h-full absolute left-0 top-0 bg-[#dd2831]"
          style={{ width: `${50}%` }}
        ></div>
      </div>
    </div>
    <div className=" w-full h-[250px] relative cursor-pointer">
      {/* <Link href={`/products/${product.id}`}> */}
      <Image
        src={products}
        alt="Product Image"

      />
      {/* </Link> */}
    </div>
    <div className="px-[15px] pb-[30px] relative">
      <div className="absolute w-full h-10 px-[15px] left-0 top-44 group-hover:top-[85px] transition-all duration-300 ease-in-out">
        <button className=" bg-blue-500 text-white w-full py-2 font-semibold rounded-sm ">
          <div className="flex items-center justify-center space-x-3">
          <CiShoppingCart className="size-6" />
            <span>Add To Cart</span>
          </div>
        </button>

      </div>
      <div className="mb-3">
        <Stars
          count={5}
          value={3}
          position="horizontal"
          activeColor="text-orange-600 w-4"
          color="text-gray-200 w-4"
        ></Stars>
      </div>
      
        <p className="font-medium mb-2 text-[16px] font-600 text-black leading-[24px] line-clamp-2 hover:text-blue-600">
          Xoggle aute et pariatur adipisicing nostrud et excepteur
        </p>
   
      <p className="">
        <span className=" text-[#dd2831]  font-bold text-[18px]">
          $699.99
        </span>
        <span className=" main-price text-[#848484] line-through text-[18px] ml-2 font-semibold">
          $949.99
        </span>

      </p>
    </div>
    <div className="flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-20 transition-all duration-300 ease-in-out">
      <span className="w-10 h-10 flex justify-center items-center bg-gray-200 cursor-pointer rounded">
      <HiOutlineViewfinderCircle className="size-6" />
      </span>
      <span className="w-10 h-10 flex justify-center items-center bg-gray-200 cursor-pointer rounded">
      <CiHeart className="size-6"/>

      </span>
      <span className="w-10 h-10 flex justify-center items-center bg-gray-200 cursor-pointer rounded">
      <HiOutlineRefresh className="size-6"/>

      </span>
    </div>
  </div>
    </Container>
  )
}

export default Products