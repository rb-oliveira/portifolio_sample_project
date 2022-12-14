import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  return (
    <FormContainer data-aos="fade-up">
      <Input placeholder="Nome" required />
      <Input placeholder="E-mail" type="email" required />
      <TextArea placeholder="Mensagem" required />
      <button type="submit">Enviar</button>
    </FormContainer>
  );
}
