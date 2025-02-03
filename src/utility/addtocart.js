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
        toast("Device Added Successfully")
    }
}
export { addToCartList, getCartList }