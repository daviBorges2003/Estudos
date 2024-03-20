export const FetchApi = (url) => {
    return fetch(url)
        .then(res => res.json())
        .then(data =>{
            return data;
        })
        .catch((e) => console.log(e))
}