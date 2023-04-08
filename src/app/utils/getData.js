import axios from "axios";
import 'server-only';

const options = {
    method: 'GET',
    url: 'https://currency-exchange.p.rapidapi.com/listquotes',
    headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }
};

export const getData = async () => {

    const req = await fetch('https://currency-exchange.p.rapidapi.com/listquotes', {
        cache: 'no-store',
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        },
    })

    const data = await req.json()
    return data;
}




