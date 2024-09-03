"use client";

import { useState } from 'react';
import { Input, InputProps } from '@nextui-org/react';
import { EyeFilledIcon } from './EyeFilledIcon';
import { EyeSlashFilledIcon } from './EyeSlashFilledIcon';

const PasswordInput: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = (): void => setIsVisible((prev) => !prev);

  const endContent: InputProps['endContent'] = (
    <button
      className="focus:outline-none"
      type="button"
      onClick={toggleVisibility}
      aria-label="toggle password visibility"
    >
      {isVisible ? (
        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
      ) : (
        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
      )}
    </button>
  );

  return (
    <Input
      label="Password"
      variant="bordered"
      placeholder="Enter your password"
      endContent={endContent}
      type={isVisible ? "text" : "password"}
      className="max-w-xs"
    />
  );
};

export default PasswordInput;