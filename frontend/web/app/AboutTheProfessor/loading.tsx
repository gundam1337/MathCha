import React from 'react';
import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Spinner label="Loading professor information..." color="primary" size="lg" />
    </div>
  );
}