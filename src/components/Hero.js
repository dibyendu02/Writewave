import React from 'react'
import line from "../images/line.png";

const Hero = () => {
  return (
    <div className="h-[100vh]  flex justify-center pt-40 md:pt-60">
      <div className="md:w-1/2 text-center px-2">
        <h1 className="font-bold text-[50px] mb-10">
          It's never too late, Get started with{" "}
          <span className="text-blue-600">writing Blogs</span>.
        </h1>
        <img src={line} alt="tick" className="w-1/2 absolute right-10 bottom-96  md:right-80 md:bottom-60 md:w-1/4 " />
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