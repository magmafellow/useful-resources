const posts = [
  { postId: 1355, commentsQuantity: 5 },
  { postId: 5131, commentsQuantity: 13 },
  { postId: 6134, commentsQuantity: 2 },
]

function findSinglePost(postId, posts) {
  return posts.find((post) => post.postId === postId);
}

console.log(findSinglePost(6134, posts));

console.log(findSinglePost(4431, posts));
