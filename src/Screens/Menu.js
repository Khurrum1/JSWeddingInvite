import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { users,requirements } from '../Redux/actions/authActions'
import Navbar from './Navbar';
import classes from './Menu.module.scss';

class Menu extends Component {
  constructor(props){
    super(props)
    this.state = {
      textBox: '',
    }
  }

  updatePage(){
    const { textBox } = this.state
    this.props.requirements(textBox)
    this.props.history.push('./Songs')
  }

  render() {
    const { textBox } = this.state
    return (
      <div className="invitation">
        <Navbar shouldMove={true} />
        <div className={classes.MenuContainer}>
          <h3 className={classes.allWriting}>Starters</h3>
          <p className={classes.allWriting2}>Seekh kebab</p>
          <p className={classes.allWriting2}>Bihari kebab</p>
          <p className={classes.allWriting2}>Chicken tikka</p>
          <p className={classes.allWriting2}>Chana chaat</p>
          <br/>
          <h3 className={classes.allWriting}>Mains</h3>
          <p className={classes.allWriting2}>Nihari</p>
          <p className={classes.allWriting2}>Lamb biryani</p>
          <p className={classes.allWriting2}>Chicken handi</p>
          <p className={classes.allWriting2}>Aloo paalak</p>
          <br/>
          <h3 className={classes.allWriting}>Dessert</h3>
          <p className={classes.allWriting2}>Ice-cream served with:</p>
          <p className={classes.allWriting2}>Gaajar halwa</p>
          <p className={classes.allWriting2}>Gulaab jaamun</p>
          <br/>


          
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    console.log("mapToState",state.authReducer)
    return {
      user: state.authReducer.user,
      curr: state.authReducer.curr,
      guestNum: state.authReducer.guestNum,
      attend: state.authReducer.attend
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      users: (user) => dispatch(users(user)),
      requirements: (req) => dispatch(requirements(req)),
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Menu);
