const posts = [
  {
    title: 'How to find Javascript developer job?',
    postId: 3421,
    comments: 25,
  },
  {
    title: 'Is it hard to learn ES6?',
    postId: 5216,
    comments: 3,
  },
  {
    title: 'Should I learn React or Angular',
    postId: 8135,
    comments: 12,
  },
]

const minimalCommentsQty = 10

const popularPostsIds = (posts, minimalCommentsQty) =>
  posts.reduce((arrOfIds, obj) => {
    if (obj.comments >= minimalCommentsQty) {
      arrOfIds.push(obj.postId)
      // return arrOfIds // it is a surplus line of code
    }
    return arrOfIds
  }, [])


console.log(popularPostsIds(posts, minimalCommentsQty)) // 3421, 8135
