import { Route, Switch } from "react-router-dom";
import Form from '../src/components/Form/Form';
import Palette from './components/Palette/Palette';
import Layout from './components/Layout/Layout';


function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/'><Form /></Route>
        <Route exact path='/palette'><Palette /></Route>
      </Switch>
    </Layout>
  );
}

export default App;
