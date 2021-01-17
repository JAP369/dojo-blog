const Home = () => {
  const handleClick = (e) => {
    console.log('hi, ninjas!', e);
  };
  const handleClickAgain = (name, e) => {
    console.log(`hi ` + name, e.target);
  };

  return (
    <div className='home'>
      <h2>homepage</h2>
      <button onClick={handleClick}>click me</button>
      <button onClick={(e) => handleClickAgain('mario', e)}>
        click me again
      </button>
    </div>
  );
};

export default Home;
