import { useMemo, useState } from "react";
import { API_KEY, exchangeEndpoint, headers } from "../utils/configs";
import axios from "axios";

const useExchange = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getResult = ({ params, callBack }) => {

        const options = {
            method: 'GET',
            url: exchangeEndpoint,
            params,
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
            }
        };

        setLoading(true);
        setError(null);

        axios.request(options).then(function (response) {
            setLoading(false);
            setError(null);

            callBack(`${params.q} ${params.from} equals ${response.data} ${params.to}`);
            return response.data;
        }).catch(function (error) {
            setLoading(false)
            setError(error?.message);
        });


    }

    return { loading, error, getResult }
}

export default useExchange;