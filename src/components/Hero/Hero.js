import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I'm Regular React/BlockChain developer living in Cracow, Poland. I've created my own app KROPELKA and my aim is to provide appliations that make people's live better.
        </SectionText>
        <Button onClick={props.handleClick}><a href='CV.jpg' download>Get CV in file</a></Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;