import React from "react";
import { useNavigate } from "react-router-dom";
import "./Course.css";

const Course = () => {
  const navigate = useNavigate();

  const redirectToCourseOne = () => {
    navigate("/course_one");
  };

  const redirectToCourseTwo = () => {
    navigate("/course_two");
  };

  return (
    <div className="course">
      <h1 className="heading">Our Courses</h1>
      <div className="course_details">
        <h3 className="course_name">Maths Certification</h3>
        <h3 className="course_price">Free</h3>
        <button onClick={redirectToCourseOne}>Enroll</button>
      </div>
      <div className="course_details">
        <h3 className="course_name">Science Certification</h3>
        <h3 className="course_price">Free</h3>
        <button onClick={redirectToCourseTwo}>Enroll</button>
      </div>
    </div>
  );
};

export default Course;
