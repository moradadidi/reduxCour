import React from 'react'
import { useLocation } from 'react-router-dom'

export default function CarDetail() {
    const location = useLocation()
  const car = location.state || null;

  if (!car) {
      return <div>No car details available. Please select a car.</div>;
  }

  console.log(car);
return (
        <div className="p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Car Details</h1>
                <p className="mb-2"><span className="font-semibold">Marque:</span> {car.marque}</p>
                <p className="mb-2"><span className="font-semibold">Model:</span> {car.model}</p>
                <p className="mb-2"><span className="font-semibold">Type Carburant:</span> {car.typeCarburant}</p>
                <p className="mb-2"><span className="font-semibold">Prix de Base:</span> {car.prixDeBase}</p>
                <p className="mb-2"><span className="font-semibold">Prix de Vente:</span> {car.prixDeVente}</p>
        </div>
);
}
