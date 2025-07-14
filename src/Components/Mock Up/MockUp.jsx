
import backgroundImage from '../../assets/Mockup/mockup.jpg';

import floatingWatercolor from '../../assets/Mockup/mockup-1.jpg';
const MockUp = () => {

const contentBoxes = [
    {
      title: 'Branding strategy',
      description: 'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.',
    },
    {
      title: 'Designing logos',
      description: 'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Brand identity',
      description: 'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.',

    },
  ];

return (
    <div>
        <style>
        {`
        /* Animation for the watercolor image: primarily X-axis float */
        @keyframes float-x-1 {
            0% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(15px, -3px) rotate(1deg); } /* Slightly less movement to match new alignment */
            100% { transform: translate(0px, 0px) rotate(0deg); }
        }

        /* Animation for the MOCKUP div: primarily X-axis float in opposite direction */
        @keyframes float-x-2 {
            0% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(-15px, 3px) rotate(-1deg); } /* Slightly less movement to match new alignment */
            100% { transform: translate(0px, 0px) rotate(0deg); }
        }

        /* Fade-in and slide-up animation for content boxes */
        @keyframes fadeInSlideUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }

        .animate-float-x-1 {
            animation: float-x-1 4s ease-in-out infinite;
        }

        .animate-float-x-2 {
            animation: float-x-2 4.5s ease-in-out infinite;
        }

        .animate-fadeInSlideUp {
            animation: fadeInSlideUp 0.8s ease-out forwards;
        }
        `}
        </style>

        <div
        className="relative min-h-1/2 bg-cover bg-center flex flex-col md:flex-row items-start justify-start p-4 md:p-12 overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        >
        
        <div className="absolute inset-0 bg-black opacity-10 z-0"></div>

        <div className="relative w-full md:w-full min-h-[400px] md:min-h-[700px] flex flex-col items-center justify-center md:block z-10 mb-16 md:mb-0">
          <img
            src={floatingWatercolor}
            alt="Abstract watercolor art"
            className="absolute top-24=left-10 w-55 h-40 md:w-70 md:h-50 lg:w-102 lg:h-70 object-cover shadow-xl transform md:top-[35%] md:left-[15%] lg:top-[25%] lg:left-[35%] rotate-0 animate-float-x-1"
          />
          
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-55 h-40 md:w-70 md:h-50 lg:w-102 lg:h-70 bg-white p-6 shadow-xl text-center flex flex-col justify-center items-center md:bottom-[5%] lg:bottom-[0%] md:left-[30%] animate-float-x-2">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">MOCKUP</h3>
            <p className="text-sm text-gray-600">READY TO USE</p>
          </div>
        </div>

       
        <div className="w-full md:w-1/2 space-y-8 z-10">
          {contentBoxes.map((box, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md animate-fadeInSlideUp"
              style={{ animationDelay: `${index * 0.1}s` }} 
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{box.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{box.description}</p>
              {box.imageSource && (
                <p className="text-xs text-gray-500 mt-2">
                  {box.imageSource}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default MockUp;