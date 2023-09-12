import Navbar from "./Navbar"
import NoticeGenerator from '../notice/NoticeGenerator'
import '/src/css/notice.css' 

function Notice() {
  return (
    <div className="notice-container">
      <Navbar />
      <NoticeGenerator />
    </div>
  )
}

export default Notice
