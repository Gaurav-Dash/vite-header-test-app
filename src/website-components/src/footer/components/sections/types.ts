import { ReactNode } from 'react';

export type SectionType = {
  title: string;
  content: ReactNode;
};

export type Props = { sections: SectionType[] };
