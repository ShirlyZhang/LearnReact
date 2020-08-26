import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import ClassConponent from './pages/ClassConponent';
// import { FunctionComponent } from './pages/FunctionComponent';
// import SetStatePage from './pages/SetStatePage';
// import LifeCyclePage from './pages/LifeCyclePage';
// import HomePage from './pages/HomePage';
// import UserPage from './pages/UserPage';
import ReduxPage from './pages/ReduxPage';


function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return <div className="App">
      {/* <ClassConponent /> */}
      {/* <FunctionComponent /> */}
      {/* <SetStatePage /> */}
      {/* <LifeCyclePage /> */}
      {/* <HomePage /> */}
      {/* <UserPage /> */}
      <ReduxPage />
  </div>
}

export default App;
