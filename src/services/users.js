import http from '../utils/request'; /* eslint import/no-cycle:0 */

export default {
  create: ({ payload }) => http.post('/users', payload),
};
