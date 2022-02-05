import axios from 'axios';

const baseUrl = process.env.JS_QUESTIONS_API_URL;
// const baseUrl = 'https://full-stack-interview-questions.herokuapp.com/api';

const api = axios.create({ baseURL: baseUrl });

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
