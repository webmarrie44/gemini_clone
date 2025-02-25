import React, { useContext } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import { ThemeContext} from '../../context/ThemeContext'

const Main = () => {
    const {onSent , recentPrompt, showResult, loading , resultData , setInput , input}= useContext(Context)
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
    <div className={`main ${theme}`}>
      <div className='nav'>
        <p>Gemini</p>
        <div className='info'>
         <span className='theme-btn' onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </span>
        <img src={assets.user_icon} alt=''/></div>
        
      </div>
      <div className='main-container'>
        {!showResult?
        <>      <div className='greet'>
        <p><span>Hello, Mary.</span></p>
        <p>How Can I help you Today?</p>
      </div>
      <div className='cards'>
        <div className='card'>
            <p>suggest beatiful placesto see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt='' />
        </div>
        <div className='card'>
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt='' />
        </div>
        <div className='card'>
            <p>Brainstorm team bonding activites for our work retreat</p>
            <img src={assets.message_icon} alt='' />
        </div>
        <div className='card'>
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt='' />
        </div>
      </div></> :
      <div className='result'>
        <div className="result-title">
            <img src={assets.user_icon} alt='' />
            <p>{recentPrompt}</p>
        </div>
        <div className="result-data">
            <img src={assets.gemini_icon} alt='' />
            {loading ? <div className='loader'>
                <hr />
                <hr />
                <hr />
            </div> : <p dangerouslySetInnerHTML={{__html:resultData}}></p> }
            
        </div>
        </div>
        }

      <div className="main-bottom">
        <div className="search-box">
            <input type="text" placeholder='enter a prompt here'
                 onChange={(e) => setInput(e.target.value)} value={input}
            />
            <div>
                <img src={assets.gallery_icon} alt='' />
                <img src={assets.mic_icon} alt='' />
                {input?<img onClick={() => onSent()} src={assets.send_icon} alt='' />:null}
            </div>
            
        </div>
        <p className='bottom-info'>
                Gemini may display inaccurate info, including about people, so double check its responses.
                your privacy and Gemini Apps
            </p>
      </div>
      </div>

    </div>
  )
}

export default Main
