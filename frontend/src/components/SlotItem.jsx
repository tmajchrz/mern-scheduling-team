import { useSelector } from 'react-redux'

function SlotItem({ slot }) {
  const { users } = useSelector((state) => state.users)
  const user = JSON.parse(localStorage.getItem('user'))

  // Display empty if missing needed elements
  if (!user) {
    return <div></div>
  }
  if (!users) {
    return <div></div>
  }

  // TO DO -- Have it print just the start time as in 10:30 am followed
  // by a hyphen (-) followed by an end time followed by the volunteer(s).
  return (
    <div className="slot">
      <div>
        {/* {console.log(user._id)} */}
        {new Date(slot.startAt).toLocaleString('en-US', {
          // If the dates are still needed then remove the comment syntax from the dateStyle below

          // dateStyle: 'short',
          timeStyle: 'short',
        })}{' '}
        -{' '}
        {new Date(slot.endAt).toLocaleString('en-US', {
          // If the dates are still needed then remove the comment syntax from the dateStyle below

          // dateStyle: 'short',
          timeStyle: 'short',
        })}
      </div>
      <div>
        {users.map((u) =>
          slot.vol1 === u._id && u.level === 'faculty' ? (
            <span key={slot.vol1}>
              <strong>{u.fname + ' ' + u.lname.charAt(0)}</strong>
            </span>
          ) : slot.vol1 === u._id ? (
            <span key={slot.vol1}>
              {', '} {u.fname + ' ' + u.lname.charAt(0)}
            </span>
          ) : (
            ''
          )
        )}

        {users.map((u) =>
          slot.vol2 === u._id && u.level === 'faculty' ? (
            <span key={slot.vol2}>
              {', '} <strong>{u.fname + ' ' + u.lname.charAt(0)}</strong>
            </span>
          ) : slot.vol2 === u._id ? (
            <span key={slot.vol2}>
              {', '} {u.fname + ' ' + u.lname.charAt(0)}
            </span>
          ) : (
            ''
          )
        )}
      </div>
    </div>
  )
}

export default SlotItem
