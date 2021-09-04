import React from 'react';
import AppHero from '../component/home/hero';
import AppAbout from '../component/home/about'
import AppFeature from '../component/home/feature';
import AppWorks from '../component/home/works';
import AppFaq from '../component/home/faq';
import AppPricing from '../component/home/pricing'
import AppContact from '../component/home/contact';
function AppHome(){
    return(
        <div className="main">
            <AppHero/>
            <AppAbout/>
            <AppFeature/>
            <AppWorks/>
            <AppFaq/>
            <AppPricing/>
            <AppContact/>
        </div>
    );
}

export default AppHome;