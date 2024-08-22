"use client";

//FIXME : the modal in the mobil not in the center

import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  Card,
  Chip,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";

//import CourseDetails from "../CourseDetails/CourseDetails";

interface CourseModalContentProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Course {
  id: string;
  title: string;
  description: string;
  isNew: boolean;
  details: {
    topics: string[];
    fullDescription: string;
  };
}

const courses: Course[] = [
  {
    id: "calculus",
    title: "Calculus 1",
    description: "Introduction to differential calculus.",
    isNew: true,
    details: {
      topics: [
        "Limits and Continuity",
        "Derivatives",
        "Applications of Derivatives",
        "Integration",
        "Applications of Integration",
      ],
      fullDescription: "Calculus 1 is an introductory course to differential calculus. This course provides a strong foundation in calculus, which is essential for many fields in science, engineering, and mathematics.",
    },
  },
  {
    id: "algebra",
    title: "Algebra 1",
    description: "Fundamental algebraic concepts.",
    isNew: true,
    details: {
      topics: [
        "Linear Equations",
        "Inequalities",
        "Functions",
        "Exponential and Logarithmic Functions",
        "Polynomials",
      ],
      fullDescription: "Algebra 1 covers fundamental algebraic concepts. This course is crucial for developing problem-solving skills and preparing for more advanced mathematics courses.",
    },
  },
];

const CourseModalContent: React.FC<CourseModalContentProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleLearnMore = (course: Course) => {
    setSelectedCourse(course);
  };

  const handleBack = () => {
    setSelectedCourse(null);
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      size="3xl"
    >
      <ModalContent>
        {!selectedCourse ? (
          <>
            <ModalHeader>
              <h2 className="text-lg font-bold">Available Courses</h2>
            </ModalHeader>
            <ModalBody>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courses.map((course) => (
                  <Card key={course.id}>
                    <div className="p-4">
                      {course.isNew && (
                        <Chip color="primary" variant="flat" size="sm">
                          NEW
                        </Chip>
                      )}
                      <h3 className="text-lg font-bold mt-2">{course.title}</h3>
                      <p className="text-sm mb-2">{course.description}</p>
                      <Button color="primary" size="sm" onPress={() => handleLearnMore(course)}>
                        Learn More
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        ) : (
          <>
            <ModalHeader>
              <h2 className="text-lg font-bold">{selectedCourse.title}</h2>
            </ModalHeader>
            <ModalBody>
              <p className="mb-4">{selectedCourse.details.fullDescription}</p>
              <h3 className="text-md font-semibold mb-2">Course Topics</h3>
              <Accordion>
                {selectedCourse.details.topics.map((topic, index) => (
                  <AccordionItem key={index} title={topic}>
                    <p>Detailed information about {topic} goes here.</p>
                    <p>You can add more specific content for each topic as needed.</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" variant="light" onPress={handleBack}>
                Back
              </Button>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CourseModalContent;