import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {

  const show = useSelector(state => state.myCart.showShoppingCart);

  const addCartItem = useSelector(state => state.shoppingCart.items);

  return (
     <div>
      {show && <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
      {addCartItem.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card> 
    }
     </div>
    
  );
};

export default Cart;
