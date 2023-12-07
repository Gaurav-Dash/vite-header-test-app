import React, { useMemo } from 'react';

import Mobile from './Mobile';
import Tablet from './Tablet';
import Desktop from './Desktop';

import { Section } from '../Section';

import { FooterSection, Props } from '../../types';

const Sections = ({ sections }: { sections: Props['sections'] }) => {
  const updatedSections = useMemo(
    () =>
      sections.map((section, idx) => ({
        title: section.title,
        content: <Section key={idx} {...section} />,
      })),
    [sections],
  );

  return (
    <section className="tablet:flex-[9] tablet:pl-10 tablet:pb-10 tablet:gap-x-[34px] desktop-sm:pb-12 desktop-lg:pl-[84px]">
      <div className="block tablet:hidden">
        <Mobile sections={updatedSections} />
      </div>
      <div className="hidden tablet:flex tablet:flex-wrap tablet:justify-between desktop-sm:hidden">
        <Tablet sections={updatedSections} />
      </div>
      <div className="hidden desktop-sm:flex desktop-sm:justify-between">
        <Desktop
          sections={updatedSections.slice(0, updatedSections.length - 1)}
          lastSection={{ ...(sections.at(-1) as FooterSection) }}
        />
      </div>
    </section>
  );
};

export default Sections;
