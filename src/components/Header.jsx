import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/rash.png';
import '../scss/components/navigation.scss';

export const Header = () => {
  return (
    <header>
      <nav>
        <div className="w-1/3">
          <ul className="flex justify-between">
            <li>
              <NavLink activeClassName="selected" to="/news">
                News
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/tour">
                Tour
              </NavLink>
            </li>
            <li className="item-has-children">
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
          </ul>
        </div>
        <ul className="rash-logo">
          <li>
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </li>
        </ul>
        <div className="w-1/3">
          <ul className="flex justify-between">
            <li>
              <NavLink activeClassName="selected" to="/discography">
                Discography
              </NavLink>
            </li>
            <li>
              <a
                href="http://www.rushbackstage.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop
              </a>
            </li>
            <li>
              <NavLink
                activeClassName="selected"
                to="/professors-word-scramble"
              >
                Lyric Scramble
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
