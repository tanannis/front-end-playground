import React from "react";
import { connect } from "react-redux";
import { fetchUpdatedCampus } from "./redux";

class UpdateCampusForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      description: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateCampusData(this.state);
    this.setState({
      name: "",
      address: "",
      description: "",
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Name"
            />

            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
              placeholder="Address"
            />

            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              placeholder="Description"
            />
            <button type="submit">Submit Update</button>
          </p>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCampusData: (id, input) => dispatch(fetchUpdatedCampus(id, input)),
  };
};

/*
  const mapStateToProps = (state) => {
    return {
      campus: state.singleCampus,
    };
  };
*/

export default connect(null, mapDispatchToProps)(UpdateCampusForm);
