import React from 'react';
import EpicDesign from './EpicDesign';
import WeCreateWebsite from './WeCreateWebsite';
import Right from './Right';

const IntroSection = () => {
    return (
        <div className="bg-[#D8C9BB] space-y-20 p-10 text-black">
            <div className="wrapper flex relative flex-col-reverse md:flex-row">
                <WeCreateWebsite></WeCreateWebsite>
                <Right></Right>
            </div>
            <EpicDesign></EpicDesign>
        </div>
    );
};

export default IntroSection;