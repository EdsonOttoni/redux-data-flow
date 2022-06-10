import { useAppSelector } from '../../hooks/redux'
import { selectAllPosts } from '../../features/posts/postsSlice'
import PostsAuthor from '../../features/PostsAuthor'
import TimeAgo from '../TimeAgo'
import ReactionBtns from '../ReactionBtns'

const PostsList = () => {
  const posts = useAppSelector(selectAllPosts)

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map(post => (
    <article>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p>
        <PostsAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
      </p>
      <ReactionBtns post={post} />
    </article>
  ))

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostsList
