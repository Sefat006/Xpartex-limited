import React from 'react';
import EpicDesign from './EpicDesign';
import WeCreateWebsite from './WeCreateWebsite';
import Right from './Right';

const IntroSection = () => {
    return (
        <div className='bg-[#D8C9BB] space-y-20 p-10 text-black'>
            <Right></Right>
            <WeCreateWebsite></WeCreateWebsite>
            <EpicDesign></EpicDesign>
        </div>
    );
};

export default IntroSection;