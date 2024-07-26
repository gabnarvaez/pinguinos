import data from "../data/data.json";


export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(data);
        }, 300)
    })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        
        const item = data.find((el) => el.id === id);

        if (item) {
            resolve(item);
        } else {
            reject({
                error: "Esto es una Bakery Store no la aplicacion de Rappi"
            })
        }

    })
}