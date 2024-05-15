import React from 'react';

const Main = ({ children }) => {
    return (
        <main className="flex flex-row flex-wrap">
            {children}
        </main>
    );
};

export default Main;
