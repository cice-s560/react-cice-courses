import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";

const Catalog = props => (
  <section>
    <header>
      <Typography variant="h2">Cursos en CICE</Typography>
    </header>
    <article>
      <ul>
        {props.courses.map((course, index) => (
          <li key={index}>{course.name}</li>
        ))}
      </ul>
    </article>
  </section>
);

const mapStateToProps = state => ({
  courses: state.courses.items
});

export default connect(mapStateToProps)(Catalog);
