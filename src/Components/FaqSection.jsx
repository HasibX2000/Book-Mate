import Accordion from './Accordion';
import { useState } from 'react';

const FaqSection = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: 'What is GeeksforGeeks?',
      data: `GeeksforGeeks is a one stop solution  
                      for all computer science students.`,
      isOpen: false,
    },
    {
      key: 2,
      title: 'What GeeksforGeeks offer us?',
      data: `GeeksforGeeks offers Free Tutorials,  
                      Millions of Articles, Live, Online and  
                      Classroom Courses,Frequent Coding Competitions,  
                      Webinars by Industry Experts, Internship  
                      opportunities and Job Opportunities.`,
      isOpen: false,
    },
    {
      key: 3,
      title: 'Which is the best portal to study Computer Science?',
      data: `GeeksforGeeks is the best Computer Science portal  
                      for geeks. It contains well written, well thought  
                      and well explained computer science and programming  
                      articles.`,
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl text-center underline font-bold  mb-10 mx-auto dark:text-white text-gray-800">
          Frequenlty Asked Questions
        </h2>
        {accordions.map((accordion) => (
          <Accordion
            key={accordion.key}
            title={accordion.title}
            data={accordion.data}
            isOpen={accordion.isOpen}
            toggleAccordion={() => toggleAccordion(accordion.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
