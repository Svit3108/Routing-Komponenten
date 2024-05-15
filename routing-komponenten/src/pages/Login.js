import React from 'react';

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen">
            <h2 className="text-2xl font-semibold mb-4 text-orange-500">Login</h2>
            <form className="flex flex-col gap-4">
                <input type="text" placeholder="Username" className="border border-orange-400 rounded-lg p-2 w-64 focus:outline-none focus:border-orange-500" />
                <input type="password" placeholder="Password" className="border border-orange-400 rounded-lg p-2 w-64 focus:outline-none focus:border-orange-500" />
                <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300">Login</button>
            </form>
            <div className="mt-4">
                <span className="mr-2">Don't have an account?</span>
                <button className="text-orange-500 hover:underline">Register</button>
            </div>
        </div>
    );
};

export default Login;
