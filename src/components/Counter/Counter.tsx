import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(10);
  // переменная состояния == state
  // функция setter - вызывывает ререндер компонента
  // useState - хук
  // Хук - это функция, которая позволяет "подключиться" к функционалу React из функционального компонента
  // useState - позволяет создать переменную состояния в функциональном компоненте
  // Что нужно запомнить о каждом хук?
  // - что принимает? Начальное значение переменной состояния.
  // - что возвращает? Кортеж(tuple), где на первом месте стейт- переменная состояния(state),
  //  а на втором месте какая-нибудь функция сеттера(setState)
  // (Создает стейт, изменения которого вызывают ререндер компонента)

  function printCounter() {
    console.log(counter);
  }

  function handleAddOne() {
    setCounter(counter + 1);
  }

  function handleMinusTwo() {
    //setCounter(counter - 1);
    setCounter((prevCounter) => prevCounter - 2);
  }
  function handleResetCounter() {
    setCounter(0);
  }

  // Создайте кнопку -2
  return (
    <div>
      <h2>{counter}</h2>

      <button type="button" onClick={printCounter}>
        Print to console
      </button>

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
