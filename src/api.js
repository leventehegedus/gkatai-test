export function getPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts");
}

export function getPost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

export function getComments() {
  return fetch("https://jsonplaceholder.typicode.com/comments");
}

export function getAlbums() {
  return fetch("https://jsonplaceholder.typicode.com/albums");
}

export function getPhotosForAlbum(albumId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
  );
}
