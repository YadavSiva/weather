

import React, { useState } from 'react';
import './WeatherDashboard .css';
function Favorites({ favorites, setFavorites }) {
  const [newCity, setNewCity] = useState('');
  const [editCity, setEditCity] = useState({ index: -1, name: '' });

  const addCity = () => {
    if (newCity.trim()) {
      setFavorites([...favorites, newCity.trim()]);
      setNewCity('');
    }
  };

  const deleteCity = (index) => {
    setFavorites(favorites.filter((_, i) => i !== index));
  };

  const startEditCity = (index, name) => {
    setEditCity({ index, name });
  };

  const updateCity = () => {
    if (editCity.name.trim()) {
      const updatedFavorites = [...favorites];
      updatedFavorites[editCity.index] = editCity.name.trim();
      setFavorites(updatedFavorites);
      setEditCity({ index: -1, name: '' });
    }
  };

  return (
    <div className="favorites">
      <h2>Favorite Cities</h2>
      <ul>
        {favorites.map((city, index) => (
          <li key={index}>
            {editCity.index === index ? (
              <>
                <input
                  type="text"
                  value={editCity.name}
                  onChange={(e) => setEditCity({ ...editCity, name: e.target.value })}
                />
                <button onClick={updateCity}>Update</button>
              </>
            ) : (
              <>
                {city}
                <button onClick={() => startEditCity(index, city)}>Edit</button>
              </>
            )}
            <button onClick={() => deleteCity(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newCity}
        onChange={(e) => setNewCity(e.target.value)}
        placeholder="Add new city"
      />
      <button onClick={addCity}>Add</button>
    </div>
  );
}

export default Favorites;
