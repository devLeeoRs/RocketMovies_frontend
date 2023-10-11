import { Container } from "./styles";
import { IoCloseSharp } from "react-icons/io5";
import { BiPlus } from "react-icons/bi";

export function NewMark({ newMark, placeHolder, onClick, ...rest }) {
  return (
    <Container $new={newMark} type="button">
      <input {...rest} placeholder={placeHolder} type="text" />
      <button onClick={onClick} type="button">
        {newMark ? <BiPlus size={22} /> : <IoCloseSharp size={22} />}
      </button>
    </Container>
  );
}
