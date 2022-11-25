import { HiOutlineArrowLongRight } from "react-icons/hi2";
import NavBar from "../Navbar";
import { useNavigate, Link } from "react-router-dom";
import video from "../../assets/video.mp4";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="py-3  relative">
      <NavBar />
      <div className="space-y-16">
        <div className=" relative h-screen lg:h-screen">
          <video className="w-full h-full object-cover overlay" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
          <div className="absolute top-0 left-10 right-10 md:top-[5%] md:bottom-[50%] md:left-[30%] md:right-[25%] z-100 space-y-10 py-11 ">
            <h2 className="text-5xl text-white text-center opacity-100 font-bold">
              Feeling better starts with a single message
            </h2>
            <p className="text-4xl text-gray-200">
              What type of support are you looking for?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
              <Link to="/questionaire">
                <div className="px-6 py-4 md:py-6 bg-gray-100 rounded-xl border  space-y-4 hover:cursor-pointer hover:bg-gray-200">
                  <h3 className="text-4xl font-bold text-gray-600">
                    Individual
                  </h3>
                  <p className="text-4xl text-gray-800">Therapy for me</p>
                </div>
              </Link>
              <Link to="/questionaire">
                <div className="px-6 py-4 md:py-6 bg-gray-100 rounded-xl border  space-y-4 hover:cursor-pointer hover:bg-gray-200">
                  <h3 className="text-4xl font-bold text-gray-600">Couples</h3>
                  <p className="text-4xl text-gray-800">Therapy for Us</p>
                </div>
              </Link>
              <Link to="/questionaire">
                <div className="px-6 py-4 md:py-6 bg-gray-100 rounded-xl border  space-y-4 hover:cursor-pointer hover:bg-gray-200">
                  <h3 className="text-4xl font-bold text-gray-600">Teens</h3>
                  <p className="text-4xl text-gray-800">For ages 13-17</p>
                </div>
              </Link>
              <Link to="/questionaire">
                <div className="px-6 py-4 md:py-6 bg-gray-100 rounded-xl border  space-y-4 hover:cursor-pointer hover:bg-gray-200">
                  <h3 className="text-4xl font-bold text-gray-600">
                    Psychiatry
                  </h3>
                  <p className="text-4xl text-gray-800">Medication management</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div id="works" className="flex flex-col items-center space-y-12 px-9 ">
          <h2 className="text-5xl text-center font-semibold text-color">
            How E-Tuze works
          </h2>
          <div className="flex items-center flex-col lg:flex-row space-y-20 lg:space-x-20 ">
            <div className="flex flex-row md:flex-col items-center w-80 ">
              <img
                className="w-44 h-44"
                src="https://assets-global.website-files.com/5f6b627361bad8cad0fc5c99/5f725569b78666832f1f9180_icon-1.png"
                alt=""
              />
              <div className="flex flex-col space-y-3">
                <h3 className="text-4xl text-color">Brief assessment</h3>
                <p className="text-gray-800">
                  Answer a few questions about your preferences.
                </p>
              </div>
            </div>
            <HiOutlineArrowLongRight className="text-6xl text-gray-400 hidden lg:flex" />
            <div className="flex flex-row md:flex-col items-center w-80 space-y-2 space-x-3 lg:space-x-0">
              <img
                className="w-44 h-44"
                src="https://assets-global.website-files.com/5f6b627361bad8cad0fc5c99/5f7255db77d9b86141dbd8d6_icon-2.png"
                alt=""
              />

              <div className="flex flex-col  space-y-3">
                <h3 className="text-4xl text-color">Personalized match</h3>
                <p className="text-gray-800">
                  We'll match you with a provider (typically within 48 hours).
                </p>
              </div>
            </div>
            <HiOutlineArrowLongRight className="text-6xl text-gray-400 hidden lg:flex" />
            <div className="flex flex-row md:flex-col items-center w-80 space-x-3 lg:space-x-0">
              <img
                className="w-44 h-44"
                src="https://assets-global.website-files.com/5f6b627361bad8cad0fc5c99/5f7255e34ba05c669afd77eb_icon-3.png"
                alt=""
              />
              <div className="space-y-3">
                <h3 className="text-4xl text-color">Start therapy</h3>
                <p className="text-gray-800">
                  Begin the journey towards a happier you.
                </p>
              </div>
            </div>
          </div>
          <button
            className="text-3xl font-semibold tracking-wider px-16 py-4 rounded-xl btn"
            onClick={() => navigate("/get-started")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
