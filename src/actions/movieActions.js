// src/actions/movieActions.js
import axios from 'axios';

// Replace with your actual OMDB API key
const API_KEY ='http://www.omdbapi.com/?i=tt3896198&apikey=6d72904e'; // 👈 Get from omdbapi.com/apikey.aspx

export const fetchMovies = (searchTerm) => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_MOVIES_REQUEST' });

    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`
    );

    if (response.data.Error) {
      throw new Error(response.data.Error);
    }

    dispatch({
      type: 'FETCH_MOVIES_SUCCESS',
      payload: response.data.Search || [],
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_MOVIES_FAILURE',
      payload: error.response?.data?.Error || error.message,
    });
  }
};