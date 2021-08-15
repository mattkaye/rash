import { useEffect } from 'react';
import { toTitleCase } from '../helpers';

export const ProfessorsWordScramble = (props) => {
  const pageTitle = props.history.location.pathname;

  useEffect(() => {
    document.title = `${toTitleCase(pageTitle)} | Rash.com`;
  }, [pageTitle]);

  return <div>Professors Word Scramble Page Content</div>;
};
