import { useLoaderData, useParams } from 'react-router-dom';
import Gadget from './Gadget';
import { useEffect, useState } from 'react';

const Gadgets = () => {
    const { category } = useParams();
    const gadgets = useLoaderData();
    const [gadgetData, setGadgetData] = useState([]);
    useEffect(() => {
        if(category){
            const filteredByCategory = [...gadgets].filter(gadget => gadget.category === category)
        setGadgetData(filteredByCategory)
        }
        else{
            setGadgetData(gadgets)
        }
    }, [category, gadgets])

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-evenly'>
            {
                gadgetData.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
            }
        </div>
    );
};

export default Gadgets;