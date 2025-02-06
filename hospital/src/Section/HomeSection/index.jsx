import { HomeBanner } from '@/Banner/HomeBanner';
import React from 'react'
import HomeBook from './HomeBook';
import Homespecialities from './Homespecialities';
import HomeDoctors from './HomeDoctors';
import HomeContact from './HomeContact';
import HomeComments from './HomeComments';
import HomeTips from './HomeTips';
import FloatingButton from '@/Component/FloatingButtonComponent';


const HomeSection = () => {
  return (
    <div>
      <HomeBanner />
      <HomeBook />
      <Homespecialities />
      <HomeDoctors />
      <HomeContact />
      <HomeComments />
      <HomeTips />
      <FloatingButton />
    </div>
  );
}

export default HomeSection;