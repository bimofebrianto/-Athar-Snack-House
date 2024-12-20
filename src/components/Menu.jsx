import React from 'react';
import CirengImg from '../assets/cireng.jpg';
import SomayImg from '../assets/somay.jpg';
import BatagorImg from '../assets/batagor.jpg';
import MakaroniImg from '../assets/makaroni.jpg';
import RisolImg from '../assets/risol.jpg';
import SosisImg from '../assets/sosis.jpg';
import EsTehImg from '../assets/esteh.jpg';
import PopIceImg from '../assets/popice.jpg';


const menuItems = [
  { id: 1, name: "Cireng", description: "Delicious crispy fried dough", price: 2500, image: CirengImg },
  { id: 2, name: "Somay", description: "Steamed dumplings with savory fillings", price: 10000, image: SomayImg },
  { id: 3, name: "Batagor", description: "Fried tofu and fish dumplings", price: 10000, image: BatagorImg },
  { id: 4, name: "Makaroni", description: "Spicy fried macaroni snacks", price: 5000, image: MakaroniImg },
  { id: 5, name: "Risol", description: "Crispy rolls filled with savory delights", price: 5000, image: RisolImg },
  { id: 6, name: "Sosis", description: "Juicy sausages grilled to perfection", price: 10000, image: SosisImg },
  { id: 7, name: "Es Teh", description: "Refreshing sweet iced te", price:3000, image: EsTehImg },
  { id: 8, name: "Pop Ice", description: "Cool and colorful blended drink", price: 5000, image: PopIceImg }
];

const Menu = () => {
  return (
    <div id="menu" className="py-16 bg-gray-100">
      <h2 className="text-4xl text-center font-bold">Our Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {menuItems.map(item => (
          <div key={item.id} className="bg-white p-4 rounded shadow-lg">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
            <p className="text-gray-700">{item.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold">Rp {item.price}</span>
              <button className="px-4 py-2 bg-orange-500 text-white rounded">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
