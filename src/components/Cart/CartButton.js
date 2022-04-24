import classes from './CartButton.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {myCartActions} from '../store/myCart';


const CartButton = (props) => {

  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.shoppingCart.count);

  const toggleCartHandler = () => {
    dispatch(myCartActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler} >
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
