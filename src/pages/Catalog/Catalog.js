import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { addCourse } from "../../state/actions/courses-actions";
import CircularProgress from "@material-ui/core/CircularProgress";

export class CatalogComponent extends React.Component {
  state = {
    name: ""
  };

  handleSubmit(e) {
    e.preventDefault();

    this.props.createCourse(this.state.name);
  }

  updateName(value) {
    this.setState({ name: value });
  }

  render() {
    return (
      <section>
        <header>
          <Typography variant="h2">Cursos en CICE</Typography>
        </header>
        <article>
          <ul>
            {this.props.courses &&
              this.props.courses.map((course, index) => (
                <li key={index}>{course.name}</li>
              ))}
          </ul>
        </article>
        {this.props.isLoading && <CircularProgress />}
        <footer>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input type="text" onKeyUp={e => this.updateName(e.target.value)} />
            <input type="submit" value="Create" />
          </form>
        </footer>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  courses: state.courses.items,
  isLoading: state.courses.isLoading
});

const mapDispatchToProps = dispatch => ({
  createCourse: name => dispatch(addCourse({ id: Math.random(), name }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogComponent);
