import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { users, currrentUser } from '../Redux/actions/authActions'
import swal from 'sweetalert';
import classes from './Main.module.scss';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pass: '',
      users: [
        { name: "Andrew", pass: "bossmangetsbaregal" },
        { name: "Jahangir", pass: "imissdoug" },
        { name: "Akeel", pass: "exfunkylookingguy" },
        { name: "Bimal", pass: "iwillbehaveatwedding" },
        { name: "Kasheef", pass: "iwillbesober" },
        { name: "Atif", pass: "kasheefsdesignateddriver" },
        { name: "Sharjeel", pass: "khurrumsdesignateddriver" },
        { name: "Mohammed", pass: "ilfordsmiketyson" },
        { name: "Michael", pass: "iusedtobehench" },
        { name: "Ishita", pass: "iamishita" },
        { name: "Mansoor", pass: "saltismylife" },
        { name: "Kashif", pass: "iwillspeaknicely" },
        { name: "Khurrum", pass: "willtrytobepunctual" },
        { name: "Shereef", pass: "guestofhonour" },
        { name: "Nada", pass: "seatednexttokhurrum" },
        { name: "Nora", pass: "mamunisbae" },
        { name: "Frank", pass: "frankisthebaws" },
        { name: "Tom", pass: "nomad" },
        { name: "Maha", pass: "iammaha" },
        { name: "Minan", pass: "iamminan" },
        { name: "Raman", pass: "iamraman" },
        { name: "Liv", pass: "iamliv" },
        { name: "Karen", pass: "iamkaren" },
        { name: "Rajeev", pass: "iamrajeev" },
        { name: "Naomi", pass: "iamnaomi" },
        { name: "Salam", pass: "iamsalam" },
        { name: "Arwa", pass: "iamarwa" },
        { name: "Hagir", pass: "iamhagir" },
        { name: "Hawra", pass: "iamhawra" },
        { name: "Isma and family", pass: "iamisma" },
        { name: "Mona", pass: "iammona" },
        { name: "Salma", pass: "iamsalma" },
        { name: "Hend and Amine", pass: "iamhend" },
        { name: "Amru", pass: "iamamru" },
        { name: "Uncle Hassan", pass: "iamhassan" },
        { name: "Tay", pass: "iamtay" },
        { name: "Adam", pass: "iamadam" },
        { name: "Sulman", pass: "iamsully"},
        { name: "Neema", pass: "iamneema"},
        { name: "Ragya", pass: "iamragya"},
      ]
    }
  }
//total of above and their guests + salam +ahmed= 65
//benish+rizwana+tbjaj+shabnam+khala ammi+farzanaaunty+nawabmamu+us+haroon+ali+
//3+3+4+2+4+2+3+3+4+4+1
  checkPassword() {
    const { users, pass } = this.state
    var auth = false
    for (var data of users) {
      if (data.pass === pass) {
        this.props.currrentUser(data)
        auth = true
        break
      }
    }
    if (!auth) {
      swal("Please Enter Correct Password")
    }
    else {
      this.props.history.push('/Welcome')
    }
  }

  render() {
    const { pass } = this.state
    return (
      <div className={classes.Background}>
        
          <p className={classes.SarahAndZaid} rel="stylesheet"><strong>Welcome to Sarah {'&'} Zaid's Wedding </strong></p>
          <p className={classes.Date}>13th October 2019</p>
   
        <div className={classes.Form1}>
          {/* <h1 className={classes.Heading}>Please Enter your Password</h1> */}
          <div className={classes.InputField}>
            <input type="password" placeholder="Please enter your password here" 
            value={pass} onChange={(e) => this.setState({ pass: e.target.value })} className="input1" />
          
          {pass && 
          <div className={classes.ContinueButton}>
            <button className={classes.button} 
              onClick={() => this.checkPassword()}>Continue
            </button>
          </div>}</div>
        </div>
          
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("mapToState",state.authReducer)
  return {
    guestNum: state.authReducer.guestNum
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    users: (user) => dispatch(users(user)),
    currrentUser: (user) => dispatch(currrentUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
