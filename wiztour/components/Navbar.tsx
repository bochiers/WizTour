'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; //untuk mengarahkan ke halaman lain
const Navbar = () => {
    const pathname = usePathname();
    
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Packages', path: '/packages' },
        { name: 'Car Gallery', path: '/car-gallery' },
        { name: 'Destinations', path: '/destinations' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'About Us', path: '/about-us' },
    ];
    return ( 
        // untuk return navbar
        <nav className='bg-[#E9E3D7] p-2 shadow-md w-full h-[80px] flex items-center'>
            <div className='container m-4 flex justify-center'>
                <div className='space-x-10'>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.path; 
                        return (
                            <Link 
                                key={link.name}
                                href={link.path}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 
                                        ${isActive 
                                        ? "underline text-red-700 bg-red-100/50" 
                                        : "text-gray-600 hover:text-red-600 hover:bg-red-50/50 hover:shadow-sm"
                                        }
                                    `}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
                
            </div>
        </nav>
        );
}

export default Navbar;

