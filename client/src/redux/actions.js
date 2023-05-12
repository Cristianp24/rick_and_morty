import axios from 'axios';


export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: 'ADD_FAV',
             payload: data,
          });
       });
    };
 };
 
    // return {
    //     type: 'ADD_FAVORITE',
    //     payload: character
    // }


export const removeFav = id => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
        axios.delete(endpoint).then(({data})=>{
            return dispatch ({
                type: 'REMOVE_FAVORITE',
                payload: data,
            })
        })
    }  
}
export const filterCards = (gender) => {
    return {
        type: 'FILTER',
        payload: gender
    }
}
export const orderCards = (id) => {
    return {
        type: 'ORDER',
        payload: id
    }
}
