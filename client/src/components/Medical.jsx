import calamity from "../../images/calamity.jpg";
import education from "../../images/education.jpg";
import elderly from "../../images/elderly.jpg";
import health from "../../images/health.jpg";

const Medical = () => {
  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;
      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };

  window.addEventListener("scroll", reveal);
  return (
    <div className="grid ">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5 p-10 justify-center items-center lg:ml-20 reveal">
        <div class="m-2 bg-white rounded-lg shadow-xl lg:flex lg:max-w-lg cursor-pointer ">
          <img src={calamity} class="w-1/1 lg:w-1/2 rounded-l-2xl" />
          <div class="p-6 bg-gray-50">
            <h2 class="mb-2 text-2xl font-bold text-gray-900">Calamity</h2>
            <p class="text-gray-600 mb-2">
              Relief the affected Support the public rescue operations Provide
              the supplies for people in need
            </p>
            <p class="text-gray-600 mb-2">Address To:</p>
            <p class="text-gray-600">
              0x5D3dCc1d117f4eC952583
              <br />
              65a4a5Cb8B807D77811
            </p>
          </div>
        </div>
        <div class="m-2 bg-white rounded-lg shadow-xl lg:flex lg:max-w-lg cursor-pointer">
          <img src={education} class="w-1/1 lg:w-1/2 rounded-l-2xl" />
          <div class="p-6 bg-gray-50">
            <h2 class="mb-2 text-2xl font-bold text-gray-900">Education</h2>
            <p class="text-gray-600 mb-2">
              Feed a child Give the child a sense of purpose Provide them with
              healthcare, education and nutrition
            </p>
            <p class="text-gray-600 mb-2">Address To:</p>
            <p class="text-gray-600">
              0x7714c972Fe82aF31E35058
              <br />
              c687F38cEF8FaE4CEE
            </p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5 p-10 justify-center items-center lg:ml-20 reveal">
        <div class="m-2 bg-white rounded-lg shadow-xl lg:flex lg:max-w-lg cursor-pointer">
          <img src={elderly} class="w-1/1 lg:w-1/2 rounded-l-2xl" />
          <div class="p-6 bg-gray-50">
            <h2 class="mb-2 text-2xl font-bold text-gray-900">Elderly</h2>
            <p class="text-gray-600 mb-2">
              Support the elderly and differently-abled Provide an opportunity
              for both to learn new skills Help them live with respect and
              dignity
            </p>
            <p class="text-gray-600 mb-2">Address To:</p>
            <p class="text-gray-600">
              0x5401f51BB69a877a1146d5
              <br />
              62c1451CBE5F28D818
            </p>
          </div>
        </div>

        <div class="m-2 bg-white rounded-lg shadow-xl lg:flex lg:max-w-lg cursor-pointer">
          <img src={health} class="w-1/1 lg:w-1/2 rounded-l-2xl" />
          <div class="p-6 bg-gray-50">
            <h2 class="mb-2 text-2xl font-bold text-gray-900">Health</h2>
            <p class="text-gray-600 mb-2">
              Support patients and caregivers Support rehabilitation programs
              Raise awareness about specific diseases
            </p>
            <p class="text-gray-600 mb-2">Address To:</p>
            <p class="text-gray-600">
              0xCCD1000030756c542faA1a2
              <br />
              f8C49e34C5C5a7E5A
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medical;
