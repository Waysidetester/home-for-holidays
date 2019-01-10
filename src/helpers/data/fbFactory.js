import axios from 'axios';
import fbAccess from '../fbAccess/fbAccess';

const getFriend = () => new Promise((resolve, reject) => {
  axios.get('https://home-for-holidays-d90a8.firebaseio.com/')
    .then((res) => {
      console.log(res);
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getFriend };
