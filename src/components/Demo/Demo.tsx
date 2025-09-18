import React from 'react'

export default function Demo() {
  return (
    <div>Demo</div>
  )
}

// Компонент-демо для проверки работоспособности сборки
//Component lifecycle
// 1. Mounting (создание компонента)
// 2. Updating (обновление компонента)
// 3. Unmounting (удаление компонента) 

//    вариант 1 - без массивая зависимостей
  //    при первом рендере, при последующий ререндерах
  //    иными словами при любых изменениях
  useEffect(() => {
    console.log("Hey-hey!");
  });
  
  //.  вариант 2 - с пустым массивом зависимостей
  useEffect(() => {
    console.log("Hey-hey!");
  }, []);

  //    вариант 1 - без массивая зависимостей
  //    при первом рендере, при последующий ререндерах
  //    иными словами при любых изменениях
  useEffect(() => {
    console.log("Variant 1 - no array");
  });
  
  //.  вариант 2 - с пустым массивом зависимостей
  useEffect(() => {
    console.log("Variant 2 - emty depencies array!");
  }, []);

  const [weight, setWeight] = useState(0);
<div>
      <h2>Demo Age: {age} Weight: {weight}</h2>
      <button type="button" onClick={() => setAge((prev) => prev + 1)}>
        +1 Age
      </button>
      <button type="button" onClick={() => setWeight((prev) => prev + 1)}>
        +1 Weight
      </button>
    </div>