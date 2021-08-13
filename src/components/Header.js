import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/rash.png';
import '../scss/navigation.scss';

export const Header = (props) => {
  return (
    <header>
      <nav className="text-rash-yellow">
        <ul>
          <li>
            <Link to="/tour">Tour</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li className="flex flex-col">
            <Link to="/band">Band</Link>
            <ul>
              <li>
                <Link to="/band/geddy-lee">Geddy</Link>
              </li>
              <li>
                <Link to="/band/alex-lifeson">Alex</Link>
              </li>
              <li>
                <Link to="/band/neil-peart">Neil</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">
              <img src={logo} className="w-48" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/discography">Discography</Link>
          </li>
          <li>
            <Link to="/professors-word-scramble">Word Scramble</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
