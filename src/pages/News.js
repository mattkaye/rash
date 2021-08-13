import { useEffect } from 'react';
import { toTitleCase } from '../helpers';

export const News = (props) => {
  useEffect(() => {
    document.title = `${toTitleCase(
      props.history.location.pathname
    )} | Rash.com`;
  });
  return <div>News Page Content</div>;
};
