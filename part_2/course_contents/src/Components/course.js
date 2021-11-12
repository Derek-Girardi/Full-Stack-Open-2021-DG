import React from "react";

const Header = ({ courses }) => {
  return <h2>{courses}</h2>;
};

const Total = ({ courses }) => {
  const sum = courses.reduce((a, b) => a + b.exercises, 0);
  return (
    <p>
      <strong>Total of {sum} exercises</strong>
    </p>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      <>
        {parts.map((parts) => (
          <Part key={parts.id} part={parts.name} exercises={parts.exercises} />
        ))}
      </>
    </div>
  );
};

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((courses) => (
        <div>
          <Header key={courses.id} courses={courses.name} />

          <Content key={courses.id} parts={courses.parts} />

          <Total key={courses.id} courses={courses.parts} />
        </div>
      ))}
    </>
  );
};

export default Course;
