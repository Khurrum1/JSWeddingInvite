import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { users, currrentUser, invitation } from '../Redux/actions/authActions'
import Navbar from './Navbar';
import classes from './Invitation.module.scss'

class Invitation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guest: false,
      attendEvent: "cermony",
      guestNum: 0,
      attend: true,
      shouldMoveToOtherPages: true,

    }
  }
 

  selectOpt(val) {
    const { guestNum, attendEvent } = this.state
    if (val === "no") {
      this.setState({ guest: false, attend: false}, () => {
        setTimeout(() =>{
          window.location.replace('/')
        }, 10000)
      })
    }
    else {
      this.setState({
        attendEvent: val,
        attend: true,
        shouldMoveToOtherPages: false
      })
    }
    //this.props.invitation(guestNum, attendEvent)
    
  }

  updatePage() {
    const { guestNum, attendEvent } = this.state
    this.setState({shouldMoveToOtherPages: true})
    this.props.invitation(guestNum, attendEvent)
    this.props.history.push('/menu')
  }


  render() {
    const { guestNum, guest, attend, shouldMoveToOtherPages } = this.state
    const { curr } = this.props
    return (
      <div className={classes.InvitationContainer}>
        <Navbar shouldMove={shouldMoveToOtherPages} />
        
          <div className={classes.Heading}>
          </div>
          <h2 className={classes.Attending}>Will you be attending?</h2>
          <div className={classes.DropDown}>
            <select classname={classes.ScrollDownMenu} onChange={(e) => this.selectOpt(e.target.value)}>
              <option classname={classes.ScrollDownMenu} value="cermony">Cermony</option>
              <option classname={classes.ScrollDownMenu} value="reception">Reception</option>
              <option classname={classes.ScrollDownMenu} value="both">Both</option>
              <option classname={classes.ScrollDownMenu} value="no">No</option>
            </select>
          </div>
          <br />
          <br />
          {
            attend ? 
          <div className={classes.HowManyGuests}>
            <h2 className={classes.HowManyGuestsText}>How many guests will be attending with you?</h2>
            <input placeholder="Enter number" 
             onChange={(e) => this.setState({ guestNum: e.target.value })} className="input2" />
            <br />
            <button className={classes.button}  onClick={() => this.updatePage()}>RSVP</button>
          </div> : null }
          { !attend ? <h3 className={classes.ThankYou}>Thank you</h3> : null
          }
       
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
    invitation: (guestNum, attendEvent) => dispatch(invitation(guestNum, attendEvent))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invitation);
