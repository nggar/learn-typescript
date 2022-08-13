type Props = {
  className?: string;
  gender: string;
};

const Gender = ({ className, gender }: Props) => {
  return <p className={className}>{gender}</p>;
};

export default Gender;
