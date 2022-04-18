/*=== Author= Mika ===*/

import { useState } from 'react'
import { useDispatch } from 'react-redux'

// Need to adjust import according to renamed files
import { createGoal } from '../features/goals/goalSlice'

// Change the name of the function and most substance
//  New SlotForm Function
function SlotForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal({ text }))
    setText('')
  }

// Should return the week calendar form
  return ( 
    <section className='container'>
        <div className="grid-container">
            <div id="Su" className="day">
                <p>Su</p>
            </div>
            <div id="M" className="day">
                <p>M</p>
            </div>
            <div id="Tu" className="day">
              <p>Tu</p>
            </div>
            <div id="W" className="day">
              <p>W</p>
            </div>
            <div id="Th" className="day">
              <p>Th</p>
            </div>
            <div id="F" className="day">
              <p>F</p>
            </div>
            <div id="Sa" className="day">
              <p>Sa</p>
            </div>
            {/* This part needs to be adjusted
            to properly display the SlotItem
            and then replicated across the days */}
            <div className="sub-grid">
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
