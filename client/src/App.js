import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Layout from 'components/Layout';
import CreateBlog from 'components/CreateBlog';
import About from 'components/About';
import Home from 'components/Home';
import NotFound from 'components/NotFound';
import Store from 'Redux/Store';

import './App.css';

function App() {
  return (
    <Provider store={Store}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/createBlog" component={CreateBlog} />
          <Route path="/about" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Provider>
  );
}

export default App;
