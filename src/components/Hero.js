import React from 'react'
import line from "../images/line.png";

const Hero = () => {
  return (
    <div className="h-[80vh]  flex justify-center pt-40">
      <div className="w-1/2 text-center">
        <h1 className="font-bold text-[50px]">
          It's never too late, Get started with{" "}
          <span className="text-blue-600">writing Blogs</span>.
        </h1>
        <img src={line} alt="tick" className="w-1/4 absolute right-80 bottom-60 " />
        <p className="text-lg">
          where imagination takes flight through captivating stories,
          thought-provoking insights, and a vibrant community united by the love
          of words. Join us in exploring the endless horizons that language
          offers, as we embark on a journey of creativity and connection.
        </p>
      </div>

      
    </div>
  )
}

export default Hero