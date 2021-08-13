import { useEffect } from 'react';
import { toTitleCase } from '../helpers';

export const Band = (props) => {
  useEffect(() => {
    document.title = `${toTitleCase(
      props.history.location.pathname
    )} | Rash.com`;
  });
  return <div>Band Page Content</div>;
};
