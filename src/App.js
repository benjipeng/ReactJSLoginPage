import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
          <div className="container">
            <Link className="navbar-brand mb-0 h1" to={"/sign-in"}>
              AppCubic
            </Link>
            <div className="navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"/sign-up"}>
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={Signup} />
            </Switch>
          </div>
        </div>
      </div>


      <nav class="navbar fixed-bottom navbar-dark bg-secondary navbar-expand-sm">
        <div className="container">
          <span className="text-center text-white">
            AppCubic ♥️ 2021
          </span>
        </div>
      </nav>
    </Router>
  );
}

// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//             <div className="container">
//               <Link className="navbar-brand" to={"/sign-in"}>
//                 positronX.io
//               </Link>
//               <div
//                 className="collapse navbar-collapse"
//                 id="navbarTogglerDemo02"
//               >
//                 <ul className="navbar-nav ml-auto">
//                   <li className="nav-item">
//                     <Link className="nav-link" to={"/sign-in"}>
//                       Login
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to={"/sign-up"}>
//                       Sign up
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </nav>

//           <div className="auth-wrapper">
//             <div className="auth-inner">
//               <Switch>
//                 <Route exact path="/" component={Login} />
//                 <Route path="/sign-in" component={Login} />
//                 <Route path="/sign-up" component={Signup} />
//               </Switch>
//             </div>
//           </div>
//         </div>
//       </Router>
//     );
//   }
// }

export default App;
