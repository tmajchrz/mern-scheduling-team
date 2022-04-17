import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import SlotForm from '../components/SlotForm'
import SlotItem from '../components/SlotItem'
import Spinner from '../components/Spinner'
import { getSlots, reset } from '../features/goals/slotSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { slots, isLoading, isError, message } = useSelector(
    (state) => state.slots
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getSlots())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Volunteer Dashboard</p>
      </section>

      <SlotForm />

      <section className='content'>
        {slots.length > 0 ? (
          <div className='slots'>
            {slots.map((slot) => (
              <SlotItem key={slot._id} slot={slot} />
            ))}
          </div>
        ) : (
          <h3>You have not set any shifts</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
