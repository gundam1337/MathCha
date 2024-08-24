import React from 'react';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

async function getProfessorData() {
  // Simulate an API call
  await new Promise(resolve => setTimeout(resolve, 2000));
  return {
    name: "Omar Derkaoui",
    title: "PhD",
    institution: "Stanford University",
    almaMater: "University of Michigan",
    quote: "Although the questions we're grappling with may have changed since the founding era, the examples of antiquity still challenge us to reflect on our own republic—its promises and its perils."
  };
}

export default async function AboutProfessorPage() {
  const professorData = await getProfessorData();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="max-w-[600px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="Professor's picture"
            height={40}
            radius="sm"
            src="/path-to-professor-image.jpg"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">{professorData.name}</p>
            <p className="text-small text-default-500">{professorData.title}</p>
          </div>
        </CardHeader>
        <CardBody>
          <p>{professorData.quote}</p>
          <p className="mt-4">Institution: {professorData.institution}</p>
          <p>Alma Mater: {professorData.almaMater}</p>
        </CardBody>
      </Card>
    </div>
  );
}