import React from "react";
import calamity from "../../images/calamity.jpg";
import education from "../../images/education.jpg";
import elderly from "../../images/elderly.jpg";

const Medical = () => {
  return (
    <>
      <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-5 p-10 justify-center items-center ">
        <div class="m-2 bg-white rounded-lg shadow-xl lg:flex lg:max-w-lg">
          <img src={calamity} class="w-1/1 lg:w-1/2 rounded-l-2xl" />
          <div class="p-6 bg-gray-50">
            <h2 class="mb-2 text-2xl font-bold text-gray-900">
              horizantal Image
            </h2>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ipsum ab rem, consequuntur autem totam sit minima porro?
            </p>
          </div>
        </div>
        <div class="m-2 bg-white rounded-lg shadow-xl lg:flex lg:max-w-lg">
          <img src={education} class="w-1/1 lg:w-1/2 rounded-l-2xl" />
          <div class="p-6 bg-gray-50">
            <h2 class="mb-2 text-2xl font-bold text-gray-900">
              horizantal Image
            </h2>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ipsum ab rem, consequuntur autem totam sit minima porro?
            </p>
          </div>
        </div>
        <div class="m-2 bg-white rounded-lg shadow-xl lg:flex lg:max-w-lg">
          <img src={elderly} class="w-1/1 lg:w-1/2 rounded-l-2xl" />
          <div class="p-6 bg-gray-50">
            <h2 class="mb-2 text-2xl font-bold text-gray-900">
              horizantal Image
            </h2>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ipsum ab rem, consequuntur autem totam sit minima porro?
            </p>
          </div>
        </div>

        <div class="m-2 bg-white rounded-lg shadow-xl lg:flex lg:max-w-lg">
          <img src={elderly} class="w-1/1 lg:w-1/2 rounded-l-2xl" />
          <div class="p-6 bg-gray-50">
            <h2 class="mb-2 text-2xl font-bold text-gray-900">
              horizantal Image
            </h2>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ipsum ab rem, consequuntur autem totam sit minima porro?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Medical;
