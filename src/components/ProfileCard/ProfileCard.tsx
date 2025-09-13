//rfc
import s from "./ProfileCard.module.css";

//props - свойства компонента, которые передаются в него извне
//props - объект, который содержит все свойства, переданные в компонент
//props - аналог параметров функции
interface ProfileCardProps {
  avatar?: string;
  name: string;
  description: string;
}

//fallback - заглушка, значение по умолчанию "Link" заглушка

const fallbackUrl = "https://avatar.iran.liara.run/public/87";

export default function ProfileCard(props: ProfileCardProps) {
  const { avatar = "Link", name, description } = props;
  return (
    <div className={s.container}>
      <h2 className={s.name}>{name}</h2>
      <img src={avatar || fallbackUrl} alt={"User avatar:" + name} />
      <p className={s.userDescription}>{description}</p>
    </div>
  );
}

//default value - значение по умолчанию
//optional props - необязательные пропсы
