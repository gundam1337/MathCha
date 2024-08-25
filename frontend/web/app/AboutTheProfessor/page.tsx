import React from 'react';
import ProfessorProfile from './ProfessorProfile';

export default function ProfessorPage() {
  const professorData = {
    name: "Omar Derkaoui",
    title: "PhD",
    institution: "Stanford University",
    quote: "Although the questions we're grappling with may have changed since the founding era, the examples of antiquity still challenge us to reflect on our own republic—its promises and its perils.",
    bio: "Dr. Omar Derkaoui is a distinguished professor at Stanford University, specializing in political science and history. With a Ph.D. from the University of Michigan, he has dedicated his career to exploring the intersections of ancient political thought and modern governance. His research and teachings draw parallels between historical precedents and contemporary challenges, offering unique insights into the evolution of democratic institutions. Dr. Derkaoui is renowned for his ability to make complex political theories accessible to students from diverse backgrounds, fostering critical thinking and civic engagement.",
    imageUrl: "/omar.jpg"
  };

  return (
    <main>
      <ProfessorProfile {...professorData} />
    </main>
  );
}