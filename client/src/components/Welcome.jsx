import Collage from "../../images/Collage.png";

const Welcome = () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
        <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
          Send Crypto <br /> for good cause
        </h1>
        <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
          Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
        </p>
        </div>
        <div className="col-md-6">
            <img src={Collage} alt="logo" className="w-32 cursor-pointer" />
        </div>
      </div>
    </div>
);
  
export default Welcome;