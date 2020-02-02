import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { users } from '../Redux/actions/authActions'
import Navbar from './Navbar';
import firebase from '../firebase';
import classes from './SeatingPlan.module.scss'

class SeatingPlan extends Component {
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
    return (
      <div className={classes.Location}>
         <Navbar shouldMove={true} />
        {/* <h1 className={classes.Heading}>Seating Plan</h1> */}
        <div className={classes.allWriting}>
        <p className={classes.Writing}>Table 1</p>
        <br/>
        <p className={classes.Writing}>Farzana aunty,  Hamda aunty, Khadija aunty, Khala ammi, Nighat aunty, Rehana aunty, Seema aunty, Shamim aunty, Sultana aunty</p>
        <br/>
        <p className={classes.Writing}>Table 2</p>
        <br/>
        <p className={classes.Writing}>Ambren, Duke, Faiz, Hiba, Ibrahim, Imaan, Mariam, Nav, Shazi, Umair</p>
        <br/>
        <p className={classes.Writing}>Table 3</p>
        <br/>
        <p className={classes.Writing}>Adam, Amine, Amru, Anam, Fatima, Manoor, Mona, Omar, Zareena, Zurrar</p>
        <br/>
        <p className={classes.Writing}>Table 4</p>
        <br/>
        <p className={classes.Writing}>Amr, Arwa, Aseel, Eric, U. Hassan, Laila, Ragiya, Salam, Taliya, Tay</p>
        <br/>
        <p className={classes.Writing}>Table 5</p>
        <br/>
        <p className={classes.Writing}>Antonia, Bakre, Dana, Hawra, Karen, Liv, Rajeev, Shaikh, Zena</p>
        <br/>
        <p className={classes.Writing}>Table 6</p>
        <br/>
        <p className={classes.Writing}>Aqsa, Hagir, Isma, Israa, Khalid, Maha, Minan, Sara, Aunty Shahnaz</p>
        <br/>
        <p className={classes.Writing}>Table 7</p>
        <br/>
        <p className={classes.Writing}>Aqil, Baby Ayyub, Benish, Bushra, Faheen, Haroon, Ruby, Shabnam, Tabassum, Tariq</p>
        <br/>
        <p className={classes.Writing}>Table 8</p>
        <br/>
        <p className={classes.Writing}>Iram, Maani, Majda, Mariam, Raghib, Rizwana, Safder, Saira, Shams, Subuhi</p>
        <br/>
        <p className={classes.Writing}>Table 9</p>
        <br/>
        <p className={classes.Writing}>Asma, U. Ateeq, Faisal, U. Hussain, Huzayfa, Nawaab mamu, Sana, Zia, Zafar, Zoya</p>
        <br/>
        <p className={classes.Writing}>Table 10</p>
        <br/>
        <p className={classes.Writing}>Akeel, Andrew, Bimal, Jahangir, Khurrum, Nada, Nora, Sharjeel, Shereef, Vanessa</p>
        <br/>
        <p className={classes.Writing}>Table 11</p>
        <br/>
        <p className={classes.Writing}>Baby Emmy, Fots, Frank, Joanne, Kashif, Michael, Nav, Nima, Sulman, Tom</p>
        <br/>
        <p className={classes.Writing}>Table 12</p>
        <br/>
        <p className={classes.Writing}>Abdullah, Ahmed, Atif, Mohammed, Moon, Saima, Saj, Sanam, Zara</p>
        <br/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SeatingPlan);
