import axios from 'axios';

const fetchUser = () => {
  console.log('fetching user');
  return axios
    .get('https://jsonplaceholder.typicode.com/users/1/')
    .then((res) => res.data)
    .catch((err) => console.error(err));
};
const fetchPosts = () => {
  console.log('fetching posts');
  return axios
    .get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

const wrapPromise = (promise) => {
  // set initial status
  let status = 'pending';
  // store result
  let result;
  // wait for promise
  const suspender = promise.then(
    (res) => {
      status = 'success';
      result = res;
    },
    (err) => {
      status = 'error';
      result = err;
    }
  );

  return {
    read() {
      if (status === 'pending') {
        // this will be caught by the .then, assuming that's the err?
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
};

export const fetchData = () => {
  const userPromise = fetchUser();
  const postsPomise = fetchPosts();
  return {
    user: wrapPromise(userPromise),
    posts: wrapPromise(postsPomise),
  };
};
