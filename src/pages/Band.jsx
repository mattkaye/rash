import { useEffect } from 'react';
import { toTitleCase } from '../helpers';

export const Band = (props) => {
  const pageTitle = props.history.location.pathname;

  useEffect(() => {
    document.title = `${toTitleCase(pageTitle)} | Rash.com`;
  }, [pageTitle]);

  return <div>Band Page Content</div>;
};
