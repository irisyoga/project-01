
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(10);
  // переменная состояния == state
  // функция setter - вызывывает ререндер компонента
  // Что нужно запомнить о каждом хук?
  // - что принимает? Начальное значение переменной состояния.
  // - что возвращает? Создает стек, изменения которого вызывают ренрендер

 
  function handleAddOne() {
    setCounter(counter + 1);
  }

function handleMinusTwo() {
    setCounter((prevCounter) => prevCounter - 2);
  }
    function handleResetCounter() {  
    setCounter(0);
  } 

  // Создайте кнопку -2
  return (
    <div>
      <h2>{counter}</h2>

      <button type="button" onClick={handleAddOne}>
        +1
      </button>
      <button
        type="button"
        onClick={() => {
          setCounter((prev) => prev - 1);
        }}
      >
        -1
      </button>
    
        <button type="button" onClick={handleMinusTwo}>
        -2
      </button>

      <button type="button" onClick={handleResetCounter}>
        Reset
      </button>



       
    </div>
  );
}

