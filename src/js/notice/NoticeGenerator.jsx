import React, { useState } from "react"
import noticeData from '../notice/noticeData'

function NoticeGenerator() {
  const [notice, setNotice] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  function getNoticeImage() {
    const noticeArray = noticeData.data.notices;
    const randomNumber = Math.floor(Math.random() * noticeArray.length)
    const url = noticeArray[randomNumber].url;
    setNotice(prevNotice => ({
        ...prevNotice,
        randomImage: url
    }))
}

function handleChange(event) {
  const {name, value} = event.target
  setNotice(prevNotice => ({
      ...prevNotice,
      [name]: value
  }))
}

  return (
    <div className="notice-generator">
      <header className="header">
        <h2 className="header--title">Notice Generator</h2>
      </header>
      <main>
        <div className="form">
          <input type="text" placeholder="Top text" className="form--input" name="topText" value={notice.topText} onChange={handleChange} />
          <input type="text" placeholder="Bottom text" className="form--input" name="bottomText" value={notice.bottomText} onChange={handleChange} />
          <button onClick={getNoticeImage} className="form--button">Get a new notice image 🖼</button>
        </div>
        <div className="notice">
          <div className="notice--image-container">
            <img src={notice.randomImage} className="notice--image"/>
          </div>
          <h2 className="notice--text top">{notice.topText}</h2>
          <h2 className="notice--text bottom">{notice.bottomText}</h2>
        </div>
      </main>
    </div>
  )
}

export default NoticeGenerator