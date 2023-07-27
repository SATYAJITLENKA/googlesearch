import axios from "axios";

const BASE_URL ="https://www.googleapis.com/customsearch/v1"

const params={
    key:'AIzaSyB_AAZmS1O_SgmUwqnIzI_8fWjkj6fLQFg',
    cx:'c209a7e1e8bb34e80'
}

export const fetchDataFromApi=async(payload)=>{
    const {data} = await axios.get(BASE_URL,{
        params:{...params,...payload}
    })
    return data;
};