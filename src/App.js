import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import 'normalize.css';
import './stylesheet/global.scss';
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="wrapper">
          <AppRouter />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
