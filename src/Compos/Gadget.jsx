import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {
    const { product_id, product_title, product_image, category, price } = gadget
    return (
        <div>
            <div className='border-1 border-[#F6F6F6] rounded-lg p-8 space-y-4 bg-[#F6F6F6] flex flex-col shadow'>
                <img className='h-[350px]  border-gray-400 rounded-lg' src={product_image} alt="" />
                <h1 className='text-xl font-bold'>{product_title}</h1>
                <p>{price} $</p>
                <Link to={`gadgets/${product_id}`}><button className='btn btn-lg btn-outline btn-primary rounded-4xl'>View Details</button></Link>
            </div>
        </div>
    );
};

export default Gadget;