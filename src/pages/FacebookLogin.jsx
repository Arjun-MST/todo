// src/FacebookLogin.js
import React from 'react';

const FacebookLogin = () => {
  const redirectUri = 'https://example.com';
  const clientId = '1152785203238481'; // Replace with your actual App ID

  const loginWithFacebook = () => {
    const loginUrl = `https://www.facebook.com/v23.0/dialog/oauth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=pages_show_list&response_type=code`;
    window.location.href = loginUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Login with Facebook</h1>
      <button
        onClick={loginWithFacebook}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
      >
        Continue with Facebook
      </button> 
    </div>
  );
};

export default FacebookLogin;
