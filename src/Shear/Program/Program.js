

const Program = () => {
    const addItemToLocalStore = (item) =>{
        console.log(item)
        localStorage.setItem("chart",item)
    }

    return {
        addItemToLocalStore
    }
}

export default Program