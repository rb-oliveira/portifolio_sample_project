import Link from 'next/link';
import { SectionTitle } from '../SectionTitle';
import ProjectItem from './projectItem';
import { Container } from './styles';

export function Projects() {
  return (
    <Container>
      <SectionTitle title="Útimos Projetos" />

      <section>
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          img="https://i.pinimg.com/564x/82/94/5d/82945d4e42fb7b95599174e4d2f9f578.jpg"
        />
        <ProjectItem
          title="Projeto 02"
          type="Website"
          slug="teste"
          img="https://i.pinimg.com/564x/82/94/5d/82945d4e42fb7b95599174e4d2f9f578.jpg"
        />
        <ProjectItem
          title="Projeto 03"
          type="Website"
          slug="teste"
          img="https://i.pinimg.com/564x/82/94/5d/82945d4e42fb7b95599174e4d2f9f578.jpg"
        />
      </section>

      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
