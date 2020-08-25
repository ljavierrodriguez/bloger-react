const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            name: 'Luis',
            age: 0
        },
        actions: {
            saludo: () => {
                console.log("Hola Mundo");
            }
        }
    }
}

export default getState;