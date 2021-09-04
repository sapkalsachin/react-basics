import React from 'react';
import AppHero from '../component/home/hero';
import AppAbout from '../component/home/about'
import AppFeature from '../component/home/feature';
import AppWorks from '../component/home/works';
import AppFaq from '../component/home/faq';
function AppHome(){
    return(
        <div className="main">
            <AppHero/>
            <AppAbout/>
            <AppFeature/>
            <AppWorks/>
            <AppFaq/>
        </div>
    );
}

export default AppHome;