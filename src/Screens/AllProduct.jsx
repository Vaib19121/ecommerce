import React from "react";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import {C_key} from "../assets/index";

const AllProduct = () => {
    return (
        <div>
            <div>
                <div className="bg-black">
                    <h1 className="text-white text-center py-6 text-2xl">All Mechanical Keyboards</h1>
                </div>
                <div className="flex sm:mx-0 mb-40 justify-center content-center items-center self-center flex-wrap">
                    {C_key.map((item,index) => (
                        <Card item={item} key={index} />
                    ))}

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AllProduct;
