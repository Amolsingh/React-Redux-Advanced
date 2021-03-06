import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux'; 
import {shoppingCartActions} from '../store/shoppingCart'


const ProductItem = (props) => {
  const { title, price, description } = props;

  const dispatch = useDispatch();

  const addToCart = () => {
    // const item = {
    //   title: title, 
    //   quantity: 0, 
    //   total: 0, 
    //   price: price };
    dispatch(shoppingCartActions.addItem(props));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
