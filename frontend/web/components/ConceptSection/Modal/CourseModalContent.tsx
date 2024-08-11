import React from 'react';
import { Modal, Button, Card, Chip } from "@nextui-org/react";

const CourseModalContent = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Body>
        <div className="flex gap-4">
          {/* Calculus Card */}
          <Card>
            <Card.Body>
              <Chip color="primary">NEW</Chip>
              <h3>Calculus 1</h3>
              <img src="/api/placeholder/200/150" alt="Calculus icon" />
              <p>Available soon. Get notified.</p>
              <Button color="primary">Notify Me</Button>
            </Card.Body>
          </Card>
          
          {/* Algebra Card */}
          <Card>
            <Card.Body>
              <Chip color="primary">NEW</Chip>
              <h3>Algebra 1</h3>
              <img src="/api/placeholder/200/150" alt="Algebra icon" />
              <p>Available soon. Get notified.</p>
              <Button color="primary">Notify Me</Button>
            </Card.Body>
          </Card>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CourseModalContent;