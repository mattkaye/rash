import { useEffect } from 'react';
import { toTitleCase } from '../helpers';

export const News = (props) => {
  const pageTitle = props.history.location.pathname;

  useEffect(() => {
    document.title = `${toTitleCase(pageTitle)} | Rash.com`;
  }, [pageTitle]);

  return <div>News Page Content</div>;
};
