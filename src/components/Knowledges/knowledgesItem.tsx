import { ReactNode } from 'react';
import { KnowledgesContainer } from './styles';

interface KnowledgesProps {
  title: string;
  icon: ReactNode;
}

export default function KnowledgesItem({ title, icon }: KnowledgesProps) {
  return (
    <KnowledgesContainer>
      <p>{title}</p>
      {icon}
    </KnowledgesContainer>
  );
}
