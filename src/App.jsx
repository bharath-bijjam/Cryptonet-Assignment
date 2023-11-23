import './App.css'

import React, { useState, useEffect } from 'react';

const UserDetails = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
        const data = await response.json();
        setUserData(data.results[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-details-container">
      {userData ? (
        <div className="user-card">
          <img src={userData.picture.large} alt="User" className="user-image" />
          <div className="user-info">
            <p className="user-name">FirstName:-{userData.name.first} </p>
            <p className="user-name">LastName:-{userData.name.last} </p>

            <p className="user-gender">Gender: {userData.gender}</p>
            <p className="user-phone">Phone: {userData.phone}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <UserDetails />
    </div>
  );
};

export default App;
