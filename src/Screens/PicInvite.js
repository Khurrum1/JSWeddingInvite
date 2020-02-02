import classes from './PicInvite.module.scss'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { users } from '../Redux/actions/authActions'
import Navbar from './Navbar';
import firebase from '../firebase';


var PicInvite = () => {
  
    
  return (
      <div className={classes.Main}>
          <Navbar shouldMove={true} />
        <div className={classes.PictureContainer}>
        </div>
      </div>
  )
}

const mapStateToProps = (state) => {
    console.log("mapToState", state.authReducer)
    return {
      allData: state.authReducer,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      users: (user) => dispatch(users(user)),
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(PicInvite);
  
  