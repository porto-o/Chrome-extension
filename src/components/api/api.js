import { BASE_PATH, API_VERSION } from "./config";

export function SignUp(data){
    console.log(data)
    const url = `${BASE_PATH}/${API_VERSION}/signUp/${JSON.stringify(data)}`;
    const params = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
    };

    return fetch(url, params)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            //success
        })
        .catch((err) => {
            return "Server error "+ err.message;
        });
}

export function saveTaskApi(id, data) {
    const url = `${BASE_PATH}/${API_VERSION}/addTask/${id}`;
    const params = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    };

    return fetch(url, params)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            //success
        })
        .catch((err) => {
            return "Server error "+ err.message;
        });
}

export function getTasks(){
    const url = `${BASE_PATH}/${API_VERSION}/getTask/`;
    const params = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
    };

    return fetch(url, params)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            //success
        })
        .catch((err) => {
            return "Server error "+ err.message;
        });
}

