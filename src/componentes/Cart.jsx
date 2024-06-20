import { Link } from 'react-router-dom';

function Cart() {
    const cartItems = []; 
    return (
        <div className="container mx-auto my-8 p-4">
            {cartItems.length === 0 ? (
                <div className="text-center">
                    <img src="/carrito_vacio.png" alt="Carrito vacío" className="mx-auto mb-4 h-48" />
                    <h2 className="text-2xl font-bold mb-6">Tu carrito está vacío</h2>
                    <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
                        Añade algunos productos para verlos aquí
                    </Link>
                </div>
            ) : (
                <div>
                    <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} className="mb-4 flex items-center justify-between">
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                                <span className="text-xl font-bold text-blue-500">${item.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Cart

