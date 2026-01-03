'use client';
// untuk memanggil fungsi yang ada di react
// import React from "react";
import Image from "next/image";
export default function Hero() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-10">
                <Image
                src="https://images.unsplash.com/photo-1747582437029-097629a2f797?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hero-bg"
                fill // This makes it fill the parent container
                style={{ objectFit: 'cover' }}
                priority // Better for LCP (Largest Contentful Paint)
                />
            </div>
            <div className="flex flex-col justify-center items-center text-white z-20 px-4">
                <h1 className="text-center font-bold text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
                    Welcome on Board
                </h1>

            </div>
        </section>
    );
}