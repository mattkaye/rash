import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navigation.css';

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
          <li class="flex flex-col">
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
            <img
              src="https://www.rush.com/wp-content/themes/rush/assets/img/rush.svg"
              class="w-48"
              alt=""
            />
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
