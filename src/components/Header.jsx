import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/images/rash.png';
import arrow from '../assets/icons/nav-arrow.svg';
import '../scss/components/navigation.scss';

export const Header = () => {
  const [navIsActive, setNavActiveState] = useState(false);
  const [subNavIsActive, setSubNavActiveState] = useState(false);

  useEffect(() => {
    mediaMatchMastehead();
  }, []);

  useEffect(() => {
    setNavActiveState(false);
  }, [useLocation()]);

  function toggleNavState(e) {
    setNavActiveState(!navIsActive ? true : false);
  }

  function toggleSubNavigation(e) {
    setSubNavActiveState(!subNavIsActive ? true : false);
  }

  // Closes mobile navigation when window expands.
  function mediaMatchMastehead() {
    const mediaQuery = window.matchMedia('(min-width: 760px)');
    const masthead = document.querySelector('header');

    function handleViewportChange(e) {
      if (e.matches) {
        setNavActiveState(false);
      }
    }
    mediaQuery.addEventListener('change', handleViewportChange);
    handleViewportChange(mediaQuery);
  }

  return (
    <header>
      <nav>
        <button
          className={
            'hamburger hamburger--boring' + (navIsActive ? ' is-active' : '')
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
        <div className={'nav-wrapper ' + (navIsActive ? ' is-active' : '')}>
          <div className="w-full nav-section">
            <ul className="lg:gap-16 md:gap-0">
              <li>
                <NavLink activeClassName="selected" to="/news">
                  News
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/discography">
                  Discography
                </NavLink>
              </li>

              <li className="item-has-children">
                <img
                  src={arrow}
                  className={'arrow' + (subNavIsActive ? ' is-active' : '')}
                  onClick={toggleSubNavigation}
                />
                <NavLink activeClassName="selected" to="/band">
                  Band
                </NavLink>
                <ul className={subNavIsActive ? 'is-active' : ''}>
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
                <img src={logo} alt="Rash Logo" />
              </NavLink>
            </li>
          </ul>
          <div className="w-full nav-section">
            <ul className="lg:gap-16 md:gap-0">
              <li>
                <NavLink activeClassName="selected" to="/tour">
                  Tour
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
        </div>
      </nav>
    </header>
  );
};
