import React from "react";
import { Course } from "./courseData";
import CourseCard from "./CourseCard";

interface CourseListProps {
  courses: Course[];
  onLearnMore: (course: Course) => void;
}

const CourseList: React.FC<CourseListProps> = ({ courses, onLearnMore }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} onLearnMore={onLearnMore} />
      ))}
    </div>
  );
};

export default CourseList;