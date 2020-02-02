import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { users, currrentUser } from '../Redux/actions/authActions'
import Navbar from './Navbar';
import firebase from '../firebase';
import classes from './Welcome.module.scss'

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pass: '',
      correct: false
    }
  }

  componentDidMount() {
    const { allData } = this.props;
    console.log(allData);
    firebase.database().ref('users').push(allData);
  }

  checkPassword() {
    this.setState({
    })
  }

  render() {
      let { curr } = this.props;
    return (
      <div className={classes.Location}>
        <Navbar shouldMove={true} />
        <h1 className={classes.Heading}>Dear {curr.name},</h1>
        <br/>
        <h3 className={classes.Writing}>Welcome to your exclusive guide to our wedding. <br/>
        Please be sure to familiarise yourselves with the day's events. In particular, please note that time of the reception has now changed to 3pm<br/>
        Also, we would like to remind you that we have arranged for photographers and we will be sure to share all of the day's photographs with our guests.<br/>
        For this reason, we request that your cameras are "unplugged".<br/>
        We hope you have a great day.<br/>
        Lots of Love,<br/>
        Sarah {'&'} Zaid

         </h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    // console.log("mapToState", state.authReducer)
    return {
      user: state.authReducer.user,
      curr: state.authReducer.curr
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      users: (user) => dispatch(users(user)),
      currrentUser: (user) => dispatch(currrentUser(user)),
      //invitation: (guestNum, attendEvent) => dispatch(invitation(guestNum, attendEvent))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Welcome);