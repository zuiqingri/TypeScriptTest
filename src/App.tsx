//import React from 'react';
// import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import RouterPropTest from "./routes/RouterPropTest";
import RouterPropTestResult from "./routes/RouterPropTestResult";
import StudentList from "./routes/StudentList";
import StudentDetail from "./routes/StudentDetail";
import Nav from "./components/Nav";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/routerproptest" component={RouterPropTest} />
        <Route path="/routerproptestresult" component={RouterPropTestResult} />
        <Route path="/studentlist" component={StudentList} />
        <Route path="/studentlist/:id" component={StudentDetail} />
      </Router>
    </>
  );
}

export default App;
