// import React, { useEffect } from 'react';
// import axios from 'axios';

// // import { get } from 'lodash';

// const withContentQuery = WrappedComponent =>  props => {
//   var data;
//   useEffect(async () => {
//     const res = await axios.get("https://panjs.com/ywc.json");
//     console.log(res.data)
//      data = res.data;
//   },[])

  
//   return (
//     <WrappedComponent
//       data={data}
//       {...props }
//     />
//   );
// };

// export default withContentQuery;

import { useState, useEffect } from "react";
import axios from "axios";

function useFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchUrl() {
    const response = await axios.get('https://panjs.com/ywc.json');
    setData(response.data);
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}
export { useFetch };