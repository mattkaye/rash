import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/rash.png';
import '../scss/navigation.scss';

export const Header = (props) => {
  return (
    <header>
      <nav className="text-rash-yellow">
        <ul>
          <li>
            <NavLink activeClassName="selected" to="/tour">
              Tour
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/news">
              News
            </NavLink>
          </li>
          <li className="flex flex-col">
            <NavLink activeClassName="selected" to="/band">
              Band
            </NavLink>
            <ul>
              <li>
                <NavLink activeClassName="selected" to="/band/geddy-lee">
                  Geddy
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/band/alex-lifeson">
                  Alex
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/band/neil-peart">
                  Neil
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/">
              <img src={logo} className="w-48" alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/discography">
              Discography
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/professors-word-scramble">
              Word Scramble
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
