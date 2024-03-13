
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import { useState } from 'react'

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookMark = blog => {
    // console.log(blog);
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  }

  const handleMarkAsRead = ( id, time) =>{
    // console.log('marking work ok', time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // setReadingTime(readingTime + time); or ek line o likha jay
    // console.log(id,'remove');
    const remainingBookMarks = bookMarks.filter(bookMark => bookMark.id !== id);
    setBookMarks(remainingBookMarks);


  }

//remove the read blog


  return (
    <>

      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookMark={handleAddToBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <BookMarks 
        bookMarks={bookMarks}
        readingTime={readingTime}
        ></BookMarks>
      </div>


    </>
  )
}

export default App
