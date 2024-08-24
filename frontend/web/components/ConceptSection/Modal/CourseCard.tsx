import React from "react";
import { Card, Chip, Button } from "@nextui-org/react";
import { Course } from "./courseData";

interface CourseCardProps {
  course: Course;
  onLearnMore: (course: Course) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onLearnMore }) => {
  return (
    <Card>
      <div className="p-4">
        {course.isNew && (
          <Chip color="primary" variant="flat" size="sm">
            NEW
          </Chip>
        )}
        <h3 className="text-lg font-bold mt-2">{course.title}</h3>
        <p className="text-sm mb-2">{course.description}</p>
        <Button color="primary" size="sm" onClick={() => onLearnMore(course)}>
          Learn More
        </Button>
      </div>
    </Card>
  );
};

export default CourseCard;