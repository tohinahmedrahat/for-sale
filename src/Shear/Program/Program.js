

const Program = () => {
    if(!localStorage.getItem("cart")){
        localStorage.setItem("cart","[]")
    }
    let cart = JSON.parse(localStorage.getItem("cart"))
    const addItemToLocalStore = (item) =>{
        if(cart.length === 0){
            cart.push(item)
        }else{
            const res = cart.find(element => element.name === item.name)
            if (res === undefined){
                cart.push(item)
            }else{
                res.count += 1
            }
        }
        localStorage.setItem("cart",JSON.stringify(cart))
    }

    const getItemToLocatstore = () =>{
        const cart = JSON.parse(localStorage.getItem("cart"))
        return cart
    }

    return {
        addItemToLocalStore,
        getItemToLocatstore
    }
}

export default Program