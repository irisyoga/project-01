

import './App.css';
import AgeInfo from './components/AgeInfo/AgeInfo';
import Goodbye  from './components/Goodbye/Goodbye';
import Greeting from './components/Greeting/Greeting';

function App() {
 
  return (
    <div>
    <p>Hello React!</p>
    <Greeting />
    <Greeting />
    <Greeting />
    {/*  */}
    <p>It was nice to see you!</p>
    <Goodbye name={"Bob"}/>
    <Goodbye name={"John"}/>
    <AgeInfo age={23} name={"Andy"}/>
    <AgeInfo age={26} name={"Fred"}/> 
    </div>
  );
}

export default App;
// Создайте компонент, который выводит на экран фразу
// It was nice to see you!
// назовите компонент Goodbye

// Создайте компонент AgeInfo, который бы отображал следующий текст:
//I am <number> old
