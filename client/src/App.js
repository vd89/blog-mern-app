import Layout from 'components/Layout';
import CreateBlog from 'components/CreateBlog';
import About from 'components/About';
import Home from 'components/Home';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from 'components/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/createBlog" component={CreateBlog} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
