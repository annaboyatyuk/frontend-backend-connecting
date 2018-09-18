import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {fetchAllThunk} from '../../action/coffee-action.js';
import Auth from '../Auth.js';

class Dashboard extends Component {

  componentDidMount(){
    this.props.fetchAllThunk();
  }

  render() {
    return (
      <Fragment>
        <h1>Hello World</h1>
        <p>all redux state is below</p>
        <p>{JSON.stringify(this.props.state)}</p>
        <ul>
          {this.props.coffees.map(coffee => {
            return <li key={coffee._id}>{coffee.roast}</li>;

          })}
        </ul>

        <Auth capability='read'><p>can read</p></Auth>
        <Auth capability='update'><p>can update</p></Auth>
        <Auth capability='delete'><p>can delete</p></Auth>
        <Auth capability='create'><p>can create</p></Auth>

        <input type="submit" value='LOGOUT'/>


      </Fragment>
    );
  }
}


const mapStateToProps = state => ({ coffees: state.coffeeReducer });

const mapDispatchToProps = {fetchAllThunk};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
