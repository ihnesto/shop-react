import React from 'react';
import Header from './components/Header';
import PageTop from './components/PageTop';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
        // Хранилище приложения
        this.state = {
            isCart: false,
            brands: [],
            products: [],
            cart: [],
            numCartItems: 0
        };
    // Заполняем хранилице данными с бэкенда
        fetch('/getBrands')
        .then(response => response.json())
        .then(data => {
            
            this.setState({
                brands : data
            });   
        });
        fetch('/getProducts')
        .then(response => response.json())
        .then(data => {
           
            this.setState({
                products : data
            });   
        });
        
    }
    // Переход в корзину
    goToCart = (status) => {
        
       
        this.setState((state) => {
            return {
                isCart : status
            }
        });
    };
    // Добавление в корзину
    addToCart = (prodId) => {
        
       
        this.setState((state) => {
            let all = state.cart.filter(e => e.productId !== prodId);
            let addQnty = state.cart.filter(e => e.productId === prodId);
            if (addQnty.length == 0) {
                return {
                    cart: [ ...state.cart, { productId: prodId, qnty: 1 } ],
                    numCartItems: state.numCartItems + 1
                }
            } else {
                addQnty[0].qnty++;
                return {
                    cart: [ ...all, addQnty[0] ]
                }
            }
        });
    };
    // Удаление из корзины
    removeFromCart = (cId) => {
        
       
        this.setState((state) => {
            let all = state.cart.filter((e,i) => i !== cId);
            let addQnty = state.cart.filter((e,i) => i === cId);
            if (addQnty[0].qnty > 1) {
                return {
                    cart: [ ...all, { productId: addQnty[0].productId, qnty:  addQnty[0].qnty - 1 } ],
                    
                }
            } else {
                addQnty[0].qnty++;
                return {
                    cart: [ ...all ],
                    numCartItems: state.numCartItems - 1
                }
            }
        });
    };

  render() {
    return (
        <div>
            <Header goToCart={ this.goToCart }
                numCartItems={ this.state.numCartItems }  />
            <PageTop />
            <Content 
                isCart={ this.state.isCart } 
                brands= {this.state.brands}
                products= {this.state.products}
                cart= {this.state.cart}
                goToCart={ this.goToCart } 
                addToCart= {this.addToCart}
                removeFromCart={this.removeFromCart}
                />
            <Footer />
        </div>
    
    );
  }
}
export default App;
