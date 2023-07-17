import React, { useEffect, useState } from "react";
import {
    AiOutlineClose,
    AiOutlineMenu,
    AiOutlineShoppingCart,
    AiOutlineDelete,
} from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { useSelector, useDispatch } from "react-redux";
import {
    addproductaction,
    removeitem,
    removeproductaction,
} from "../Store/productslice";
import { loginAction, logoutAction, registerAction } from "../Store/authslice";
import Stripe from "stripe";

const stripe = new Stripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Navbar = () => {
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.product);
    const authData = useSelector((state) => state.auth);
    const [showMenu, setShowMenu] = useState(false);
    const [showcart, setShowcart] = useState(false);
    const [showloginform, setShowloginform] = useState(false);
    const [showregisterform, setShowregisterform] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [registeremail, setRegisteremail] = useState("");
    const [registerpassword, setRegisterpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");

    const handleNav = () => {
        setShowMenu(!showMenu);
    };

    const handlelogin = () => {
        setShowloginform(!showloginform);
    };

    const handleregister = () => {
        setShowloginform(!showloginform);
        setShowregisterform(!showregisterform);
    };

    const payment_obj = cartData.products.map((item) => {
        return {
            price_data: {
                currency: "INR",
                product_data: {
                    name: item.title,
                    images: [process.env.REACT_APP_PUBLIC_URL + item.img],
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
        };
    });

    const handleCheckout = async () => {
        const response = await stripe.checkout.sessions.create({
            line_items: payment_obj,
            payment_method_types: ["card"],
            mode: "payment",
            success_url: `${process.env.REACT_APP_PUBLIC_URL}/success`,
            cancel_url: `${process.env.REACT_APP_PUBLIC_URL}/failed`,
        });

        window.location.href = response.url;
    };

    const handleLoginform = () => {
        if (email === "" || password === "") {
            return alert("Please fill all the fields");
        } else if (!email.includes("@")) {
            return alert("Please enter a valid email");
        }

        dispatch(loginAction(email, password));
        setEmail("");
        setPassword("");
    };

    const handleRegisterform = () => {
        if (registeremail === "" || registerpassword === "") {
            return alert("Please fill all the fields");
        } else if (registerpassword.length < 6) {
            return alert("Password must be atleast 6 characters long");
        } else if (!registeremail.includes("@")) {
            return alert("Please enter a valid email");
        } else if (registerpassword !== confirmpassword) {
            return alert("Password and confirm password must be same");
        }
        dispatch(registerAction(registeremail, registerpassword));
        setRegisteremail("");
        setRegisterpassword("");
        setconfirmpassword("");
    };

    const handlelogout = () => {
        dispatch(logoutAction());
    };

    const handleCart = () => {
        setShowcart(!showcart);
    };
    return (
        <div>
            <div className="flex justify-center h-24  mx-auto px-4  items-center">
                <div className="w-full font-bold">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="acer"
                            className="w-44 object-contain"
                        />
                    </Link>
                </div>
                <ul className="hidden md:flex absolute justify-center items-center  uppercase">
                    <li className="m-4">
                        <Link to="/allproducts">Keyboards</Link>
                    </li>
                    <li className="m-4">
                        <Link to="/allkeycaps">Keycaps</Link>
                    </li>
                    <li className="m-4">
                        <Link to="/about">Super</Link>
                    </li>
                    <li className="m-4">
                        <Link to="/contact">Join Discord</Link>
                    </li>
                </ul>
                <div className="flex justify-center items-center ">
                    <div className="border md:flex hidden  px-2 border-gray-300 rounded-2xl">
                        <input
                            type="text"
                            placeholder="Search"
                            className="outline-none  text-base"
                        />
                        <BsSearch size={15} className="md:m-2 " />
                    </div>
                    <BsSearch size={20} className="mx-4 md:hidden" />
                    <IoPersonOutline
                        size={20}
                        className="mx-4"
                        onClick={handlelogin}
                    />
                    <AiOutlineShoppingCart
                        size={20}
                        className="mx-4"
                        onClick={handleCart}
                    />
                </div>
                <div
                    className={
                        showcart
                            ? "fixed right-0  z-30   top-0 md:w-[25%] sm:w-[75%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500"
                            : "fixed right-[-110%] top-0 w-[25%]  ease-in-out duration-700"
                    }
                >
                    <div className="flex mx-2 my-2 py-4  border-b-2">
                        <h1 className="w-full text-lg px-2 ">SHOPPING CART</h1>
                        <div onClick={handleCart} className="">
                            <AiOutlineClose size={24} />
                        </div>
                    </div>
                    <div className="flex flex-col overflow-auto h-[75%] overflow-x-hidden">
                        {cartData.products.map((item) => {
                            if (item.quantity === 0) {
                                return null;
                            }
                            return (
                                <div className="flex my-5 justify-center px-4 ">
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="w-1/3 "
                                    />
                                    <div className="justify-around mx-4">
                                        <h1 className="text-base font-bold">
                                            Keychron K2
                                        </h1>
                                        <h1 className="text-sm text-gray-400">
                                            Cherry Stabs / RGB LED /
                                        </h1>
                                        <h1 className="text-sm text-gray-400">
                                            Gold Pink
                                        </h1>
                                        <h1 className="text-sm text-gray-400">
                                            ${item.price}
                                        </h1>
                                        <div className="flex  rounded-3xl border-black text-lg font-bold border">
                                            <button
                                                className=" px-4 mr-4"
                                                onClick={() =>
                                                    dispatch(removeitem(item))
                                                }
                                            >
                                                -
                                            </button>
                                            <p className="px-1">
                                                {item.quantity}
                                            </p>
                                            <button
                                                className=" px-4 ml-4"
                                                onClick={() =>
                                                    dispatch(
                                                        addproductaction(item)
                                                    )
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <AiOutlineDelete
                                            className="text-red-500 self-center  hover:scale-125 transform transition duration-300 ease-in-out"
                                            size={24}
                                            onClick={() =>
                                                dispatch(
                                                    removeproductaction(item)
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="absolute bg-white shadow-[0_0px_10px_0px_rgba(129,129,129,0.2)] bottom-0 w-full  justify-center items-center py-2">
                        <div className="flex  justify-between items-center">
                            <h1 className="text-lg mx-5  font-bold">
                                Subtotal:
                            </h1>
                            <h1 className="text-lg mx-5">${cartData.total}</h1>
                        </div>
                        <div className="flex bg-[#f7f7f7] rounded-2xl mx-1 justify-center items-center">
                            <button className="  text-black  py-2 ">
                                View Cart
                            </button>
                        </div>
                        <div className="flex bg-black rounded-2xl mx-1 justify-center items-center">
                            <button
                                className="  text-white  py-2  "
                                onClick={handleCheckout}
                            >
                                Check Out
                            </button>
                        </div>
                        <p className="ml-4 text-sm">
                            Taxes, shipping and discounts codes calculated at
                            checkout
                        </p>
                    </div>
                </div>
                <div onClick={handleNav} className="block md:hidden mx-4">
                    {showMenu ? (
                        <AiOutlineClose size={24} />
                    ) : (
                        <AiOutlineMenu size={24} />
                    )}
                </div>
                <div
                    className={
                        showMenu
                            ? "fixed left-0 md:hidden z-20   top-0 w-[60%] h-full border-r-gray-900 bg-white ease-in-out duration-500"
                            : "fixed left-[-110%]"
                    }
                >
                    <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
                        <img src={logo} alt="acer" className="w-1/2" />
                    </h1>
                    <ul className="pt-4 uppercase">
                        <li className="p-4 xs:border border-gray-600 ">
                            <Link to="/allproducts">Keyboards</Link>
                        </li>
                        <li className="p-4  border-gray-600">
                            <Link to="/allkeycaps">Keycaps</Link>
                        </li>
                        <li className="p-4 border-gray-600">
                            <Link to="/gallery">Super</Link>
                        </li>
                        <li className="p-4  border-gray-600">
                            <Link to="/about">Join Discord</Link>
                        </li>
                        <li className="p-4 ">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div
                    className={
                        showloginform
                            ? "fixed right-0  z-40   top-0 md:w-[25%] sm:w-[75%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500"
                            : "fixed right-[-110%] top-0 w-[25%]  ease-in-out duration-700"
                    }
                >
                    <div className="flex mx-2 my-2 py-4  border-b-2">
                        <h1 className="w-full text-lg px-2 ">Login</h1>
                        <div onClick={handlelogin} className="cursor-pointer">
                            <AiOutlineClose
                                size={24}
                                className="hover:rotate-[360deg] transform-gpu duration-700 ease-in-out"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col overflow-auto h-[75%] overflow-x-hidden">
                        <div className="flex flex-col justify-center items-center">
                            <input
                                className="border-b-2 border-black w-3/4 my-4 py-2 px-2"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder="Email"
                            />
                            <input
                                className="border-b-2 border-black w-3/4 my-4 py-2 px-2"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                placeholder="Password"
                            />
                            <button
                                className="bg-black text-white w-3/4 my-4 py-2 px-2"
                                onClick={handleLoginform}
                            >
                                Signin
                            </button>
                            <div className="text-sm flex">
                                <p>New customer?</p>
                                <p
                                    className="cursor-pointer font-semibold mx-1"
                                    onClick={handleregister}
                                >
                                    Create Account
                                </p>
                            </div>
                            <div className="text-sm my-2 flex">
                                <p>Lost password?</p>
                                <p className="cursor-pointer font-semibold mx-1">
                                    Recover Password
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        showregisterform
                            ? "fixed right-0  z-40   top-0 md:w-[25%] sm:w-[75%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500"
                            : "fixed right-[-110%] top-0 w-[25%]  ease-in-out duration-700"
                    }
                >
                    <div className="flex mx-2 my-2 py-4  border-b-2">
                        <h1 className="w-full text-lg px-2 ">REGISTER</h1>
                        <div
                            onClick={() => setShowregisterform(false)}
                            className="cursor-pointer"
                        >
                            <AiOutlineClose
                                size={24}
                                className="hover:rotate-[360deg] transform-gpu duration-700 ease-in-out"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col overflow-auto h-[75%] overflow-x-hidden">
                        <div className="flex flex-col justify-center items-center">
                            <input
                                className="border-b-2 border-black w-3/4 my-4 py-2 px-2"
                                type="email"
                                onChange={(e) =>
                                    setRegisteremail(e.target.value)
                                }
                                value={registeremail}
                                placeholder="Email"
                            />
                            <input
                                className="border-b-2 border-black w-3/4 my-4 py-2 px-2"
                                type="password"
                                onChange={(e) =>
                                    setRegisterpassword(e.target.value)
                                }
                                value={registerpassword}
                                placeholder="Password"
                            />
                            <input
                                className="border-b-2 border-black w-3/4 my-4 py-2 px-2"
                                type="password"
                                onChange={(e) =>
                                    setconfirmpassword(e.target.value)
                                }
                                value={confirmpassword}
                                placeholder="Confirm Password"
                            />
                            <button
                                className="bg-black text-white w-3/4 my-4 py-2 px-2"
                                onClick={handleRegisterform}
                            >
                                Register
                            </button>
                            <div className="text-sm flex">
                                <p>Already have an account?</p>
                                <p className="cursor-pointer font-semibold mx-1">
                                    Login here
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
