import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Card = ({item}) => {

    return (
        <Link to={"/productdetail/"+item.id} className="flex md:w-1/4 flex-col justify-center m-4 text-center  hover:scale-105 transform transition duration-500 ease-in-out" >
                <img src={item.img} className="md:w-2/3 sm:w-1/3 m-2 self-center " />
                <div className={twMerge(item.discount ? 'flex' : 'hidden' ,"w-60 self-center  border-red-600 justify-center  border border-dashed rounded-lg",)}>
                    <p className="text-red-500 font-bold">$20 </p>
                    <p className="mx-2">OFF Code |</p>
                    <p className="text-red-500 font-bold">SAVE20</p>
                </div>  
                <p >{item.title}</p>
                <p className="text-gray-600" >from $ {item.price}</p>
        </Link>
    );
};

export default Card;
