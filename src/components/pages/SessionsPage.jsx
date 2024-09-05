import React, { useState } from 'react';

function MentorshipForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    state: '',
    workEx: '',
    gradStream: '',
    gradYear: '',
    reservation: '',
    telegramId: '',
    mentoringPurpose: '',
    timeSlot: '',
    date: '',
    resume: null,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle file change
  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, resume: e.target.files[0] }));
  };

  // Next and Previous navigation
  const nextStep = () => setCurrentStep((prevStep) => prevStep + 1);
  const prevStep = () => setCurrentStep((prevStep) => prevStep - 1);

  // Submit form (you can add API submission logic here)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <div className="container ml-6">
      <h1 className="text-3xl font-bold mb-6 mt-6 text-center mr-4">Book a Mentorship Session</h1>
<p className="text-lg mb-4 text-center mr-4">Please answer the following questions to help us schedule your session effectively.</p>

      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div className='mr-4'>
            <h2 className="text-2xl font-bold mb-4 mt-4 ">Basic Information</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="state" className="block text-gray-700">State/UT *</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>

            <div className="flex justify-between">
              <button type="button" className="bg-blue-500 text-white px-4 py-2" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className='mr-4'>
            <h2 className="text-2xl font-bold mb-4 mt-4">Additional Information</h2>

            <div className="mb-4">
              <label htmlFor="workEx" className="block text-gray-700">Work Experience (Months) *</label>
              <input
                type="number"
                id="workEx"
                name="workEx"
                value={formData.workEx}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="gradStream" className="block text-gray-700">Graduation/Post-Graduation Stream *</label>
              <select
                id="gradStream"
                name="gradStream"
                value={formData.gradStream}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              >
                <option value="" disabled>Select Stream</option>
                <option value="Engineering">Engineering</option>
                <option value="Commerce">Commerce</option>
                <option value="Arts">Arts</option>
                <option value="Law">Law</option>
                <option value="Medical">Medical</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="gradYear" className="block text-gray-700">Year of Graduation *</label>
              <input
                type="number"
                id="gradYear"
                name="gradYear"
                value={formData.gradYear}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>

            <div className="flex justify-between">
              <button type="button" className="bg-gray-500 text-white px-4 py-2" onClick={prevStep}>
                Previous
              </button>
              <button type="button" className="bg-blue-500 text-white px-4 py-2" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className='mr-4'>
            <h2 className="text-2xl font-bold mb-4 mt-4">Mentoring and Profile Information</h2>

            <div className="mb-4">
              <label htmlFor="reservation" className="block text-gray-700">Reservation Category *</label>
              <select
                id="reservation"
                name="reservation"
                value={formData.reservation}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              >
                <option value="" disabled>Select Category</option>
                <option value="General">General</option>
                <option value="NC-OBC">NC-OBC</option>
                <option value="EWS">EWS</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="DAP">DAP</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="telegramId" className="block text-gray-700">Telegram ID *</label>
              <input
                type="text"
                id="telegramId"
                name="telegramId"
                value={formData.telegramId}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="resume" className="block text-gray-700">Upload Resume *</label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                className="border p-2 w-full"
                required
              />
            </div>

            <div className="flex justify-between">
              <button type="button" className="bg-gray-500 text-white px-4 py-2" onClick={prevStep}>
                Previous
              </button>
              <button type="submit" className="bg-green-500 text-white px-4 py-2">
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default MentorshipForm;
