import React from 'react';

const Welcome = () => {
    return (
        <div className="bg-gradient-to-r from-green-400 to-lime-400 h-screen flex flex-col items-center justify-center text-blue-600 text-center">
        <h1 className="text-7xl font-bold mb-4">Welcome</h1>
        <p className="text-xl mb-8">You have logged in successfully</p>
      </div>
    );
};

export default Welcome;