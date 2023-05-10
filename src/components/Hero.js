import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] ">
      <img
        alt="/"
        src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="w-full h-full object-cover"
      />

      <div className="max-w-[1140px] m-auto ">
        <div className="absolute top-[40%]   w-full md:-[50%] max-w-[600px] h-full text-white/90 flex flex-col p-2">
          <h1 className="font-bold text-4xl ">100 DYS of CODING ..</h1>
          <h2 className="text-4xl  py-4  font-mono">Enjoy the process</h2>
          <p className="text-xl  py-4">
            {" "}
            when looking at its layout. The point of using Lorem Ipsum is that
            it has a more-or-less normal distribution of letters, as opposed to
            using 'Content here, content here', making it look like readable
            English. Many desktop publishing packages and web page editors now
            use Lo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
