import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './Component/Form';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="App">
      <Form fetchData={fetchData} />
      {/* Display the fetched data */}
      {data && (
        <div>
          <h2>Fetched Data</h2>
          <p>{data}</p>
        </div>
      )}
      {/* Google Translate widget */}
      <div id="google_translate_element"></div>
    </div>
  );
}

export default App;
