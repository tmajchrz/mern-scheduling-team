import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'

function SlotForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal({ text }))
    setText('')
  }

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
