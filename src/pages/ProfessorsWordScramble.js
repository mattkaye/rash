import { useEffect } from 'react';
import { toTitleCase } from '../helpers';

export const ProfessorsWordScramble = (props) => {
  useEffect(() => {
    document.title = `${toTitleCase(
      props.history.location.pathname
    )} | Rash.com`;
  });
  return <div>ProfessorsWordScramble Page Content</div>;
};
