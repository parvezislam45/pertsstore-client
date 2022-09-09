import UseProduct from '../../Hook/UseProduct'
import ItemsDetails from './ItemsDetails';

const Items = () => {
    const [products] = UseProduct();
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mt-14 gap-y-6'>
           {
            products.map(product =>(<ItemsDetails
            key={product._id}
            product={product}
            ></ItemsDetails>))
           } 
        </div>
    );
};

export default Items;