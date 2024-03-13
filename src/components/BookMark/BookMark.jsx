import PropTypes from 'prop-types';

const BookMark = ({bookMark}) => {
    const {title} = bookMark;
    return (
        <div className='bg-slate-300 p-4 m-4 rounded-xl mt-8'>
            <h3 className='text-2xl '>{title}</h3>
        </div>
    );
};
BookMark.propTypes ={
    bookMark:PropTypes.object.isRequired
}
export default BookMark;