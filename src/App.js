import React from 'react';
import * as Pages from './pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

import 'animate.css';
import './App.css';

export default function App() {
  return (
    <div className="main">
      <Router>
        <Pages.NavBar />
        <div className="page-container">
          <Route path='/' exact >
            {({ match }) => {
              return (
                <CSSTransition
                  in={match ? true : false}
                  timeout={800}
                  className={{
                    enter: "animated fast",
                    enterActive: "fadeIn",
                    exit: "animated fast",
                    exitActive: "fadeOut"
                  }}
                  mountOnEnter
                  unmountOnExit
                >
                  <Pages.Home />
                </CSSTransition>
              )
            }}
          </Route>
          <Route path='/news' exact component={Pages.News} />
          <Route path='/personal' exact component={Pages.Personal} />
        </div>
      </Router>
    </div>

  )
}

