import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';



const BookMarks = ({bookMarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-200 ml-4 mt-2 pt-4 rounded-xl">
            <div>
                <h3 className='text-4xl text-center font-bold'> Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center ">BookMarked Blogs: {bookMarks.length}
            </h2>
            {
                bookMarks.map((bookMark, idx)=><BookMark key={idx} bookMark={bookMark}></BookMark>)
            }
        </div>
    );
};

BookMarks.propTypes ={
    bookMarks:PropTypes.array.isRequired,
    readingTime:PropTypes.number
}

export default BookMarks;