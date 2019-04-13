import React from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import { findCourse } from "../../state/actions/courses-actions";

class MyCourses extends React.Component {
  handleChange(value) {
    this.props.fetchMatchedCourses(value);
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h2">Mis cursos en CICE</Typography>

        <input
          list="courses"
          autocomplete="off"
          onKeyUp={e => this.handleChange(e.target.value)}
        />

        <datalist id="courses">
          {this.props.foundCourses.map(course => (
            <option>{course.name}</option>
          ))}
        </datalist>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  courses: state.courses.items,
  foundCourses: state.courses.found
});

const mapDispatchToProps = dispatch => ({
  fetchMatchedCourses: needle => dispatch(findCourse(needle))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCourses);
