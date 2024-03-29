import React from "react";

const Success = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className=" p-8 rounded-lg shadow-lg text-center bg-[#f8de7e52]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-green-600 mx-auto mb-4 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h2 className="text-xl font-semibold mb-2">Payment Successful!</h2>
        <p className="text-gray-600">
          Thank you for your purchase. Your payment was successful.
        </p>
        <a
          href="/"
          className="mt-4 text-blue-500 hover:text-blue-600 underline"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Success;
