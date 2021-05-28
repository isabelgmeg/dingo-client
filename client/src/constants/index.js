
export const BASE_URL =
process.env.NODE_ENV === 'production'
  ? 'https://dingomeal.herokuapp.com/dingo'
  : 'http://localhost:4001/dingo';
