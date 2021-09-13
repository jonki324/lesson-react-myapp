import api from './httpClient';

const apiUrl = '/todos';

export const fetchTodoList = async () => {
  return await api.get(apiUrl);
};
