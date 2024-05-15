import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto mt-10 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">About Us</h2>
                <p className="text-lg text-gray-700">
                    We've been tortured with Tailwind and CSS today, but still managed to create something appealing!
                </p>
                <p className="text-lg text-gray-700">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Check out our amazing new video!
                    </a>
                </p>
            </div>
        </div>
    );
};

export default About;
