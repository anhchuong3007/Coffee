import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import HomeCard from "../component/HomeCard";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../component/FilterProduct";
import AllProduct from "../component/AllProduct";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListCoffee = productData.filter(
    (el) => el.category === "coffee",
    []
  );
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            {/* <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              className="h-7"
            /> */}
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            GUTA CAFE VN <span className="text-red-600 text-">No.1</span>
          </h2>
          <p className="py-3 text-base ">
            Guta Cafe là một chuỗi cửa hàng Cafe tiện lợi hàng đầu tại Việt Nam.
            Với hơn 100 cửa hàng tại TpHCM và các tỉnh, Guta Cafe nỗ lực mang
            đến ly cafe ngon cùng trải nghiệm tiện lợi cho mọi người. Dừng lại
            bên đường và chọn một ly cafe Guta đã trở thành thói quen của nhiều
            người. Đó là động lực để chúng tôi cố gắng giữ trọn hương vị Cafe
            Việt Nam cùng với cách phục vụ nhanh và tiện lợi ở mỗi cửa hàng Guta
            Cafe1. Guta Cafe sở hữu phong cách phục vụ nhanh, tiện lợi và mức
            giá hợp lý. Menu của Guta bao gồm nước uống (bao gồm 5 loại cà phê
            và 8 loại nước uống phổ thông khác) cùng với đồ ăn sáng. Hãy ghé
            thăm Guta Cafe để trải nghiệm ly cafe chuẩn Gu mỗi ngày! 🍵
          </p>
          <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md">
            Order Now
          </button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return (
                  <HomeCard key={index + "loading"} loading={"Loading..."} />
                );
              })}
        </div>
      </div>

      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">GUTA</h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {/**  */}
          {homeProductCartListCoffee[0]
            ? homeProductCartListCoffee.map((el) => {
                return (
                  <CardFeature
                    key={el._id + "coffee"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el, index) => (
                <CardFeature loading="Loading..." key={index + "cartLoading"} />
              ))}
        </div>
      </div>

      <AllProduct heading={"Your Product"} />
    </div>
  );
};

export default Home;
