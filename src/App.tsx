import "./App.css";
import AgeInfo from "./components/AgeInfo/AgeInfo";
import Counter from "./components/Counter/Counter";
import Demo from "./components/Demo/Demo";
import DogCard from "./components/DogCard/DogCard";
import Goodbye from "./components/Goodbye/Goodbye";
import Greeting from "./components/Greeting/Greeting";
import Nationality from "./components/Nationality/Nationality";
import PersonalGreeting from "./components/PersonalGreeting/PersonalGreeting";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";

function App() {
  return (
    <div>
      <PersonalGreeting />
      <Greeting />
      <Counter />
      <DogCard />
      <ProfileCard
        name="Anna Metzer"
        description="Your personal assistent"
        avatar="https://avatar.iran.liara.run/public/87"
      />
      <p>Live</p>

      <Goodbye name={"Bob"} />
      <Goodbye name={"John"} />
      <AgeInfo age={23} name={"Andy"} />
      <AgeInfo age={26} name={"Fred"} />
      <SpaceMissionForm  />
      <Demo/>
      <Nationality/>
    </div>
  );
}

export default App;
// Создайте компонент, который выводит на экран фразу
// It was nice to see you!
// назовите компонент Goodbye

// Создайте компонент AgeInfo, который бы отображал следующий текст:
//I am <number> old
