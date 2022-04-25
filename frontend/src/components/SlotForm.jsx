/*=== Author= Mika ===*/

//import { useState } from 'react' //drm
//import { useDispatch } from 'react-redux' //drm

// Need to adjust import according to renamed files
//import { createGoal } from '../features/goals/goalSlice' //drm

import { useSelector } from 'react-redux' //drm
import SlotItem from '../components/SlotItem' //drm

// Change the name of the function and most substance
//  New SlotForm Function
function SlotForm(props) {
  var weekStart = new Date(props.wStart); //drm added passing of props
  //console.log(weekStart);
  
  const { slots } = useSelector( //drm added slots retrieval
    (state) => state.slots
  )
  /* drm
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal({ text }))
    setText('')
  }*/


  // TO DO -- Only print the slots for this week and put them in grid format.
  // Should return the week calendar form
  return ( 
    <section className='container'>
        <div className='grid-container'>
            <div id='Su' className='day'>
                <p>Su</p>
            </div>
            <div id='M' className='day'>
                <p>M</p>
            </div>
            <div id='Tu' className='day'>
              <p>Tu</p>
            </div>
            <div id='W' className='day'>
              <p>W</p>
            </div>
            <div id='Th' className='day'>
              <p>Th</p>
            </div>
            <div id='F' className='day'>
              <p>F</p>
            </div>
            <div id='Sa' className='day'>
              <p>Sa</p>
            </div>
            {/* This part needs to be adjusted
            to properly display the SlotItem
            and then replicated across the days */}
            <div className='sub-grid'>
              {slots.length > 0 ? (
                <div className='slots'>
                    {slots.map((slot) => (
                      <SlotItem key={slot._id} slot={slot} />
                    ))}
                </div>
              ) : (
                <p></p>
              )}
            </div>
        </div>
      </section>
  )
}

export default SlotForm
