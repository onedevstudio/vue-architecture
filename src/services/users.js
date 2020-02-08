import http from '@/utils/request';

export default {
  create: ({ payload }) => http.post('/users', payload),
};
