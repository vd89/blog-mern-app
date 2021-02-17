import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Layout from 'components/Layout';
import CreateBlog from 'components/CreateBlog/CreateBlog';
import About from 'components/About/index';
import Home from 'components/Home/index';
import NotFound from 'components/NotFound';
import Store from 'Redux/Store';
import SingleBlog from 'components/SingleBlog';

import './App.css';

function App() {
  return (
    <Provider store={Store}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={CreateBlog} />
          <Route path="/about" component={About} />
          <Route exact path="/:id" component={SingleBlog} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Provider>
  );
}

export default App;
