//rfc

interface ProfileCardProps {
  avatar?: string;
  name: string;
  description: string;
}

export default function ProfileCard(props: ProfileCardProps) {
  const { avatar, name, description } = props;
  return (
    <div>
      {name}
      <img src={avatar || "das"} alt={"User avatar:" + name} />
      <p>{description}</p>
    </div>
  );
}
