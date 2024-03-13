import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


         
 const Blog = ({blog, handleAddToBookMark, handleMarkAsRead}) => {
     const {id, title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mt-8 bg-slate-300 rounded-xl space-y-4'>
            <img className='w-full h-[350px] rounded-t-xl '  src={cover} alt="" />
            <div className='flex justify-between '>
                <div className='flex mt-2'> 
                   <img className='w-16 h-14 rounded-full' src={author_img} alt="" />
                   <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                   </div>
                </div>
               
              

                <div>
                      <span>{reading_time} min read</span>
                      <button onClick={() => handleAddToBookMark(blog)}
                      className='ml-2 text-blue-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                  hashtags.map((hash, idx) => <span key={idx}> <a href=''>#{hash}</a></span>)

                }
                </p>
                <button className='text-blue-500 font-bold underline' 
                onClick={()=> handleMarkAsRead(id, reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookMark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func,
   

}

export default Blog;