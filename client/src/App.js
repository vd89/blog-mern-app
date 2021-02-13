import Layout from 'components/Layout';
import CreateBlog from 'components/CreateBlog';
import Home from 'components/Home';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/createBlog" component={CreateBlog} />
      </Switch>
    </Layout>
  );
}

export default App;
