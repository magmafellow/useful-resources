const postsJSON = [
  '{"postId":1355, "commentsQuantity":5}',
  '{"postId":5131, "commentsQuantity":13}',
  '{"postId":6134, "commentsQuantity":2}'
];

// option #1
// posts = postsJSON.map((string) => JSON.parse(string));

// option #2
posts = postsJSON.map(JSON.parse);

console.log(posts);
console.log(posts[0].postId);
