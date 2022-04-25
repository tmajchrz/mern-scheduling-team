import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SlotForm from '../components/SlotForm';
import Spinner from '../components/Spinner';
import { getSlots, reset } from '../features/slots/slotSlice';
import { getUsers } from '../features/users/userSlice';

function Dashboard() {
  var today = new Date(), weekStart = new Date(), weekEnd = new Date();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  //console.log(user.fname);
  const { isLoading, isError, message } = useSelector(
    (state) => state.slots
  )

  // Set today to zero hours/minutes (beginning of day)
  today.setHours(0);
  today.setMinutes(0);
  //console.log(today);

  // Set weekStart to be the Sunday before today
  // (i.e. subtract getDay (number of days since Sunday) from it)
  weekStart.setDate(today.getDate()-today.getDay());

  // TO DO -- Set weekEnd to the Saturday after weekStart (i.e. add 6 to it)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getSlots());
    dispatch(getUsers());

    return () => {
      dispatch(reset())
    }
  }, [user, /* weekStart, weekEnd, */ navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      {/* Have it say Food Pantry Volunteer instead */}
      <section className='heading'>
        <h1>Welcome {user.fname}</h1>
        <p>Goals Dashboard</p>
      </section>

      <section>
        {weekStart.toDateString()}
        {/* TO DO -- add a tilde (~) and the end date here */}
      </section>

      {/* send weekStart and weekEnd values to SlotForm as parameters */}
      <SlotForm wStart = {weekStart} />
    </>
  )
}

export default Dashboard
