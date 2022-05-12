import React from 'react';
import './App.css';

export const App = () => {
  return (
    <>
      <header>
        <h1>
          <strong>Good</strong> Announcements
        </h1>
          <button>Add announcements</button>
          <div className='search'>
              <input type="text"/> <button>Search</button>
          </div>
      </header>
      <div className="map">
        ...
      </div>
    </>
  );
}
