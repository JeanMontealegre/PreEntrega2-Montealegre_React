import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './componentes/Header.jsx';
import ItemListContainer from './componentes/ItemListContainer.jsx';
import Footer from './componentes/footer.jsx';
import Main from './componentes/Main.jsx';
import ItemDetailContainer from './componentes/ItemDetailContainer.jsx';
import Cart from './componentes/Cart.jsx';
import Marquee from './componentes/Marquee.jsx';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex-grow mt-24">
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={
                            <>
                                <Main />
                                <Marquee />
                                <ItemListContainer greeting="Bienvenido a nuestra tienda" />
                            </>
                        } />
                        <Route path="/category/:categoryId" element={
                            <>
                                <Marquee />
                                <ItemListContainer />
                            </>
                        } />
                        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App

