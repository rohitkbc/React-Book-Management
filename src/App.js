import Home from "./Components/BookList/Home"
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState('light');
  const [toggel, setToggle] = useState();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'white');
      setToggle(false)
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'black');
      setToggle(true)
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <p className="h1 mt-2"> My Book List
            {toggel ? 
            <i onClick={toggleTheme} class="bi bi-moon-stars-fill d-flex justify-content-end me-5" style={{fontSize: '25px'}}></i> 
              : 
            <i onClick={toggleTheme} class="bi bi-sun d-flex justify-content-end me-5" style={{fontSize: '25px'}}></i>} 
      </p>
      <Home theme={theme}/>
    </div>
  );
}

export default App;
