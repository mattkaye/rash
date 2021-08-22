import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BreakpointHelper } from './components/BreakpointHelper';
import { Home } from './pages/Home';
import { Tour } from './pages/Tour';
import { News } from './pages/News';
import { Band } from './pages/Band';
import { BandMember } from './pages/BandMember';
import { Discography } from './pages/Discography';
import { ProfessorsWordScramble } from './pages/ProfessorsWordScramble';

const RashWebsite = () => {
  return (
    <div className="outer-wrapper">
      <Header />
      {/* <main>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/tour" component={Tour}></Route>
          <Route exact path="/news" component={News}></Route>
          <Route exact path="/band" component={Band}></Route>
          <Route path="/band/:id" children={<BandMember />} />
          <Route exact path="/discography" component={Discography}></Route>
          <Route
            exact
            path="/professors-word-scramble"
            component={ProfessorsWordScramble}
          ></Route>
        </Switch>
      </main>
      <Footer /> */}
      <BreakpointHelper />
    </div>
  );
};

export default RashWebsite;
