import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../accordion';

import { Props } from './types';

const MobileSections = ({ sections }: Props) => {
  return (
    <Accordion type="single" collapsible>
      {sections.map((section, index) => {
        return (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b-[#646470]"
          >
            <AccordionTrigger className="hover:no-underline">
              <p className="text-mobile/heading-4">{section.title}</p>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-6 ">
              {section.content}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default MobileSections;
