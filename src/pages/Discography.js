import { useEffect } from 'react';
import { toTitleCase } from '../helpers';

export const Discography = (props) => {
  useEffect(() => {
    document.title = `${toTitleCase(
      props.history.location.pathname
    )} | Rash.com`;
  });
  return <div>Discography Page Content</div>;
};
