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
        { name: 'Contact', path: '/contact' },
    ];
    return ( 
        // untuk return navbar
        <nav className='bg-[#E9E3D7] p-2 shadow-md w-full h-[80px] flex items-center'>
            <div className='container m-4 flex justify-start'>
                <div className='space-x-10'>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.path; 
                        //untuk memanggil koktak is active
                        return (
                            <Link 
                                key={link.name}
                                href={link.path}
                                className={`p-4 rounded-xl transition-all-duration-300
                                        ${isActive 
                                        ? "bg-white/30 backdrop-blur-lg border border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-blue-700 font-normal" 
                                        : "text-gray-600 hover:bg-white/20 hover:backdrop-blur-sm"
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

