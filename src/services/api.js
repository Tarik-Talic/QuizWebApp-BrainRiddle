import { useQuery } from 'react-query';
import axios from 'axios';
import { formatQuizData } from './formatData';

const getData = async (settings) => {
  return await axios
    .get(
      `https://opentdb.com/api.php?amount=5&category=${settings.category}&difficulty=${settings.difficulty}&type=${settings.type}`
    )
    .then((res) => formatQuizData(res.data.results));
};

const getCategory = () => {
  return axios.get(`https://opentdb.com/api_category.php`);
};
export const useQuizData = (settings) => {
  return useQuery({
    queryKey: ['quizData', settings],
    queryFn: () => getData(settings),
    enabled: false,
  });
};
export const useQuizCategory = () => {
  return useQuery({
    queryKey: ['quizCategory'],
    queryFn: () => getCategory(),
  });
};