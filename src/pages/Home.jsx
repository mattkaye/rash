import { useEffect } from 'react';
import { toTitleCase } from '../helpers';
import { PageHero } from '../components/PageHero';
import { Wallpaper } from '../components/Wallpaper';
import wallpaper from '../assets/images/wallpaper-home.jpg';
import '../scss/pages/homepage.scss';

export const Home = (props) => {
  useEffect(() => {
    document.title = 'Rash.com | React clone!';
  }, ['Rash.com | React clone!']);

  return (
    <>
      {' '}
      <Wallpaper src={wallpaper} position="fixed" />
      {/* PW callout */}
      <div className="relative flex flex-col items-center w-full -mt-60">
        <PageHero />
      </div>
      {/* <div className="relative z-10 flex flex-col w-full h-16 bg-red-600">
        Main Stuff here
      </div> */}
    </>
  );
};
