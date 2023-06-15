import { useEffect } from 'react';
import './DarkMood.css'

const DarkMode = () => {
  useEffect(() => {
    const currentTheme = localStorage.getItem('data-theme');
    if (currentTheme === 'dark') {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, []);

  const setDarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark');
    localStorage.setItem('data-theme', 'dark');
  };

  const setLightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light');
    localStorage.setItem('data-theme', 'light');
  };

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  return (
    <div className='dark_mode'>
      <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        onChange={toggleTheme}
      />
      <label className='dark_mode_label' htmlFor='darkmode-toggle'>
        <div className='toggle-wrapper'>
          <div className='toggle'>
            <div className='toggle-handle'></div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default DarkMode;
