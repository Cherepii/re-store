import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import BookstoreService from "./services/bookstore-service"
import { BookstoreServiceProvider } from './components/bookstore-services-context';
import ErrorBoundry from './components/error-boundry';
import App from './components/app';

const bookstoreProvider = new BookstoreService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <BookstoreServiceProvider value={bookstoreProvider}>
          <Router>
            <App />
          </Router>
        </BookstoreServiceProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
