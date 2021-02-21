import { BASE_PATH, API_VERSION } from "./config";

export function saveTaskApi(data) {
    const url = `${BASE_PATH}/${API_VERSION}/addTask/${data}`;
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