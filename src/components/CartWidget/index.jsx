import { Icon } from '@iconify/react';
import Pill from '../Pill';

const CartWidget = ({ quantity }) => {
    return (
        <div className='cart-widget'>
            <Pill quantity={3} />
            <Icon className='cart-icon__cart' icon="uil:shopping-bag" />
        </div>
    );
}

export default CartWidget;