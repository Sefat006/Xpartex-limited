import grayImg from '../../assets/We-create-website/gray-bg.jpg'
import Img from '../../assets/We-create-website/websites.jpg'

const Right = () => {
    return (
    <div className="relative w-full md:w-1/2 h-[25rem] md:h-80 top-40 lg:top-20 lg:h-[15rem] mt-8 md:mt-0 right-30">
      {/* Main website image */}
      <img
        className="h-32 w-32 md:h-48 md:w-48 lg:h-[20rem] lg:w-[25rem] absolute z-40 top-0 left-3/3 -translate-x-1/2 md:left-20 md:translate-x-0 object-cover rounded-lg shadow-lg"
        src={Img}
        alt="intro-image"
      />

      {/* Background gray image */}
      <img
        className="h-32 w-32 md:h-78 md:w-78 lg:h-[20rem] lg:w-[25rem] absolute z-30 top-8 left-1/2 translate-x-4 md:top-12 md:left-20 lg:left-2 md:translate-x-0 object-cover rounded-lg opacity-80"
        src={grayImg}
        alt="intro-image"
      />

      {/* Yellow accent rectangle */}
      <div className="bg-yellow-400 h-50 w-32 md:h-96 md:w-68 lg:h-[30rem] lg:w-[25rem] absolute z-20 bottom-60 left-5/5 -translate-x-3/4 md:-bottom-12 md:left-2 lg:left-30 lg:top-[-20px] md:translate-x-0 rounded-lg"></div>
    </div>    
    );
};

export default Right;