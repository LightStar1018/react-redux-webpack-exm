import React, { Component,useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../components/App.css';

// Actions being imported
import { getTeam } from '../actions/planTeamActions';

// This is my React class that has the basic code to get my example to render
// I had to export the class like this so Jest could read it
export class TeamAmerica extends Component {
  constructor(props) {
    super(props)
    // this.zipcode={zipcode:""}
  }
  componentDidMount() {
    this.props.getTeam();
  }

  render() {
    // const initialCityState = { city: "", state: "" };
    // const [cityState, setCityState] = useState(initialCityState);
    // const [zipcode, setZipcode] = useState("");
    return (
      <div>
        <h1>City/State Lookup Tool</h1>
      <form action="" className="form-data">
        <label htmlFor="zip">Type Zip Code Here</label>
        <input
          className="zip"
       
          placeholder="XXXXX"
          type="text"
          name="zip"
          id="zip"
        />
        <label htmlFor="city">City</label>
        <input
          className={`city`}
          
          type="text"
          name="city"
          disabled
          id="city"
        />
        <label htmlFor="state">State</label>
        <input
          className={`state`}
         
          type="text"
          name="state"
          disabled
          id="state"
        />
      </form>
      <pre>
        <code>
          {/* {JSON.stringify({
            zipcode: zipcode,
            city: cityState.city,
            state: cityState.state,
          })} */}
        </code>
      </pre>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    team: state.planTeam.team,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTeam }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamAmerica);
