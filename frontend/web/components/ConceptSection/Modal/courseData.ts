export interface Course {
    id: string;
    title: string;
    description: string;
    isNew: boolean;
    details: {
      topics: string[];
      fullDescription: string;
    };
  }
  
  export const courses: Course[] = [
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