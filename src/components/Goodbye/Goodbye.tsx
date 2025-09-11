interface Props {
  name: string;
}

function Goodbye(props: Props) {
  //const name = "Bob";
  const { name } = props;
  return <p>It was nice to see you, {name}!</p>;
}

export default Goodbye;

// props - properties - свойства, которые мы передаем в компонент из вне
// component - компонент
// state - состояние компонента, внутренние данные компонента
// JSX - JavaScript XML