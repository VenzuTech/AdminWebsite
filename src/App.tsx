import './App.css';

function App() {
  // eslint-disable-next-line no-console
  console.log(`Running in '${import.meta.env.MODE}' mode`);

  return (
    <div className="container max-w-4xl mx-auto">
      <div className="">
        <div className="text-center text-6xl py-16 font-mono">
          Hello, world!
        </div>
        {/* <div className="py-10 text-2xl underline">
          <div>
            <NavLink to="/counter">Use Counter</NavLink>
          </div>
          <div>
            <NavLink to="/hangman">Play Hangman</NavLink>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
