import React from 'react';

const LandingPage = () => {
  return (
    <div id="home" className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://i.ebayimg.com/images/g/NkEAAOSwgiZiXQOM/s-l1200.jpg")' }}>
      <h1 className="text-white text-5xl font-bold">Welcome to Athar Snack House</h1>
      <p className="text-white text-lg mt-4">Delicious snacks made just for you</p>
      <a href="#menu" className="mt-6 px-4 py-2 bg-orange-500 text-white rounded-full">Explore Menu</a>
    </div>
  );
};

export default LandingPage;
