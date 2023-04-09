const { exchangeEndpoint, API_KEY } = require("@/utils/configs");
const { createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

export const fetchExchangeResult = createAsyncThunk(
    'exchange/fetchResult',
    async ({ params }) => {

        const options = {
            method: 'GET',
            url: exchangeEndpoint,
            params,
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
            }
        };

        const response = await axios.request(options);
        return { data: response.data, params };
    }
)