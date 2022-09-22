import { BannerProject } from '../../../components/BannerProject';
import { Header } from '../../../components/Header';
import { ProjectInfoContainer } from '../../../styles/projectInfoStyles';

export default function ProjectInfo() {
  return (
    <ProjectInfoContainer>
      <Header />
      <BannerProject
        title="Projeto 01"
        type="Website"
        imgUrl="https://i.pinimg.com/564x/82/94/5d/82945d4e42fb7b95599174e4d2f9f578.jpg"
      />

      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, unde
          rerum maiores dolores iste voluptatibus esse ullam, eius temporibus
          impedit consequatur modi? Necessitatibus sint vero ut iste, officia
          possimus animi aperiam? Dolorem quisquam nihil labore rerum at
          similique, repudiandae alias. Sunt facilis modi velit inventore porro
          beatae odio doloremque. Et aut quis minus unde accusamus. Illo nihil
          quod accusamus neque, consectetur iusto, quibusdam inventore
          reprehenderit sint minima quaerat ut fugiat placeat in, culpa aperiam
          voluptates cumque itaque dolor rem! Tenetur?
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </ProjectInfoContainer>
  );
}
