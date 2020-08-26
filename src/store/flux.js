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
                const resp = await fetch("http://localhost:3000/data/services.json");
                //console.log(resp);
                const data = await resp.json();
                //console.log(data);
                setStore({
                    services: data.services
                })
            },
            getEvents: () => {
                fetch("http://localhost:3000/data/events.json", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            events: data.events
                        })
                    });
            }
        }
    }
}

export default getState;