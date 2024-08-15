import { Button } from "@nextui-org/react";
import { IoArrowBack } from "react-icons/io5";

interface CourseDetailsProps {
  course: {
    title: string;
    details: {
      topics: string[];
      fullDescription: string;
    };
  };
  onBack: () => void;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ course, onBack }) => {
  return (
    <div className="p-4">
      <Button
        
        color="primary"
        // icon={<IoArrowBack />}
        onClick={onBack}
        className="mb-4"
      >
        Back
      </Button>
      <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
      <p className="mb-4">{course.details.fullDescription}</p>
      <h3 className="text-xl font-semibold mb-2">Course Topics:</h3>
      <ul className="list-disc pl-5 mb-4">
        {course.details.topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;