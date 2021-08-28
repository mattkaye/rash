import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/rash.png';
import '../scss/components/navigation.scss';

export const Header = () => {
  const [navIsActive, setNavActiveState] = useState(false);

  function toggleNavState() {
    setNavActiveState(!navIsActive ? true : false);
  }

  return (
    <header>
      <p>{}</p>
      <nav>
        <button
          className={
            'hamburger hamburger--spring' + (navIsActive ? ' is-active' : '')
          }
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
          onClick={toggleNavState}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div className="w-full">
          <ul className="xl:gap-32 md:gap-10">
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
        <div className="w-full">
          <ul className="xl:gap-16 md:gap-6">
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
