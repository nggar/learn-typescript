// Styles
import { Wrapper, StyledGender } from './Card.styles';

type Props = {
  name: string;
  imgUrl: string;
  gender: string;
};

const Card = ({ name, imgUrl, gender }: Props) => (
  <Wrapper>
    <p>{name}</p>
    <img src={imgUrl} alt={name} />
    <StyledGender color="green" gender={gender} />
  </Wrapper>
);

export default Card;
