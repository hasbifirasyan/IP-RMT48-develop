import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/fetch/fetchHotelSlice'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <span>Your Review: {count}</span>
      </div>
      <div className='d-flex gap-2 ms-3'>
        <button  className="btn btn-sm btn-primary"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button  className="btn btn-sm btn-warning"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  )
}