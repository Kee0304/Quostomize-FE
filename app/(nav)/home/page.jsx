"use client";

import HomeBody2 from '../../../components/home/HomeBody2';
import HomeBody1 from '../../../components/home/HomeBody1';
import HomeBody3 from '../../../components/home/HomeBody3';
import HomeBody4 from '../../../components/home/HomeBody4';

const Home = () => {
  return (

    <div className={`h-full overflow-scroll [&::-webkit-scrollbar]:hidden`}
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}>
        <HomeBody1 /><br />
        <HomeBody2 /><br />
        <HomeBody3 /><br />
        <HomeBody4 /><br />
    </div>
  );
}
export default Home;