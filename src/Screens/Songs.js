import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { users } from '../Redux/actions/authActions'
import Navbar from './Navbar';
import firebase from '../firebase';
import classes from './Songs.module.scss';

class Songs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      song: '',
      artist: '',
      add: false,
      arr: [],
      view: false,
      disable: true,
      like: {},
      abc: true,
      submitted: false
    }
  }

  componentDidMount() {
    const { allData } = this.props
    firebase.database().ref('users').push(allData);

  }

  componentWillMount() {
    this.callData()
  }

  async callData() {
    const { arr } = this.state
    var { like } = this.state
    var i = 0
    await firebase.database().ref('songs').on('child_added', (val) => {
      var value = val.val()
      like[i] = false
      // console.log(this.state)
      arr.push(value)
      i++;
    })
    // console.log('arr', arr)
    this.setState({ arr, disable: false, like })
  }

  addSong() {
    const { song, artist, submitted } = this.state
    var obj = {
      song: song,
      artist: artist,
      like: 0
    }
    this.setState({ abc : !this.state.abc, submitted: true })
    firebase.database().ref('songs').push(obj)
  }

  likeUpdate(i) {
    var { like } = this.state;
    like[i] = !like[i]
    this.setState({ like })
  }

  render() {
    const { song, artist, add, disable, view, submitted } = this.state
    var { like } = this.state
    return (
        <div className={classes.SongsContainer} >
         <Navbar shouldMove={true} />
          <div className={classes.PageContent}>
            <h1 className={classes.Writing}>The day's events</h1>
            <p className={classes.Bits}>11:15am - Guests arrive</p><br/>
            <p className={classes.Bits}>Midday - Ceremony and Nikkah</p><br/>
            <p className={classes.Bits}>1pm - Drinks and pics</p><br/>
            <p className={classes.Bits}>3pm - Take a seat for food and speeches</p><br/>
            <p className={classes.Bits}>3:15pm - Bride and Groom entrance with Zaffah</p><br/>
            <p className={classes.Bits}>7pm - Cake and party time</p><br/>
            <p className={classes.Bits}>9pm - Time to refuel</p><br/>
            <p className={classes.Bits}>Midnight - We bid you goodnight</p><br/>
          </div>
    </div>
    )
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Songs);
