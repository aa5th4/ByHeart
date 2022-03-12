import calamity from "../../images/calamity.jpg";
import education from "../../images/education.jpg";
import elderly from "../../images/calamity.jpg";
import health from "../../images/health.jpg";

const Medical = () => {
    return (
    <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-5 p-10 justify-center items-center lg:ml-20">
        <div class="m-2 bg-white rounded-lg shadow-xl lg:flex lg:max-w-lg cursor-pointer">
          <img src={calamity} class="w-1/1 lg:w-1/2 rounded-l-2xl" />
          <div class="p-6 bg-gray-50">
            <h2 class="mb-2 text-2xl font-bold text-gray-900">
              horizantal Image
            </h2>
            <p class="text-gray-600 mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ipsum ab rem, consequuntur autem totam sit minima porro?
            </p>
            <p class="text-gray-600 mb-2">Address To:</p>
            <p class="text-gray-600">0x5D3dCc1d117f4eC952583<br/>65a4a5Cb8B807D77811</p>
          </div>
        </div>
        <div class="m-2 bg-white rounded-lg shadow-xl lg:flex lg:max-w-lg cursor-pointer">
          <img src={education} class="w-1/1 lg:w-1/2 rounded-l-2xl" />
          <div class="p-6 bg-gray-50">
            <h2 class="mb-2 text-2xl font-bold text-gray-900">
              horizantal Image
            </h2>
            <p class="text-gray-600 mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ipsum ab rem, consequuntur autem totam sit minima porro?
            </p>
            <p class="text-gray-600 mb-2">Address To:</p>
            <p class="text-gray-600">0x7714c972Fe82aF31E35058<br/>c687F38cEF8FaE4CEE</p>
          </div>
        </div>
        <div class="m-2 bg-white rounded-lg shadow-xl lg:flex lg:max-w-lg cursor-pointer">
          <img src={elderly} class="w-1/1 lg:w-1/2 rounded-l-2xl" />
          <div class="p-6 bg-gray-50">
            <h2 class="mb-2 text-2xl font-bold text-gray-900">
              horizantal Image
            </h2>
            <p class="text-gray-600 mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ipsum ab rem, consequuntur autem totam sit minima porro?
            </p>
            <p class="text-gray-600 mb-2">Address To:</p>
            <p class="text-gray-600">0x5401f51BB69a877a1146d5<br/>62c1451CBE5F28D818</p>
          </div>
        </div>

        <div class="m-2 bg-white rounded-lg shadow-xl lg:flex lg:max-w-lg cursor-pointer">
          <img src={health} class="w-1/1 lg:w-1/2 rounded-l-2xl" />
          <div class="p-6 bg-gray-50">
            <h2 class="mb-2 text-2xl font-bold text-gray-900">
              horizantal Image
            </h2>
            <p class="text-gray-600 mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ipsum ab rem, consequuntur autem totam sit minima porro?
            </p>
            <p class="text-gray-600 mb-2">Address To:</p>
            <p class="text-gray-600">0xCCD1000030756c542faA1a2<br/>f8C49e34C5C5a7E5A</p>
          </div>
        </div>
      </div>
    );
};
  
export default Medical;

