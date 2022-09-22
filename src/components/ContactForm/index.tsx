import { SectionTitle } from '../SectionTitle';
import Form from './form';
import { Container } from './styles';

export function ContactForm() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Precisa dos
            <br />
            meus serviços?
          </>
        }
        description={
          <>
            Preencha o formulário abaixo que
            <br />
            irei retornar em breve
          </>
        }
      />
      <Form />
    </Container>
  );
}
