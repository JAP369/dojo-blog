import { useState } from 'react';

const Home = () => {
  // let name = 'mario';
  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName('luigi');
    setAge(30);
  };

  return (
    <div className='home'>
      <h2>homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Home;
