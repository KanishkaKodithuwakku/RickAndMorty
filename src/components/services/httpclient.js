import axios from "axios";

const httpClient = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
    headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
    }
});

export default httpClient;
