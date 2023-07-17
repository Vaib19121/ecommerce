import React from "react";
import { BsGem } from "react-icons/bs";
import { AiFillCaretRight } from "react-icons/ai";
import { key } from "../assets";

const seriesdata = [97, 80, 75, 66, 65, "ZX1"];

const Category = () => {
    return (
        <div className=" flex-col flex overflow-hidden  justify-center items-center my-10 uppercase">
            <h2 className="text-black flex justify-center items-center text-2xl font-bold">
                Categories
            </h2>
            <div className="flex my-3 text-gray-500">
                ---
                <BsGem className="flexjustify-center items-center text-2xl font-bold" />
                ---
            </div>
            <div className="grid md:grid-cols-6 mx-auto sm:grid-cols-3 gap-8">
                {seriesdata.map((item) => (
                    <div className="border-black border-2 sm:p-3 p-6 justify-center ">
                        <h1 className="text-8xl text-center sm:5xl">{item}</h1>
                        <div className="text-center justify-center flex ml-4 items-center">
                            SERIES <AiFillCaretRight />
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <div className="flex mx-16 sm:mx-0 justify-center content-center items-center  flex-wrap">
                    {key.map((item, index) => (
                        <img
                            key={index}
                            src={item}
                            className="md:w-1/4 sm:w-1/3 m-2 hover:scale-105 duration-500"
                            alt=""
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-center pointer-events-none items-center">
                <iframe
                    className="w-screen h-screen"
                    width="420"
                    height="345"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    src="https://www.youtube.com/embed/nlxMvHWmW8E?iv_load_policy=0&enablejsapi=1&disablekb=1&autoplay=1&controls=0&loop=1&playsinline=&modestbranding=0&autohide=1&branding=0&cc_load_policy=0&fs=0&quality=hd1080&wmode=transparent&mute=1&rel=0"
                    frameborder="0"
                    allowfullscreen="1"
                ></iframe>
            </div>
        </div>
    );
};

export default Category;
