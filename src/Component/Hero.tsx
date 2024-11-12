import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";

const Hero = () => {
  return (
    <div className="w-full max-h-full">
      <div className="w-[100%] max-h-full justify-center items-center flex">
        <div className="md:w-[96%] w-[90%] min-h-full grid md:grid-cols-3 grid-cols-2 gap-5 pt-5 justify-center items-center">
          <div>
            <img
              className="w-[400px] md:h-[450px] h-[200px] rounded-2xl"
              src={pic1}
              alt=""
            />
            <p>ZTTW 2-piece (Black)</p>
            <p>$400.00 USD</p>
          </div>
          <div>
            <img
              className="w-[400px] md:h-[450px] h-[200px] rounded-2xl"
              src={pic2}
              alt=""
            />
            <p>ZTTW 2-piece (Brown)</p>
            <p>$400.00 USD</p>
          </div>
          <div>
            <img
              className="w-[400px] md:h-[450px] h-[200px] rounded-2xl"
              src={pic3}
              alt=""
            />
            <p>ZTTW Baseball hat (Navy Blue)</p>
            <p>$100.00 USD</p>
          </div>
          <div>
            <img
              className="w-[400px] md:h-[450px] h-[200px] rounded-2xl"
              src={pic4}
              alt=""
            />
            <p>ZTTW Baseball hat (Neon Green)</p>
            <p>$100.00 USD</p>
          </div>
          <div>
            <img
              className="w-[400px] md:h-[450px] h-[200px] rounded-2xl"
              src={pic5}
              alt=""
            />
            <p>ZTTW Beanie (Black on white)</p>
            <p>$100.00 USD</p>
          </div>
          <div>
            <img
              className="w-[400px] md:h-[450px] h-[200px] rounded-2xl"
              src={pic6}
              alt=""
            />
            <p>ZTTW Beanie (Black on Yellow)</p>
            <p>$100.00 USD</p>
          </div>
        </div>
      </div>
      <div className="w-full justify-center item center flex pt-10 pb-10">
        <button className="w-28 h-12 rounded-md justify-center items-center flex border border-black">
          View all
        </button>
      </div>
    </div>
  );
};

export default Hero;
