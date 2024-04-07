import React, { useEffect, useState } from 'react';
const axios = require('axios').default;


const App = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const response = axios.post('/http://localhost:3005/data')
      .then((response) => {
        setdata(response.data);
      //console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }); // Empty dependency array to run only once when component mounts

  return (
    <div>
      <h1>This is an App Page.</h1>
      <p> Lenth: {data ? data.length : 0}</p>
       {/* {data.map((data, index) => (
        <div key={data.id}>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      ))} */}
    </div>
  );
};

export default App;


// import React, { useState, useEffect } from 'react';


// const App = () => {
//   const [data, setData] = useState(null); // State to hold the fetched data

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:3005/data'); // Replace with your API endpoint
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const jsonData = await response.json();
//         setData(jsonData); // Set the fetched data to state
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData(); // Call the fetchData function when the component mounts
//   }, []); // Empty dependency array to run only once when component mounts


  


//   return (
//     <div>
//       <h1>This is an App Page.</h1>
//       {data ? (
//         <div>
//           <p>Length: {data.length}</p>
//           <ul>
//             {data.map((item, index) => (
//               <div key={index}>

//                 <h2>{item.id}</h2>
//                 <h1>{item.title}</h1>
//                 <h3>{item.body}</h3>
//               </div>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default App;























