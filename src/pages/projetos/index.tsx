import { Header } from '../../components/Header';
import { ProjectItem } from '../../components/ProjectItem';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

export default function Projetos() {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://i.pinimg.com/564x/12/75/d1/1275d124a86b3c15ed22c6ef0f825652.jpg"
        />
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://i.pinimg.com/564x/12/75/d1/1275d124a86b3c15ed22c6ef0f825652.jpg"
        />
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://i.pinimg.com/564x/12/75/d1/1275d124a86b3c15ed22c6ef0f825652.jpg"
        />
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://i.pinimg.com/564x/12/75/d1/1275d124a86b3c15ed22c6ef0f825652.jpg"
        />
      </main>
    </ProjectsContainer>
  );
}
