import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchColleges from '../../store/college/actions/fetch_colleges';
import SmartTable from './SmartTable';
import CollegeNameForm from './CollegeNameForm';
import MapContainer from './MapContainer';

class CollegesContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePageNumberClick = this.handlePageNumberClick.bind(this);
    this.state = {
      name: null
    }
  }

  handleSearch(name) {
    this.setState({name: name});
    this.props.fetchColleges({name: name});
  }

  handlePageNumberClick(page) {
    const args = { name: this.state.name, page: page };
    this.props.fetchColleges(args);
  }

  render() {
    const {
      isFetching,
      isError,
      errorMessage,
      colleges,
      collegeMeta,
      lat,
      lng
    } = this.props;
    const isEmpty = colleges.length === 0;

    if (this.state.name !== null){
      if (isEmpty && isFetching) {
        return (
          <div>
            <CollegeNameForm handleSearch={this.handleSearch} />
            <span>Loading...</span>
          </div>
        );
      }
      if (isError) {
        return (
          <div>
            <CollegeNameForm handleSearch={this.handleSearch} />
            <span>{errorMessage}</span>
          </div>
        );
      }
      if (isEmpty) {
        return (
          <div>
            <CollegeNameForm handleSearch={this.handleSearch} />
            <div className ="default-div"><h5>No colleges found with that name.</h5><h6>Try a different name.</h6></div>
          </div>
        );
      }
      console.log("Lat: ", lat);
      console.log("Lng: ", lng);
      return (
        <div>
          <div className="col-12">
            <CollegeNameForm handleSearch={this.handleSearch} />
          </div>
          
          <div className="col-12">
            <SmartTable
              colleges={colleges}
              collegeMeta={collegeMeta}
              handlePageNumberClick={this.handlePageNumberClick}
            />
          </div>
          <br />
          <div className="col-8 offset-2">
            <MapContainer lat={lat} lng={lng} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <CollegeNameForm handleSearch={this.handleSearch} />
        </div>
      );
    }
  }
}
function mapStateToProps(state) {
  return {
    colleges: state.college.colleges,
    lat: state.college.lat,
    lng: state.college.lng,
    collegeMeta: state.college.meta,
    isFetching: state.college.isFetching,
    isError: state.college.isError,
    errorMessage: state.college.errorMessage
  };
}
export default connect(mapStateToProps, { fetchColleges })(CollegesContainer);