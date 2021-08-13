import { useEffect } from 'react';
import { toTitleCase } from '../helpers';

export const Home = (props) => {
  useEffect(() => {
    document.title = 'Rash.com | React clone!';
  });
  return <div>Homepage Content</div>;
};
