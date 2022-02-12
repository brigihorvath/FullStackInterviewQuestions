import axios from 'axios';

// const baseUrl = process.env.REACT_APP_API_URL;
// // const baseUrl = 'https://full-stack-interview-questions.herokuapp.com/api';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

// const api = axios.create({ baseURL: baseUrl });

export function getQuestions() {
  return api.get('/questions');
}

export function getQuestionId(questionId) {
  return api.get(`/questions/${questionId}`);
}

export function getQuestionCategory(category) {
  return api.get(`/questions/categories/${category}`);
}

export function getRandomQuestion() {
  return api.get('/questions/random');
}

export function searchQuestion(query) {
  return api.get(`/questions/search?q=${query}`);
}

export function createQuestion(question) {
  return api.post('/questions/create-question', question);
}

export function addToFavourites(questionId) {
  return api.post('/questions/favourites', questionId);
}

//////// AUTHENTICATION

export function login(credentials) {
  return api.post('/login', credentials);
}

export function signup(credentials) {
  return api.post('/signup', credentials);
}

export function logout() {
  return api.post('/logout');
}

export function isLoggedIn() {
  return api.get('/login');
}

export function getFavourites() {
  return api.get('/questions/favourites');
}

export function getUserData(userId) {
  return api.get(`/users/${userId}`);
}

export function updateUser(credentials) {
  return api.post('/users/update', credentials);
}
