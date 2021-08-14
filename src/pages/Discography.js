import { useEffect } from 'react';
import { toTitleCase } from '../helpers';

export const Discography = (props) => {
  const pageTitle = props.history.location.pathname;

  useEffect(() => {
    document.title = `${toTitleCase(pageTitle)} | Rash.com`;
  }, [pageTitle]);

  return <div>Discography Page Content</div>;
};
