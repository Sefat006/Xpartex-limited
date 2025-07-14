
import Navbar from './../Components/Navbar';
import IntroSection from './../Components/IntroSection/IntroSection';
import Portfolio from './../Components/Portfolio/Portfolio';
import BrandValues from './../Components/Brand Values/BrandValues';
import Construction from './../Construction/Construction';
import WhatWeDo from './../Components/What We Do/WhatWeDo';
import MockUp from './../Components/Mock Up/MockUp';
import Crafting from './../Components/Crafting Digital/Crafting';
const Home = () => {
    return (
            <div className='mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8'>
                <Navbar></Navbar>
                <IntroSection></IntroSection>
                <Portfolio></Portfolio>
                <BrandValues></BrandValues>
                <Construction></Construction>
                <WhatWeDo></WhatWeDo>
                <MockUp></MockUp>
                <Crafting></Crafting>
            </div>
    );
};

export default Home;