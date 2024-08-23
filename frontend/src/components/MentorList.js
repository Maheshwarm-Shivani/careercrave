import React, { useState, useEffect } from "react";
import axios from "axios";

function MentorList() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    console.log("Fetching mentors from:", `${apiUrl}/mentors`);
    
    axios
      .get(`${apiUrl}/mentors`)
      .then((response) => {
        console.log("Mentors data:", response.data);
        setMentors(response.data);
      })
      .catch((error) => console.error("Error fetching mentors:", error));
  }, []);

  return (
    <div>
      <h2>Available Mentors</h2>
      <ul>
        {mentors.length > 0 ? (
          mentors.map((mentor) => (
            <li key={mentor.id}>
              {mentor.name} - {mentor.areas_of_expertise}
            </li>
          ))
        ) : (
          <li>No mentors available</li>
        )}
      </ul>
    </div>
  );
}

export default MentorList;

