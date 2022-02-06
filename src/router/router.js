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
import AppRoute from './AppRoute';
import GuestRoute from './GuestRoute';
import { Auth } from '../pages/Auth';
import { UserProfile } from '../pages/UserProfile';
import { FavouriteQuestions } from '../pages/FavouriteQuestions';
import { UserQuestions } from '../pages/UserQuestions';

function AppRouter() {
  return (
    <Layout>
      <Switch>
        <GuestRoute path="/login" exact>
          <Auth isLogin={true} />
        </GuestRoute>
        <GuestRoute path="/signup" exact>
          <Auth />
        </GuestRoute>
        <AppRoute exact path="/profile">
          <UserProfile />
        </AppRoute>
        <AppRoute exact path="/questions/favourites">
          <FavouriteQuestions />
        </AppRoute>
        <AppRoute exact path="/questions/user-questions">
          <UserQuestions />
        </AppRoute>
        <AppRoute path={ROUTES.newQuestion}>
          <NewQuestion />
        </AppRoute>
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
