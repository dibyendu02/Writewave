import React from "react";
import person from "../images/person.jpg"

const TestimonialCard = ({comment,name,position}) => {
  return (
    <div className="h-full w-[25%] p-10 bg-white rounded-xl drop-shadow-lg">
        <div className="border-b mb-5 pb-5">
            <p className="leading-relaxed text-xl">
                {comment}
            </p>
        </div>
        <div className="flex justify-between">
            <div>
                <h1 className="font-bold">{name}</h1>
                <p className="text-sm text-slate-400">{position}</p>
            </div>
            <div className="">
                <img src={person} alt="person" className="h-14 w-14 object-cover rounded-full" />
            </div>
            
        </div>
      
      
    </div>
  );
};

export default TestimonialCard;
