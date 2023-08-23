import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { Button, Pie, SparkLine, Stacked } from "../components";
import { earningData, ecomPieChartData } from "../data/dummy";
import { SparklineAreaData } from "../data/dummy";
import { useActiveMenu } from "../contexts/ContextProvider";

const Ecommerce = () => {
  return (
    <div className="mt-24 ">
      <div className="flex flex-wrap  lg:flex-nowrap px-5">
        <div className=" flex flex-col items-start justify-center p-5 w-full h-72 bg-hero-pattern bg-no-repeat bg-center bg-cover bg-center">
          <h1 className="text-gray-400 font-bold capitalize z-10">earnings</h1>
          <h1 className="text-black font-bold text-2xl">$ 323,323.32</h1>
          <div className="mt-5">
            <Button
              bgColor="blue"
              color="white"
              size="md"
              text="Donwload"
              borderRadius="10px"
            />
          </div>
        </div>

        <div className="flex flex-wrap   gap-1 justify-center items-center ">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-400 dark:bg-secondary-dark-bg md:w-56 p-5 pt-9 rounded-2xl">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl">
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={` text-sm text-${item.pcColor} ml-2 `}>
                  {item.percentage}
                </span>
              </p>
              <p className=" text-gray-400 text-sm ">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-5  p-3 my-5 bg-white rounded-lg">
        <div className="flex flex-col  ">
          <div className="flex justify-between ">
            <h1 className="text-2xl font-bold">Revenue Updates</h1>

            <div className="flex items-center gap-4 ">
              <GoDotFill className="text-gray-400" />
              <h1 className="capitalize text-gray-400">expense</h1>

              <div className="flex items-center gap-2 ">
                <GoDotFill className="text-green-400" />
                <h1 className="capitalize text-green-400">Budget</h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center ">
            <div className="flex md:w-1/2 w-full flex-col border-r mx-5">
              <div className="">
                <div className="flex items-center mt-5">
                  <h1 className="text-3xl font-bold ">$85,235</h1>
                  <small className="bg-green-400 py-[3px] px-[6px] rounded-full mx-2 text-white mt-2">
                    34%
                  </small>
                </div>
                <div>
                  <h1 className="capitalize text-gray-400 my-2">budget</h1>
                </div>
              </div>

              <div>
                <div className="flex items-center mt-5">
                  <h1 className="text-3xl font-bold ">$69,122</h1>
                </div>
                <div>
                  <h1 className="capitalize text-gray-400 my-2">expense</h1>
                </div>
              </div>
              <div className="mt-5 mx-5">
                <SparkLine
                  currentColor="blue"
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="blue"
                />
              </div>
              <div className="my-5">
                <Button
                  color="white"
                  bgColor="blue"
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full mx-auto text-center">
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
