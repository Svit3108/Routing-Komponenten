import React from 'react';

const sections = [
  {
    title: 'Section 1',
    content: 'Content for section 1',
  },
  {
    title: 'Section 2',
    content: 'Content for section 2',
  },
  {
    title: 'Section 3',
    content: 'Content for section 3',
  },
];

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <div>
        {sections.map((section, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-lg font-semibold">{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
