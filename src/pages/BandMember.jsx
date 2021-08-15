import { useEffect } from 'react';
import { toTitleCase } from '../helpers';
import { useParams } from 'react-router-dom';

export const BandMember = () => {
  const { id } = useParams();

  useEffect(() => {
    document.title = `${toTitleCase(id)} | Rash.com`;
  });

  return <div>{id} Page Content</div>;
};
