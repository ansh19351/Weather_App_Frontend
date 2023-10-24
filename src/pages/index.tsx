// pages/index.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function BooksList() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch(`${process.env.SERVER_URL}/user/weather`)
      .then((response) => response.json())
      .then((data) => setCities(data));
  }, []);
  
  return (
    <div>
      <h1>Weather</h1>
      <table>
        <thead>
          <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Weather Description</th>   
          </tr>       
        </thead>
        {cities.map((city, index) => (
          <tbody>
            <tr>
            <td>{city['city']['name']}</td>
            <td>{city['temperature']}</td>
            <td>{city['weatherDescription']}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
