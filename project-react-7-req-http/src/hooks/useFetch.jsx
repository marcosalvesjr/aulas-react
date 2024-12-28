import { useState, useEffect } from "react";


// 4 - Custom hook

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    //5 - refatorando post
    const [config, setConfig] = useState(null);//vai configurar o metodo utilizado e os cabeçalhos;
    const [method, setMethod] = useState(null);//qual método estarei utilizado na minha função;
    const [callFetch, setCallFetch] = useState(false);

    //6 - loading

    const [loading, setLoading] = useState(false);


    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data),
            })
            setMethod(method);
        }
    }
    useEffect(() => {
        const fetchData = async () => {

            //loading
            setLoading(true);

            const res = await fetch(url);

            const json = await res.json();

            setData(json);
            setLoading(false);
        }
        fetchData();
    }, [url, callFetch]);

    // 5 - refatorando post

    useEffect(() => {
        const httpRequest = async () => {

            if (method === "POST") {
                let fetchOptions = [url, config];

                const res = await fetch(...fetchOptions);

                const json = await res.json();

                setCallFetch(json);

            }
        }
        httpRequest();

    }, [config, method, url])
    return { data, httpConfig, loading };
}