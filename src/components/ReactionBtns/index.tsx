import { useAppDispatch } from '../../hooks/redux'
import { reactionAdded } from '../../features/posts/postsSlice'

interface ReactionBtnsProps {
  post: IPosts
}

const reactionEmoji: Record<keyof IReactions, string> = {
  thumbsUp: 'THUMBSUP',
  wow: 'WOW',
  heart: 'HEART',
  rocket: 'ROCKET',
  coffee: 'COFFEE',
}

const ReactionBtns = ({ post }: ReactionBtnsProps) => {
  const dispatch = useAppDispatch()
  const reactionBtns = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        onClick={() =>
          dispatch(
            reactionAdded({
              postId: post.id,
              reaction: name as keyof IReactions,
            }),
          )
        }>
        {post.reactions[name as keyof IReactions]} {emoji}
      </button>
    )
  })
  return <div>{reactionBtns}</div>
}

export default ReactionBtns
