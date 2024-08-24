import React, { useState, useEffect } from 'react';

function PractiseHub() {
  // State to hold the data
  const [previousPapers, setPreviousPapers] = useState([]);
  const [upcomingTests, setUpcomingTests] = useState([]);

  // Fetch data when component mounts
  useEffect(() => {
    // Example fetch function for previous papers
    const fetchPreviousPapers = async () => {
      // Replace with your API endpoint or data source
      const response = await fetch('/api/previous-papers');
      const data = await response.json();
      setPreviousPapers(data);
    };

    // Example fetch function for upcoming tests
    const fetchUpcomingTests = async () => {
      // Replace with your API endpoint or data source
      const response = await fetch('/api/upcoming-tests');
      const data = await response.json();
      setUpcomingTests(data);
    };

    fetchPreviousPapers();
    fetchUpcomingTests();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Practise Hub</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Previous 10 Years CAT Papers</h2>
        <ul>
          {previousPapers.length ? (
            previousPapers.map((paper) => (
              <li key={paper.id} className="mb-2 p-4 border rounded">
                <h3 className="text-xl font-medium">{paper.title}</h3>
                <p>{paper.description}</p>
                <a href={paper.link} className="text-blue-500" target="_blank" rel="noopener noreferrer">View Paper</a>
              </li>
            ))
          ) : (
            <p>No papers available.</p>
          )}
        </ul>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Tests</h2>
        <ul>
          {upcomingTests.length ? (
            upcomingTests.map((test) => (
              <li key={test.id} className="mb-2 p-4 border rounded">
                <h3 className="text-xl font-medium">{test.title}</h3>
                <p>{test.date}</p>
                <p>{test.description}</p>
                <a href={test.link} className="text-blue-500" target="_blank" rel="noopener noreferrer">Register</a>
              </li>
            ))
          ) : (
            <p>No upcoming tests.</p>
          )}
        </ul>
      </section>
    </div>
  );
}

export default PractiseHub;
