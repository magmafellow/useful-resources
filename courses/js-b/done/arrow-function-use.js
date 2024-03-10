
// EXAMPLE 1
// const sum = (a, b) => a + b;

// console.log(sum(1, 2));
// console.log(sum(2, 5));



// EXAMPLE 2
// const post = {
//   title: 'Sample title',
//   comments: 3,
//   shared: true,
//   published: true,
//   postId: 5134
// }

// // const processedPost = (post) => {
// //   return {
// //     title: post.title,
// //     comments: post.comments,
// //     popular: post.comments > 5 ? true : false, 
// //   }
// // }

// const processedPost = (post) => ({
//   title: post.title,
//   comments: post.comments,
//   popular: post.comments > 5 ? true : false, 
// })

// console.log(processedPost(post));


// EXAMPLE 3
// (() => {
//   this.greet = () => 'Hey whats up?';
//   console.log(this); // window object

//   return this;
// })();


