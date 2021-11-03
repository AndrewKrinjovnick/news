import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import 'normalize.css';
import './stylesheet/global.scss';
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <AppRouter />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
