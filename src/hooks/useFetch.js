// import { useEffect, useState } from "react";
// // import { fetchDataFromApi } from "../utils/api";
// const useFetch = (endpoint) => {
//   const [data, setData] = useState();

//   useEffect(() => {
//     // makeApiCall();
//   }, [endpoint]);

//   //   const makeApiCall = async () => {
//   //     const res = await fetchDataFromApi(endpoint);
//   //     setData(res);
//   //   };

//   return { data };
// };
// export default useFetch;

import { useEffect, useState } from "react";

// eslint-disable-next-line no-unused-vars
const useFetch = (endpoint) => {
  const [data] = useState();

  useEffect(() => {
    // makeApiCall();
  }, [endpoint]);

  return { data };
};

export default useFetch;
