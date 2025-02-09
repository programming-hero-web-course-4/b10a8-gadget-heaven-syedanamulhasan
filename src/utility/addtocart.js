import { toast } from "react-toastify";


const getCartList = () => {
    const cartListStr = localStorage.getItem('cart-list');
    if (cartListStr) {
        const cartList = JSON.parse(cartListStr);
        return cartList;
    }
    else {
        return [];
    }
}
const addToCartList = (id) => {
    const cartList = getCartList();
    if (cartList.includes(id)) {
        console.log(id, 'already exist')
        toast.error("Already added")
    }
    else {
        cartList.push(id);
        const cartListStr = JSON.stringify(cartList);
        localStorage.setItem("cart-list", cartListStr);
        toast.success("Device Added To The Cart Successfully")
    }
}
const removeCart = product_id =>{
    const cart = getCartList();
    const remaining = cart.filter(gadget => gadget.product_id != product_id)
    console.log(remaining)
    localStorage.setItem("cart", JSON.stringify(remaining));
        toast.success("Device removed Successfully")
}
const clearStorage = () =>{
    localStorage.clear()
}
export { addToCartList, getCartList, removeCart, clearStorage }