import React from 'react';

const Checkout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl text-center font-bold">Your Order</h2>
        <div className="mt-8">
          <p className="text-xl">Order Summary:</p>
          {/* Daftar makanan yang dipesan akan ditampilkan di sini */}
          <div className="mt-4 space-y-4">
            <div className="flex justify-between items-center">
              <span>Cireng x 2</span>
              <span>Rp 30,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Somay x 1</span>
              <span>Rp 20,000</span>
            </div>
          </div>
          <div className="mt-8 text-xl font-semibold flex justify-between items-center">
            <span>Total:</span>
            <span>Rp 50,000</span>
          </div>
          <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded w-full sm:w-auto">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
