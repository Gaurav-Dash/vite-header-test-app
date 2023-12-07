import React, { Fragment } from 'react';
import { Props as BaseProps } from './types';
import { FooterSection } from '../../types';
import { Section } from '../Section';
import { SubSection } from '../SubSection';

const LastSection = ({ title, links, subSections }: FooterSection) => {
  return (
    <Fragment>
      <div className="flex flex-col">
        <p className="text-tablet/heading-5">{title}</p>
        <Section title={title} links={links} />
      </div>

      {subSections && subSections.length > 0 ? (
        <div className="flex flex-col gap-8">
          {subSections.map((subSection, idx) => (
            <SubSection
              key={idx}
              {...subSection}
              className="text-desktop/heading-6 normal-case"
            />
          ))}
        </div>
      ) : null}
    </Fragment>
  );
};

const Desktop = ({
  sections,
  lastSection,
}: BaseProps & { lastSection: FooterSection }) => {
  return (
    <Fragment>
      {sections.map((section, idx) => (
        <div key={idx}>
          <p className="text-tablet/heading-5 desktop-lg:text-desktop/heading-6">
            {section.title}
          </p>
          {section.content}
        </div>
      ))}
      <LastSection {...lastSection} />
    </Fragment>
  );
};

export default Desktop;
