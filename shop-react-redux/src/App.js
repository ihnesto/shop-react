import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import PageTop from './components/PageTop';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        fetch('/getBrands')
        .then(response => response.json())
        .then(brands => {
            
            dispatch({ type: 'SET_BRANDS', payload: brands});
        });
        fetch('/getProducts')
        .then(response => response.json())
        .then(products => {
            
            dispatch({ type: 'SET_PRODUCTS', payload: products});  
        }); 
    }, []);
 
    return (
        <div>
            <Header />
            <PageTop />
            <Content />
            <Footer />
        </div>
    );
}
export default App;
