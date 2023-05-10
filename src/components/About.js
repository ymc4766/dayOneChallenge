import React from "react";

const About = () => {
  return (
    <div className="w-full h-full py-10  ">
      <h1 className="text-6xl  font-bold text-blue-700 m-3 text-center">
        I Yusuf Ymc{" "}
      </h1>
      <div className="max-w-[1240px] mx-auto w-full grid md:grid-cols-2 gap-10 md:flex items-center ">
        <div className="flex flex-col px-4 py-5 w-full">
          <img
            src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="/"
            className="w-full  object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col py-6">
          <h3 className="text-4xl mb-4">
            The <b className="text-violet-800">#100DAYSOFCODING </b> challenge
          </h3>
          <h4 className="text-2xl py-2 text-green-600">
            {" "}
            Practice Make is You Good + + ....{" "}
          </h4>
          <p className="text-xl font-bold">
            {" "}
            but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recent
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
