import { useEffect } from 'react';
import { toTitleCase } from '../helpers';
import '../scss/homepage.scss';
import '../assets/images/homepage-cover.jpg';

export const Home = (props) => {
  useEffect(() => {
    document.title = 'Rash.com | React clone!';
  });

  return (
    <>
      <div class="pw-cover"></div>
    </>
  );
};
