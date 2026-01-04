'use client';
export default function Footer() {
    return (
        <section className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <a href="https://www.linkedin.com/in/nadwyanshary/" className="text-sm hover:underline">
                    &copy; {new Date().getFullYear()} 
                    Made by Love 
                </a>
            </div>
        </section>
    );
}