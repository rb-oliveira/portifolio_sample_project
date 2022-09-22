import { Container } from './styles';
import { SectionTitle } from '../SectionTitle';
import ExperienceItem from './ExperienceItem';

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="05 Anos" description="de experiência" />

      <section>
        <ExperienceItem
          year="2021"
          title="Dev Front-end"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ExperienceItem
          year="2021"
          title="Dev Front-end"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ExperienceItem
          year="2021"
          title="Dev Front-end"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ExperienceItem
          year="2021"
          title="Dev Front-end"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </section>
    </Container>
  );
}
