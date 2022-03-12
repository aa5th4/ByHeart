import Collage from "../../images/Collage.png";

const Welcome = () => (
    // <div className="grid md:grid-cols-2 sm:grid-cols-1 p-10 justify-items-center place-items-center">
    //     <div className="w-full justify-center" style={{justifyContent: "center", alignItems: "center"}}>
    //     <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
    //       Send Crypto <br /> for good cause
    //     </h1>
    //     <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
    //       Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
    //     </p>
    //     </div>
    //     <div className="w-full justify-center" style={{justifyContent: "center", alignItems: "center"}}>
    //     <img src={Collage} alt="logo" className="w-32 cursor-pointer w-96" />
    //     </div>
    //   </div>


<div className="flex w-full justify-center items-center">
<div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
  <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
      Send Crypto <br /> for good cause
    </h1>
    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
      Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
    </p>
  </div>

  <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
      <div className="flex justify-between flex-col w-full h-full">
      <img src={Collage} alt="logo" className="w-32 cursor-pointer w-96" />
      </div>
  </div>
</div>
</div> 
);

export default Welcome;