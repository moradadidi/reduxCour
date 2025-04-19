import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function CarList() {
    const navigate = useNavigate();

    const cars = [
        { marque: "Opel", model: "Astra", typeCarburant: "diesel", prixDeBase: 241000, prixDeVente: 241000 * 1.2 },
        { marque: "Audi", model: "A3 Sportback", typeCarburant: "Essence", prixDeBase: 144000, prixDeVente: 144000 * 1.2 },
        { marque: "dacia", model: "Astra", typeCarburant: "diesel", prixDeBase: 241000, prixDeVente: 241000 * 1.2 },
        { marque: "BMW", model: "2004", typeCarburant: "diesel", prixDeBase: 41122, prixDeVente: 41122 * 1.2 },
    ];

    return (
        <div>
            <h1>Voitures</h1>
            <table>
                <thead>
                    <tr>
                        <th>Marque</th>
                        <th>Model</th>
                        <th>Type carburant</th>
                        <th>Prix de base</th>
                        <th>Prix de vente</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car, index) => (
                        <tr key={index}>
                            <td>{car.marque}</td>
                            <td>{car.model}</td>
                            <td>{car.typeCarburant}</td>
                            <td>{car.prixDeBase}</td>
                            <td>{car.prixDeVente}</td>
                            <td>
                                <button
                                    className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
                                    onClick={() => navigate('/voitres/car', { state: car })}
                                >
                                    Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
