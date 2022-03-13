import Collage from "../../images/Collage.png";

const Welcome = () => (
  <div className="flex w-full justify-center items-center animated fadeInLeft">
    <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
      <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
        <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
          Send Crypto <br /> for good cause
        </h1>
        <p className="text-left text-black md:w-9/12 w-11/12 text-base animated fadeInRight">
          Your help, support and kindness will fight for the betterment of
          society with transparency. We work towards creating quality and
          equitable opportunities for children and communities to learn and grow
          to long-term sustainable change. Donate to dedicated, locally-led
          disaster relief, medical emergencies and social causes.
        </p>
      </div>

      <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
        <div className="flex justify-between flex-col w-full h-full">
          <img
            src={Collage}
            alt="logo"
            className="w-32 cursor-pointer w-96 pingpong"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Welcome;
