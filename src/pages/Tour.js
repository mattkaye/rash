import { useEffect } from 'react';
import { toTitleCase } from '../helpers';

export const Tour = (props) => {
  useEffect(() => {
    document.title = `${toTitleCase(
      props.history.location.pathname
    )} | Rash.com`;
  });
  return <div>Tour Page Content</div>;
};
