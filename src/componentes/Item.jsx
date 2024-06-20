import { Link } from 'react-router-dom';

function Item({ id, title, description, price, pictureUrl }) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
            <div className="w-full h-48 flex items-center justify-center">
                <img src={pictureUrl} alt={title} className="object-contain h-full w-full" />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 truncate">{title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold text-blue-500">${price}</span>
                    <Link to={`/item/${id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">Ver Detalle</Link>
                </div>
                <div className="mt-4 flex justify-between space-x-2">
                    <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300 flex-1">Agregar al Carrito</button>
                    <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-700 transition-colors duration-300 flex-1">Comprar Ahora</button>
                </div>
            </div>
        </div>
    );
}

export default Item


