import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SectionTitle } from '../SectionTitle';
import KnowledgesItem from './knowledgesItem';
import { Container } from './styles';

export function Knowledges() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <KnowledgesItem title="HTML" icon={<AiFillHtml5 />} />
        <KnowledgesItem title="CSS" icon={<FaCss3Alt />} />
        <KnowledgesItem title="Javascript" icon={<IoLogoJavascript />} />
        <KnowledgesItem title="React" icon={<FaReact />} />
      </section>
    </Container>
  );
}
