import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="py-6 mb-12 border-b">
            <div className="container mx-auto flex justify-between items-center">
                <Link to='/'>
                    <h1 className='text-xl lg:text-[32px] font-semibold leading-none'>
                        <span className='text-violet-700'>Your Brand</span>.
                    </h1>
                </Link>

                <div className="flex items-center gap-6">
                    <Link className="hover:text-violet-900 transition" to=''>Log In</Link>
                    <Link className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition" to=''>Sign Up</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;