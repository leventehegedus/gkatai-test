export function getPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts");
}

export function getPost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

export function getComments() {
  return fetch("https://jsonplaceholder.typicode.com/comments");
}
