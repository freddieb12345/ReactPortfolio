import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import Home from './pages/Home/home-page';


const client = new ApolloClient({
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home-page" component={Home} />
            </Switch>
          </div>
        </Router>
    </ApolloProvider>
  );
}

export default App;
