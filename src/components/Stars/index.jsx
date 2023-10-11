import { Container } from "./styles";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function Stars({ rating = 0 }) {
  return (
    <Container>
      {rating >= 1 ? <AiFillStar /> : <AiOutlineStar />}
      {rating >= 2 ? <AiFillStar /> : <AiOutlineStar />}
      {rating >= 3 ? <AiFillStar /> : <AiOutlineStar />}
      {rating >= 4 ? <AiFillStar /> : <AiOutlineStar />}
      {rating >= 5 ? <AiFillStar /> : <AiOutlineStar />}
    </Container>
  );
}
