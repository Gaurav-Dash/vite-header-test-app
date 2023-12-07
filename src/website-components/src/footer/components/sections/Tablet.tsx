import React, { Fragment } from 'react';

import { Props, SectionType } from './types';

const TableSection = ({ title, content }: SectionType) => (
  <div>
    <p className="text-tablet/heading-5">{title}</p>
    {content}
  </div>
);

const Tablet = ({ sections }: Props) => {
  return (
    <Fragment>
      <div className="flex flex-col gap-10">
        {sections.slice(0, 2).map((section, idx) => {
          return <TableSection key={idx} {...section} />;
        })}
      </div>
      {sections.slice(2).map((section, idx) => {
        return <TableSection key={idx} {...section} />;
      })}
    </Fragment>
  );
};

export default Tablet;
