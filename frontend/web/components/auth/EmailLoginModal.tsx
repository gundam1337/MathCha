import React from 'react';
import { ModalHeader, ModalBody, ModalFooter, Input, Checkbox, Link, Button } from "@nextui-org/react";
import { MdEmail, MdLock } from 'react-icons/md';

interface EmailLoginModalProps {
  onClose: () => void;
}

const EmailLoginModal: React.FC<EmailLoginModalProps> = ({ onClose }) => {
  return (
    <>
      <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
      <ModalBody>
        <Input
          autoFocus
          endContent={
            <MdEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          label="Email"
          placeholder="Enter your email"
          variant="bordered"
        />
        <Input
          endContent={
            <MdLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          label="Password"
          placeholder="Enter your password"
          type="password"
          variant="bordered"
        />
        <div className="flex py-2 px-1 justify-between">
          <Checkbox
            classNames={{
              label: "text-small",
            }}
          >
            Remember me
          </Checkbox>
          <Link color="primary" href="#" size="sm">
            Forgot password?
          </Link>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" variant="flat" onPress={onClose}>
          Close
        </Button>
        <Button color="primary" onPress={onClose}>
          Sign in
        </Button>
      </ModalFooter>
    </>
  );
};

export default EmailLoginModal;