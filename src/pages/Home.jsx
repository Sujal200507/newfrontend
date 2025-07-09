import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div className="w-full min-h-screen bg-[#0D1117]">
        <div className="bg-[#0095ff] flex items-center justify-center w-full min-h-8 py-1">
            <h6 className="text-white tracking-tighter font-semibold text-[11.3px] md:text-xs text-center"> Supports JavaScript, Python, React, 

and other popular frameworks! 🚀</h6>
        </div>
      <Navbar />
      <div className="w-full">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6">
            <h3 className="text-lg md:text-2xl text-[#8B949E] font-black tracking-tighter capitalize mb-4">Used by 100+ developers</h3>
          <h1 className="text-4xl md:text-6xl  text-[#E6EDF3] text-center font-black tracking-tighter mb-6">
            <b className="relative text-3xl md:text-6xl text-[#0095ff]">
              {" "}
              AI-Powered Code Review
              <img
                src="https://imgs.search.brave.com/hS8LtKrYPRqMPAn-zpkObgZkPKXoiofr5aNza0_siNs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvYWR2ZXJ0aXNp/bmctbWVkaWEtMS82/NC9BZHZlcnRpc2lu/Z19fTWVkaWFfSWNv/bnMtMTAtMTI4LnBu/Zw"
                className="w-12 absolute -top-10 -right-4 md:-right-6 rounded-xl "
                alt=""
              />
            </b>{" "}
            <br />– Instantly Improve Your Code!
          </h1>
          <p className="text-md text-center text-[#8B949E] mb-8 tracking-tight max-w-3xl">
            With AI-powered code review, you can catch errors, improve readability, <br className="hidden md:block" />
            and maintain <br className="md:hidden" /> your code in style.
          </p>
          <Link to={'/code-review'} className="bg-[#0095ff] tracking-tight font-bold text-[#E6EDF3] px-8 py-4 rounded-full hover:bg-[#1F6FEB] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          Review My Code Now 🚀
          </Link>
        </div>
      </div>
          <p className="text-sm text-center text-[#8B949E] pb-8">Powered by Gemini <i className="ri-gemini-fill"></i></p>
    </div>
  );
}

export default Home;
