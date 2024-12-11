import React from "react";

export const Button = ({label, onClick}) =>{
    return (
        <>
        <button onClick={onClick} className="bg-black text-white font-md text-2xl font-bold w-[200px] p-[10px] mt-[10px]">
            {label}
        </button>
        </>
    )
}