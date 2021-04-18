import { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import 'modern-normalize/modern-normalize.css';
import './sass/main.scss';

// import HomePage from "./components/pages/homePage/HomePage";
import AppBar from './components/header/AppBar';

import { routes } from './utils/navigation';

function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<p>Что-то грузится...</p>}>
        <Switch>
          {routes.map(({ path, component, exact }) => (
            <Route key={path} path={path} component={component} exact={exact} />
          ))}
        </Switch>
        <Redirect to="/" />
      </Suspense>

      {/* <HomePage /> */}
    </>
  );
}

export default App;
