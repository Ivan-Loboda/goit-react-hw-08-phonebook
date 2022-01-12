import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from './components/Container';
import { Switch, Redirect } from 'react-router-dom';
import AppBar from './components/AppBar';
import { saveCurrentUser } from './redux/auth/auth-operations';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import authSelectors from './redux/auth/auth-selectors';
import Spinner from './components/Loader';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(saveCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />

        <Container>
          <Switch>
            <Suspense fallback={<Spinner />}>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>

              <PublicRoute
                exact
                path="/users/signup"
                restricted
                redirectTo="/contacts"
              >
                <RegisterView />
              </PublicRoute>

              <PublicRoute
                exact
                path="/users/login"
                restricted
                redirectTo="/contacts"
              >
                <LoginView />
              </PublicRoute>

              <PrivateRoute path="/contacts" redirectTo="/users/login">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
            <Redirect to="/" />
          </Switch>
        </Container>
      </>
    )
  );
}

export default App;
