import axios from 'axios';

const baseURL = "https://voda-react-assessment.herokuapp.com";

export const home = () => {
    return axios({
        method: 'get',
        url: baseURL + '/home',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    });
}

export const page = () => {
    return axios({
        method: 'get',
        url: baseURL + '/page',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    });
}

export const menu = () => {
    return axios({
        method: 'get',
        url: baseURL + '/menu',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    });
}

export const slider = () => {
    return axios({
        method: 'get',
        url: baseURL + '/slider',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    });
}