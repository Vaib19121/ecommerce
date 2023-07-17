import React from "react";
import logo from "../assets/logo_white.avif";
import { CgFacebook } from "react-icons/cg";
import {
    AiOutlineTwitter,
    AiOutlineInstagram,
    AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
    return (
        <div className="bg-[#222222]">
            <div>
                <div className="flex flex-row items-center justify-center py-10">
                    <div className="w-1/3">
                        <img src={logo} alt="" className="md:w-1/3 sm:w-1/2" />
                        <p className="text-white text-sm my-4">
                            Delivering incredible aesthetics and an unbridled
                            typing experience.
                        </p>
                        <div className="flex">
                            <CgFacebook className="text-white text-xl mx-2" />
                            <AiOutlineTwitter className="text-white text-xl mx-2" />
                            <AiOutlineInstagram className="text-white text-xl mx-2" />
                            <AiFillYoutube className="text-white text-xl mx-2" />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-col mx-4 justify-center">
                        <p className="text-white md:text-sm sm:text-xs">
                            Subscribe to get special offers, free giveaways, and
                            product launch information. Get $10 off on your
                            first order after subscribing.
                        </p>
                        <input type="text" placeholder="Enter your email" className="bg-[#333333]   text-white rounded-3xl border placeholder-white border-white w-3/4  py-2 px-4 my-4" />
                    </div>
                </div>
                <div className="md:col-span-2 md:w-2/3 md:mt-6 md:ml-32 md:text-lg text-white sm:text-sm flex justify-around">
                    <div>
                        <h6 className="font-normal my-4">
                            About Us
                        </h6>
                        <ul  >
                            <li className="py-2 ">
                                Brand Story
                            </li>
                            <li className="py-2">FAQs</li>
                            <li className="py-2">
                                Join Discord
                            </li>
                            <li className="py-2">
                                Contact Us
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-medium  my-4">
                            Site Policies
                        </h6>
                        <ul  >
                            <li className="py-2 ">
                                Shipping Policy
                            </li>
                            <li className="py-2 ">
                                Warranty Policy
                            </li>
                            <li className="py-2 ">
                                Return & Refund Policy
                            </li>
                            <li className="py-2 ">
                                Privacy Policy
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-medium my-4">
                            Product Guide
                        </h6>
                        <ul  >
                            <li className="py-2">
                                F97 Series
                            </li>
                            <li className="py-2 ">
                                80 Series
                            </li>
                            <li className="py-2 ">
                                ZX75 Series
                            </li>
                            <li className="py-2 ">
                                Q66 Series
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-[#8d8787] mx-16 text-center py-6 items-center">
                    <p>Copyright © 2023 IQUNIX all rights reserved. Powered by IQUNIX</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
