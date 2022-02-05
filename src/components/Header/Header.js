import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <span>Patryk Wadowski</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons target='_blank' href="https://github.com/Wado317?tab=repositories">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons target='_blank' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons target='_blank' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
