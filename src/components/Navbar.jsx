import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export function Navbar() {
    return (
        <nav className='fixed w-full bg-white/80 dark:bg-baseDark/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50'>
            <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
                <Link to='/' className='flex items-center gap-3 hover:opacity-90 transition group'>
                    {/* NIJA Logo Icon */}
                    <img
                        src='/nija-logo.png'
                        alt='NIJA Logo'
                        className='h-8 w-auto'
                    />
                    {/* NIJA WORLD Text */}
                    <div className='flex flex-col'>
                        <span className='text-2xl font-bold text-nijaPurple dark:text-nijaGreen leading-none'>
                            NIJA
                        </span>
                        <span className='text-[8.5px] font-bold text-nijaPurple dark:text-nijaGreen -mt-1 tracking-wide'>
                            WORLD
                        </span>
                    </div>
                </Link>

                <div className='hidden md:flex gap-8 items-center text-gray-700 dark:text-gray-300'>
                    <Link to='/about' className='hover:text-nijaGreen transition'>About</Link>
                    <Link to='/technologies' className='hover:text-nijaGreen transition'>Technologies</Link>
                    <Link to='/solutions' className='hover:text-nijaGreen transition'>Solutions</Link>
                    <Link to='/contact' className='hover:text-nijaGreen transition'>Case Studies</Link>
                </div>

                <div className='flex gap-4 items-center'>
                    <Link to='/join'>
                        <button className='border-2 border-nijaPurple text-nijaPurple px-5 py-2.5 rounded-lg font-medium transition hover:bg-nijaPurple/10 hover:shadow-lg hover:shadow-nijaPurple/30'>
                            Join
                        </button>
                    </Link>
                    <button className='bg-nijaGreen hover:bg-green-500 text-white px-5 py-2.5 rounded-lg font-medium transition shadow-lg shadow-nijaGreen/30'>
                        Request a Demo
                    </button>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
