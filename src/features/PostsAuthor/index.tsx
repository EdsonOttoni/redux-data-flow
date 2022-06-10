import { useAppSelector } from '../../hooks/redux'
import { selectAllUsers } from '../users/usersSlice'

interface IPostAuthor {
  userId: string
}

const PostsAuthor = ({ userId }: IPostAuthor) => {
  const users = useAppSelector(selectAllUsers)
  const author = users.find(user => user.id === userId)
  return <span> by {author ? author.name : 'Unknown author'}</span>
}

export default PostsAuthor
