import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../redux/counterSlice';
function Counter() {
  const dispatch = useDispatch()
  //state to store user input
  const [range ,setRange] = useState('')


  //component can access the state by using useSelector Hook

  const count = useSelector((state)=>state.counter.value)

  console.log(range);
  return (
    <div className="App justify-content-center align-items-center d-flex" style={{backgroundColor:'black',height:'100vh'}}>
       
        <div className=' p-5 rounded bg-light ' style={{width:"400px"}}>
            <h2>Counter Application</h2>
          <div className='bg-light d-flex justify-content-center align-items-center align-items-center w-100 p-4 rounded flex-column'>
            <h1>{count}</h1>
          </div>
          <form className='mt-5'>            
            <Stack  direction="row" spacing={1}>
            <Button onClick={()=>dispatch(increment(Number(range)))} variant="contained" color="success">Increment</Button>
            <Button onClick={()=>dispatch (decrement(Number(range)))} variant="contained" color="warning">Decrement</Button>
            <Button onClick={()=>dispatch(reset())} variant="contained" color="error">Reset</Button>
            </Stack>
          </form>
          <div className='mt-3 w-100'>
            <input type="text" onChange={(e)=>setRange(e.target.value)} className='form-control' style={{borderColor:'blue'}} placeholder='enter the range' />
          </div>
    
        </div>   
       
    </div>
  );
}

export default Counter;
