import 'App.css';

import { Redirect, Route, Switch } from 'react-router-dom';
import { About, Blog, Home, BlogPost } from 'views';

function Redirection () {
  return <Redirect to='/home' />;
}

function App () {
  return (
    <Switch>
      <Route component={BlogPost} path='/blog/:id' />
      <Route component={Home} path='/home' />
      <Route component={About} path='/about' />
      <Route component={Blog} path='/blog' />
      <Route component={Redirection} path='/' />
    </Switch>
  );
}

export default App;
