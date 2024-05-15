import React from 'react';
const Contact = () => {
    return (
        <div className="max-w-4xl mx-auto mt-10 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <div className="flex flex-col gap-4">
                    <p className="text-lg text-gray-700">For any inquiries or just to say hi:</p>
                    <ul className="list-disc list-inside text-lg text-gray-700">
                        <li>Email: <span className="font-semibold">Rowan.Atkinson@docc.techstarter.de</span></li>
                        <li>Phone: <span className="font-semibold">123-MRBEAN-101</span></li>
                        <li>Address: <span className="font-semibold">456 Funny Lane, Comedy Town</span></li>
                    </ul>
                    <p className="text-lg text-gray-700">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            Check this out for more information!
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Contact;