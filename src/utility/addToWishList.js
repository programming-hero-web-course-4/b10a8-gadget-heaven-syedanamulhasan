const getWishList = () => {
    const wishListStr = localStorage.getItem('wish-list');
    if (wishListStr) {
        const wishList = JSON.parse(wishListStr);
        return wishList;
    }
    else return [];
}
const addToWishList = (id) => {
    const wishList = getWishList();
    if (wishList.includes(id)) {
        console.log(id, 'already existed')
    }
    else {
        wishList.push(id);
        const wishListStr = JSON.stringify(wishList);
        localStorage.setItem('wish-list', wishListStr)
    }

}
export { addToWishList, getWishList }