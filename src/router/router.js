import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from './constants';
import Layout from '../components/Layout/Layout';

import { CategoryPage } from '../pages/CategoryPage';
import { NewQuestion } from '../pages/NewQuestion';
import { Home } from '../pages/Home';
import { AllQuestions } from '../pages/AllQuestions';
import { SingleQuestion } from '../pages/SingleQuestion';
import { Credits } from '../pages/Credits';

function AppRouter() {
  return (
    <Layout>
      <Switch>
        <Route path={ROUTES.newQuestion}>
          <NewQuestion />
        </Route>
        <Route path={ROUTES.questionCategory}>
          <CategoryPage />
        </Route>
        <Route path={ROUTES.question}>
          <SingleQuestion />
        </Route>
        <Route path={ROUTES.questions}>
          <AllQuestions />
        </Route>
        <Route path={ROUTES.credits}>
          <Credits />
        </Route>
        <Route exact path={ROUTES.root}>
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}

export default AppRouter;
