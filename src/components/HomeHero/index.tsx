/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/pessoa.webp';

export function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Minha Foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Gabriel</h2>
        </TextContainer>

        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha Apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Gabriel,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Borges</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Dev Front-end,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Cidade Alta</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
