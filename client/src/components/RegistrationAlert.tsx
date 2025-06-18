import React, { useState } from "react";

const RegistrationAlert: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="">
      <div className="bg-accent2 text-white text-center py-3 px-4 flex items-center justify-center shadow-lg relative">
        <span className="font-semibold text-lg">
          🎉 Registration is now open! <a href="/register" className="underline hover:text-accent font-bold ml-2">Register here</a>
        </span>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-200 text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default RegistrationAlert;