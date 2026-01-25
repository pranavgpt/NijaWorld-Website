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

                {/* Navigation Links */}
                <div className='hidden lg:flex gap-5 items-center text-sm text-gray-700 dark:text-gray-300'>
                    <Link to='/about' className='hover:text-nijaGreen transition'>About</Link>
                    <Link to='/technologies' className='hover:text-nijaGreen transition'>Technologies</Link>
                    <Link to='/solutions' className='hover:text-nijaGreen transition'>Solutions</Link>
                    <Link to='/case-studies' className='hover:text-nijaGreen transition'>Case Studies</Link>
                    <Link to='/insights' className='hover:text-nijaGreen transition'>Insights</Link>
                    <Link to='/media' className='hover:text-nijaGreen transition'>Media</Link>
                    <Link to='/partners' className='hover:text-nijaGreen transition'>Partners</Link>
                    <Link to='/contact' className='hover:text-nijaGreen transition'>Contact</Link>
                </div>

                {/* CTA Buttons */}
                <div className='flex gap-3 items-center'>
                    <button className='hidden md:block border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition hover:bg-gray-100 dark:hover:bg-gray-800'>
                        Download Overview
                    </button>
                    <button className='bg-nijaGreen hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition shadow-lg shadow-nijaGreen/30'>
                        Request a Demo
                    </button>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
