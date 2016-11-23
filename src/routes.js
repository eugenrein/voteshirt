import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import NotFoundPage from './components/NotFoundPage.js';
import SearchPage from './containers/SearchPage.js'; // eslint-disable-line import/no-named-as-default
import VotePage from './containers/VotePage.js'; // eslint-disable-line import/no-named-as-default
import EmptySearchPage from './containers/EmptySearchPage.js'; // eslint-disable-line import/no-named-as-default
import AllVotedPage from './containers/AllVotedPage.js'; // eslint-disable-line import/no-named-as-default
import FinishVotePage from './containers/FinishVotePage.js'; // eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={SearchPage} />
    <Route path="search" component={SearchPage} />
    <Route path="vote" component={VotePage} />
    <Route path="empty-search" component={EmptySearchPage} />
    <Route path="all-voted" component={AllVotedPage} />
    <Route path="finish-vote" component={FinishVotePage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
