import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { Course, courses } from "./courseData";
import CourseList from "./CourseList";
import CourseDetails from "./CourseDetails";

interface CourseModalContentProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse: Course | null;
  setSelectedCourse: React.Dispatch<React.SetStateAction<Course | null>>;
}

const CourseModalContent: React.FC<CourseModalContentProps> = ({
  isOpen,
  onClose,
  selectedCourse,
  setSelectedCourse, 
}) => {

  const handleLearnMore = (course: Course) => {
    setSelectedCourse(course);
  };

  const handleBack = () => {
    setSelectedCourse(null);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalContent>
        {!selectedCourse ? (
          <>
            <ModalHeader>
              <h2 className="text-lg font-bold">Available Courses</h2>
            </ModalHeader>
            <ModalBody>
              <CourseList courses={courses} onLearnMore={handleLearnMore} />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onClick={onClose}>
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
              <CourseDetails course={selectedCourse} />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" variant="light" onClick={handleBack}>
                Back
              </Button>
              <Button color="danger" variant="light" onClick={onClose}>
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