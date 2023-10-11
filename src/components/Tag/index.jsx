import { Container } from "./styles";

export function Tag({ dark, title }) {
  return <Container $dark={dark}>{title}</Container>;
}
