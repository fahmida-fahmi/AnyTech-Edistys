import React from "react";

const Legacy = () => {
    return (
        <>
        
        <div className="relative   flex  overflow-hidden bg-gradient-to-r from-sky-400 to-blue-800">
            {/* Diagonal Bottom Shape */}
            {/* Content */}
            <div className="relative xl:w-3/5 sm:w-4/5 mx-auto z-10 py-10 text-white px-6">
                <h1 className="text-5xl font-bold">Legacy no longer</h1>
                <p className="mt-4 text-lg">
                    Talk to us to find out how we can transform your organization for the future.
                </p>
                <button className="mt-6 bg-orange-500 px-6 py-3 rounded-md shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
                    Contact Us →
                </button>
            </div>
        </div>
        </>
    );
};

export default Legacy;
