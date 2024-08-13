import React from "react";
import {
  Modal,
  ModalContent,
  Card,
  Chip,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

interface CourseModalContentProps {
  isOpen: boolean;
  onClose: () => void;
}

const CourseModalContent: React.FC<CourseModalContentProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
      <ModalHeader>
        <h2 className="text-lg font-bold">Available Courses</h2>
      </ModalHeader>
      <ModalBody>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          
          <Card>
            <div className="p-4">
              <Chip color="primary" variant="flat" size="sm">NEW</Chip>
              <h3 className="text-lg font-bold mt-2">Calculus 1</h3>
               <img 
                src="/api/placeholder/200/150" 
                alt="Calculus icon" 
                className="my-2 rounded-md w-full"
              /> 
              <p className="text-sm mb-2">Available soon. Get notified.</p>
              <Button color="primary" size="sm">Notify Me</Button>
            </div>
          </Card>
          
          <Card>
            <div className="p-4">
              <Chip color="primary" variant="flat" size="sm">NEW</Chip>
              <h3 className="text-lg font-bold mt-2">Algebra 1</h3>
               <img 
                src="/api/placeholder/200/150" 
                alt="Algebra icon" 
                className="my-2 rounded-md w-full"
              /> 
              <p className="text-sm mb-2">Available soon. Get notified.</p>
              <Button color="primary" size="sm">Notify Me</Button>
            </div>
          </Card>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" variant="light" onPress={onClose}>
          Close
        </Button>
      </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CourseModalContent;
