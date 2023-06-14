/* eslint-disable react/no-unknown-property */
// import Sun from "../../assets/image/Sun.svg";
// import Moon from  "../../assets/image/Moon.svg";
import './DarkMood.css'

const DarkMode = () => { 
    const setDarkMood = () => {
        document.querySelector('body').setDarkMood('data-theme', 'dark')
    }
  
    const setLightMood = () => {
        document.querySelector('body').setDarkMood('data-theme', 'light')
    }
  
  const toggleTheme = (e) => {
    if(e.target.checked){
        setDarkMood()
    }
    else{
        setLightMood()
    }
  }
  
  
  
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
              {/* <div className="flex"> <img className="w-4 h-4" src={Sun} alt="" />
               <img className="w-4 h-4" src={Moon} alt="" /></div> */}
            </label>
        </div>
    );
};

export default DarkMode;
