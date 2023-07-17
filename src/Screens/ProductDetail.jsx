import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { AiFillStar } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import Footer from "../Components/Footer";
import { C_key, keycap } from "../assets/index";
import ImageGallery from "react-image-gallery";
import { useDispatch, useSelector } from "react-redux";
import { addproductaction } from "../Store/productslice";
import { Spinner } from "@chakra-ui/react";

const images = [
    {
        original:
            "https://cdn.shopify.com/s/files/1/1183/1328/products/iqunix-og80-wormhole-wireless-mechanical-keyboard-173513_900x.jpg?v=1686823794",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
        original:
            "https://cdn.shopify.com/s/files/1/1183/1328/products/iqunix-og80-wormhole-wireless-mechanical-keyboard-374122_900x.jpg?v=1686823794",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
        original:
            "https://cdn.shopify.com/s/files/1/1183/1328/products/iqunix-og80-wormhole-wireless-mechanical-keyboard-211354_900x.jpg?v=1686823794",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
];

const switchbtn = [
    {
        id: 1,
        title: "Gold Pink",
    },
    {
        id: 2,
        title: "ACE",
    },
    {
        id: 3,
        title: "Speed Silver",
    },
    {
        id: 4,
        title: "Cherry Red",
    },
    {
        id: 5,
        title: "Cherry Brown",
    },
    {
        id: 6,
        title: "Cherry Blue",
    },
];

const ProductDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [loader, setLoader] = useState(false);
    const [keystyle, setKeystyle] = useState("CHERRY STABS");
    const [backlit, setBacklit] = useState(true);
    const [Switch, setSwitch] = useState(1);
    const [quantity, setQuantity] = useState(1);

    const find_product = (id) => {
        const product = C_key.find((item) => item.id === parseInt(id));
        if (product === undefined) {
            return keycap.find((item) => item.id === id);
        }
        return product;
    };

    return (
        <div>
            <div className=" md:flex  sm:my-12 font-sans justify-around">
                <ImageGallery
                    items={images}
                    autoPlay
                    showPlayButton={false}
                    showThumbnails={false}
                    showFullscreenButton={false}
                    additionalClass="w-full "
                />
                <div className="justify-center  mx-9 ">
                    <h1 className="text-3xl font-bold mb-7  ">
                        {" "}
                        {find_product(id).title}
                    </h1>
                    <div className="text-xl flex justify-between">
                        <p className="text-gray-600">
                            {" "}
                            ${find_product(id).price}
                        </p>
                        <div className="flex items-center text-gray-600 ">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <p className="text-base  self-center">(211)</p>
                        </div>
                    </div>
                    <h2 className="text-base my-8">
                        Shipping calculated at checkout.
                    </h2>
                    <h2 className="text-base font-bold my-4">
                        LARGER KEYS STYLE: CHERRY STABS
                    </h2>
                    <div className="flex">
                        <button
                            className={twMerge(
                                keystyle === "CHERRY STABS"
                                    ? "bg-gray-800 text-white"
                                    : "bg-white text-black",
                                "border border-gray-400 rounded-3xl px-4 py-2 mr-4"
                            )}
                            onClick={() => setKeystyle("CHERRY STABS")}
                        >
                            CHERRY STABS
                        </button>
                        <button
                            className={twMerge(
                                keystyle === "Costar Stabs"
                                    ? "bg-gray-800 text-white"
                                    : "bg-white text-black",
                                "border border-gray-400 rounded-3xl px-4 py-2"
                            )}
                            onClick={() => setKeystyle("Costar Stabs")}
                        >
                            Costar Stabs
                        </button>
                    </div>
                    <h2 className="text-base font-bold my-4">
                        BACKLIT: RGB LED
                    </h2>
                    <div className="flex">
                        <button
                            className={twMerge(
                                backlit
                                    ? "bg-gray-800 text-white"
                                    : "bg-white text-black",
                                "border border-gray-400 rounded-3xl px-4 py-2 mr-4"
                            )}
                            onClick={() => setBacklit(true)}
                        >
                            RGB LED
                        </button>
                        <button
                            className={twMerge(
                                !backlit
                                    ? "bg-gray-800 text-white"
                                    : "bg-white text-black",
                                "border border-gray-400 rounded-3xl px-4 py-2"
                            )}
                            onClick={() => setBacklit(false)}
                        >
                            Non-backlit
                        </button>
                    </div>
                    <h2 className="text-base font-bold my-4">
                        SWITCH: GOLD PINK
                    </h2>
                    <div className="flex flex-wrap my-8">
                        {switchbtn.map((item) => (
                            <button
                                className={twMerge(
                                    item.id === Switch
                                        ? "bg-gray-800 text-white"
                                        : "bg-white text-black",
                                    "border border-gray-400 rounded-3xl px-4 py-2 mr-4 my-2"
                                )}
                                key={item.id}
                                onClick={() => setSwitch(item.id)}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>
                    <div className="flex">
                        <div className="flex  rounded-3xl border-black text-xl font-bold border">
                            <button
                                className="py-1  px-4 mr-4"
                                onClick={() => setQuantity(quantity - 1)}
                            >
                                -
                            </button>
                            <p className=" py-2 ">{quantity}</p>
                            <button
                                className=" px-4 py-1  ml-4"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                        <div>
                            <button
                                className="bg-black text-white hover:bg-orange-500 transition duration-300 rounded-3xl px-8 py-2 ml-4"
                                onClick={() => {
                                    setLoader(true);
                                    setTimeout(() => {
                                        dispatch(
                                            addproductaction({
                                                ...find_product(id),
                                                quantity: quantity,
                                            })
                                        );
                                        setLoader(false);
                                    }, 2000);
                                }}
                            >
                                {!loader ? "Add to cart" : <Spinner size={"md"} className="mx-5" />}
                            </button>
                        </div>
                    </div>
                    <button className="text-xl py-2 text-white hover:bg-blue-500 transiti duration-300  my-4 px-24 p rounded-3xl bg-gray-800">
                        Buy It Now
                    </button>
                    <p className="text-sm ">
                        The programmable firmware has been released for F97,
                        OG80, ZX75, A80, and L80 models.
                    </p>
                    <p className="text-sm flex my-6 ">
                        {" "}
                        <CiDeliveryTruck className="text-xl " />
                        Estimated ship date is Monday, 26th June . (Excluding
                        pre-order items)
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetail;
