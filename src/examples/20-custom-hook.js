import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          // console.log(res);
          if (!res.ok) {
            throw Error(
              'could not fetch the data for that resource'
            );
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          // console.log(err.message);
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;

// Home.js

// import BlogList from './BlogList';
// import useFetch from './useFetch';

// const Home = () => {
//   const { data: blogs, isPending, error } = useFetch(
//     'http://localhost:8000/blogs'
//   );
