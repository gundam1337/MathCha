import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Course } from "./courseData";

interface CourseDetailsProps {
  course: Course;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ course }) => {
  return (
    <>
      <p className="mb-4">{course.details.fullDescription}</p>
      <h3 className="text-md font-semibold mb-2">Course Topics</h3>
      <Accordion isCompact>
        {course.details.topics.map((topic, index) => (
          <AccordionItem key={index} title={topic}>
            <p>Detailed information about {topic} goes here.</p>
            <p>You can add more specific content for each topic as needed.</p>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default CourseDetails;