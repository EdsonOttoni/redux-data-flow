import React from 'react'
import PostsList from '../../components/PostsList'
import AddPosts from '../../components/AddPosts'

const PostPage = () => {
  return (
    <section>
      <AddPosts />
      <PostsList />
    </section>
  )
}

export default PostPage
