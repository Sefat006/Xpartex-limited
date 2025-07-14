import React from 'react';
import EpicDesign from './EpicDesign';

const IntroSection = () => {
    return (
            <section className="bg-[#E7E0D9] min-h-screen flex flex-col md:flex-row items-center py-12 md:py-24 px-4 md:px-12 overflow-hidden">

      {/* Left Content Section */}
      {/*
        w-full md:w-1/2: Takes full width on mobile, half on desktop.
        bg-white: White background for the content box.
        p-8 md:p-12: Responsive padding.
        rounded-lg: Rounded corners.
        shadow-xl: Large shadow.
        mb-12 md:mb-0: Margin bottom on mobile, none on desktop to prevent gap when side-by-side.
        md:mr-8: Margin right on desktop to separate from the right section.
        z-10: Ensures this content is above any background elements.
        relative: If you want to position anything absolutely *inside* this text box.
      */}
      <div className="w-full md:w-1/2 bg-white p-8 md:p-12 rounded-lg shadow-xl mb-12 md:mb-0 md:mr-8 z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
          We Create Websites
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="text-xs text-gray-500 mb-6">Image from Freepik</p>
        <button className="bg-black text-white py-3 px-6 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-300">
          VIEW PORTFOLIO
        </button>
      </div>

      {/* Right Visuals Section */}
      {/*
        relative: Crucial for positioning its absolute children.
        w-full md:w-1/2: Takes full width on mobile, half on desktop.
        min-h-[400px] md:min-h-[500px]: Ensures enough height for the visuals.
        flex items-center justify-center: Centers the content on mobile (before absolute positioning takes over).
        md:block: Reverts to block on desktop to allow absolute positioning to work freely.
        z-0: Ensures this section is behind the left content box if they overlap.
      */}
      <div className="relative w-full md:w-1/2 min-h-[400px] md:min-h-[500px] flex items-center justify-center md:block z-0">

        {/* Large Yellow Background Shape */}
        {/*
          absolute: Positions it relative to its parent (Right Visuals Section).
          bg-yellow-400: The yellow color.
          w-[150%] h-[150%]: Makes it much larger than its parent to allow for cropping.
          top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2: Centers the element.
          rotate-12: Rotates it to create the angled effect.
          md:w-[120%] md:h-[120%] md:rotate-12: Adjust size/rotation for desktop.
          -z-10: Pushes it behind other elements in this section.
        */}
        <div className="absolute bg-yellow-400 w-[150%] h-[150%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12 md:w-[120%] md:h-[120%] md:rotate-12 -z-10"></div>

        {/* Patterned Background Shape */}
        {/*
          absolute: Positions it.
          w-64 h-64 md:w-96 md:h-96: Responsive sizing.
          top-1/4 left-1/4: Positions it.
          bg-[repeating-linear-gradient(45deg,#ccc_2px,#fff_2px,#fff_4px)] opacity-60: Custom background for the pattern.
          -z-0: Ensures it's behind the screens but above the yellow.
        */}
        <div
          className="absolute w-64 h-64 md:w-96 md:h-96 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 md:top-1/3 md:left-1/4
                     bg-[repeating-linear-gradient(45deg,#ccc_2px,#fff_2px,#fff_4px)] opacity-60"
          style={{
            // Adjust background position to make the pattern visible
            backgroundSize: '8px 8px',
          }}
        ></div>

        {/* Screen Mockup 1 */}
        {/*
          absolute: Positions it.
          w-48 h-auto md:w-64: Responsive sizing.
          top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-6: Centers and rotates.
          shadow-2xl: Strong shadow.
          z-10: Ensures it's above other elements.
          md:top-1/2 md:left-1/2 md:-translate-x-[60%] md:-translate-y-[60%] md:-rotate-12: Desktop adjustments.
        */}
        <img
          src={screenMockup1}
          alt="Website mockup"
          className="absolute w-48 h-auto md:w-64 object-contain shadow-2xl z-10
                     top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-6
                     md:top-1/2 md:left-1/2 md:-translate-x-[60%] md:-translate-y-[60%] md:-rotate-12"
        />

        {/* Screen Mockup 2 */}
        {/*
          absolute: Positions it.
          w-48 h-auto md:w-64: Responsive sizing.
          top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-6: Centers and rotates.
          shadow-2xl: Strong shadow.
          z-20: Ensures it's above mockup 1.
          md:top-1/2 md:left-1/2 md:-translate-x-[20%] md:-translate-y-[20%] md:rotate-6: Desktop adjustments.
        */}
        <img
          src={screenMockup2}
          alt="Website mockup"
          className="absolute w-48 h-auto md:w-64 object-contain shadow-2xl z-20
                     top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-6
                     md:top-1/2 md:left-1/2 md:-translate-x-[20%] md:-translate-y-[20%] md:rotate-6"
        />

        {/* Pen/Stylus */}
        {/*
          absolute: Positions it.
          w-4 h-24 md:w-6 md:h-32: Responsive sizing.
          right-1/4 bottom-1/4 transform rotate-45: Positions and rotates.
          z-30: Ensures it's on top.
          md:right-1/4 md:bottom-1/4 md:rotate-45: Desktop adjustments.
        */}
        <img
          src={penImage}
          alt="Stylus pen"
          className="absolute w-4 h-24 md:w-6 md:h-32 object-contain z-30
                     right-1/4 bottom-1/4 transform rotate-45
                     md:right-1/4 md:bottom-1/4 md:rotate-45"
        />
      </div>
    </section>
    );
};

export default IntroSection;