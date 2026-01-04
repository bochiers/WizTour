'use client';
export default function Contact() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
            <h1 className="text-4xl font-bold mb-12">Contact Us</h1>
            <form className="w-full max-w-lg bg-blue-900 p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="w-full px-3 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        id="name"
                        placeholder="Your Name"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full px-3 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="email"
                        id="email"
                        placeholder="Your Email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="w-full px-3 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="message"
                        rows={5}
                        placeholder="Your Message"
                    ></textarea>
                </div>
                <button
                    className="w-full bg-white hover:bg-gray-100 text-blue-900 font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="submit"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
}