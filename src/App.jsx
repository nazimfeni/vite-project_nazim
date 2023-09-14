const App = () => {
  let marks = 90;
  return <div>{marks > 80 ? <h1>A+</h1> : <h1>B+</h1>}</div>;
};

export default App;
