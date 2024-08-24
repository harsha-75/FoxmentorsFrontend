import React, { useState, useEffect } from 'react';

function SessionsPage() {
  // State for mentors and form data
  const [mentors, setMentors] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [userName, setUserName] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Fetch mentors when component mounts
  useEffect(() => {
    const fetchMentors = async () => {
      // Replace with your API endpoint
      const response = await fetch('/api/mentors');
      const data = await response.json();
      setMentors(data);
    };

    fetchMentors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Example API call to book a session
    const response = await fetch('/api/book-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mentor: selectedMentor,
        time: selectedTime,
        user: userName,
      }),
    });

    if (response.ok) {
      setBookingSuccess(true);
    } else {
      setBookingSuccess(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Book a Session</h1>

      {bookingSuccess && (
        <div className="bg-green-100 text-green-800 p-4 mb-4 border border-green-300 rounded">
          Your session has been booked successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mentor" className="block text-gray-700 text-sm font-bold mb-2">Select Mentor</label>
          <select
            id="mentor"
            value={selectedMentor}
            onChange={(e) => setSelectedMentor(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="" disabled>Select a mentor</option>
            {mentors.map((mentor) => (
              <option key={mentor.id} value={mentor.id}>{mentor.name}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">Select Time Slot</label>
          <input
            type="datetime-local"
            id="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Book Session
        </button>
      </form>
    </div>
  );
}

export default SessionsPage;
