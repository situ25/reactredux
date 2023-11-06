import logo from './logo.svg';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { incNumber,decNumber } from './actions/index';


function App() {

  const myState =useSelector((state) => state.changeNumber);
  const dispatch= useDispatch();

  return (
    <>
        <div className="container">
          <h1>Increment/Decrement counter</h1>
          <h4>using react and redux</h4>

          <div className="quantity">
            <a className="quantity_minus" title="decrement" onClick={()=> dispatch(decNumber(4))}><span>-</span></a>
            <input name="quantity" type="text" className="quantity_input" value={myState}/>
            <a className="quantity_plus" title="increment" onClick={()=> dispatch(incNumber(5))}><span >+</span></a>
          </div>
        </div>
    </>
  );
}

export default App;
