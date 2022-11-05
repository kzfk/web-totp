import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Layout from './theme/layout/layout';
import Landing from './pages/landing/landing';

const useStyles = makeStyles((theme) => ({
  app: {
    backgroundColor: theme.palette.background.main,
  },
}));

function CustomRoute({ path, component, exact = true }) {
  return (
    <Route exact={exact} path={path}>
      <Layout>
        {component}
      </Layout>
    </Route>
  );
}

function App() {
  const classes = useStyles();
  const prefix = process.env.REACT_APP_PUBLIC_PREFIX || '/';
  document.title = `Web - TOTP ${prefix}`;
  return (
    <Router basename={prefix} className={classes.app}>
      <Switch>
        <CustomRoute path="/" component={<Landing />} />
      </Switch>
    </Router>
  );
}

export default App;
