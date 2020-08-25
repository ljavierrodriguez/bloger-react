const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            name: 'Luis',
            age: 0,
            services: null,
            events: null,
        },
        actions: {
            saludo: () => {
                console.log("Hola Mundo");
            },
            getServices: async () => {
                const resp = await fetch("/data/services.json");
                //console.log(resp);
                const data = await resp.json();
                //console.log(data);
                setStore({
                    services: data.services
                })
            },
            getEvents: async () => {
                const resp = await fetch("/data/events.json");
                //console.log(resp);
                const data = await resp.json();
                //console.log(data);
                setStore({
                    events: data.events
                })
            }
        }
    }
}

export default getState;