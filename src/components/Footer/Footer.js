import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:536-300-594">536-300-594</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:patryk.wadowski98@gmail.com">
            patryk.wadowski98@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Fueled by energy drinks, driven by Satan</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons target='_blank' href="https://github.com/Wado317?tab=repositories">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons target='_blank' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons target='_blank' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
