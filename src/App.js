import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './Include/bootstrap';
import './App.css';
import { AppNav } from './Components/EmployeeNav.component';
import { SignInComponent } from './Components/SignIn.component.js/SignIn.component';
import { AllPreviousReimbursementComponent } from './Components/AllPreviousReimbursements.component/AllPreviousReimbursement.component';
import { AddNewReimbursementComponent } from './Components/AddNewReimbursement.component/AddNewReimbursement.component';
import { AllReimbursementsComponent } from './Components/AllReimbursements.component.js/AllReimbursements.component';
import { HomeComponent } from './Components/Home/Home.component';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <>
        <AppNav />
        <div id="main-content-container">
          <Switch>
           <Route path='/sign-in' component={SignInComponent}/>
           <Route path='/user/id' component={AllPreviousReimbursementComponent}/>
           <Route path='/user/add' component={AddNewReimbursementComponent}/>
           <Route path='/user/home' component={HomeComponent}/>
           <Route path='/user' component={AllReimbursementsComponent}/>
           <Route component={SignInComponent}/>
          </Switch>
        </div>
      </>
      </BrowserRouter>
    );
  }
}

export default App;
