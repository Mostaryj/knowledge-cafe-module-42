import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='max-w-7xl mx-auto flex justify-between items-center p-4 m-4 border-b-2 bg-slate-300 '>
            <h1 className='text-4xl font-semibold'>Knowledge Cafe
            </h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;