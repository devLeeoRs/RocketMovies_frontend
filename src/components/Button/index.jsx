import { Container } from "./styles";

export function Button({ title, icon: Icon, black, ...rest }) {
  return (
    <Container type="button" {...rest} $black={black}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  );
}
