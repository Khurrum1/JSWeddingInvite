import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { users } from '../Redux/actions/authActions'
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.scss';
import swal from 'sweetalert';

class Navbar extends Component {
  debugger;
  constructor(props) {
    super(props)
    this.state = {
      moveToOtherPages: props.shouldMove
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ moveToOtherPages: nextProps.shouldMove });  
  }

  handleClick = (e) => {
    const { moveToOtherPages } = this.state
    if(!moveToOtherPages){
       e.preventDefault()
       swal("Please click the RSVP button to continue")
    }
  }
  render() {
    return (
      // <div>
      //   <link className={classes.Link} rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
      //   <nav className={classes.NavBar}>
          
      //       <div className={classes.WholeNav}>
      //         {/* <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
      //           <span className="icon-bar"></span>
      //           <span className="icon-bar"></span>
      //           <span className="icon-bar"></span>
      //         </button> */}
      //         <Link className={classes.NavButton} href="https://fonts.googleapis.com/css?family=Sofia" to="/invitation">Invitation</Link>
      //         <Link className={classes.NavButton} href="https://fonts.googleapis.com/css?family=Sofia" to="/location">Location</Link>
      //         <Link className={classes.NavButton} href="https://fonts.googleapis.com/css?family=Sofia" to="/menu">Menu</Link>

      //       </div>
      //       {/* <div className="collapse navbar-collapse" id="myNavbar">
      //         <ul className="nav navbar-nav">
      //         </ul>
      //         <ul className="nav navbar-nav navbar-right">
      //           <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
      //           <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
      //         </ul>
      //       </div> */}
          
      //   </nav>

      //   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
      //   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      //   <script src="https://fonts.googleapis.com/css?family=Sofia"></script>
      // </div>
      <div className={classes.TopNavContainer}>
        {/* <nav className={classes.NavBar} > */}
          <div className={classes.NavLinkContainer}>
          <NavLink to="/Welcome" onClick={this.handleClick} className={classes.NavButton} activeClassName={classes.Active} exact>Welcome</NavLink>
            <NavLink to="/invitation" onClick={this.handleClick} className={classes.NavButton} activeClassName={classes.Active} exact>Invitation</NavLink>
            
            <NavLink to="/menu" onClick={this.handleClick} className={classes.NavButton} activeClassName={classes.Active}>Menu</NavLink>
            <NavLink to="/orderOfTheDay" onClick={this.handleClick} className={classes.NavButton} activeClassName={classes.Active}>Day's events</NavLink>
            

          </div>
      
    
        {/* </nav> */}

      </div>


    )
  }
}








const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    users: (user) => dispatch(users(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
