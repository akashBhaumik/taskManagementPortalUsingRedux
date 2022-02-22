
import React from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';

// import UserRoute from './routes/UserRoute'

import Header from './components/shared/Header/Header.js'
import Footer from './components/shared/Footer/Footer.js'
import TaskManager from './components/TaskManager/TaskManager.js'


function App() {
  return (
    <div className="container">
            <div className="row">
                <div className="col">
                    <Header />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <TaskManager />
                    {/* <Login /> */}
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Footer />
                </div>
            </div>
        </div>
  );
}

export default App;
