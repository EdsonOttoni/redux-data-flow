import { parseISO, formatDistanceToNow } from 'date-fns'

interface ITimeStamp {
  timeStamp: string
}

const TimeAgo = ({ timeStamp }: ITimeStamp) => {
  let timeAgo = ''
  if (timeStamp) {
    const date = parseISO(timeStamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }
  return (
    <span title={timeStamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  )
}

export default TimeAgo
