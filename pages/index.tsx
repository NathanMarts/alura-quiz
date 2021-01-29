import { delBasePath } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import styled from 'styled-components';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import { Widget } from '../src/components/Widget';
import db from '../db.json'

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 50px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Seila</h1>
          </Widget.Header>
          <Widget.Content>
            <h1>The Legend of Zelda</h1>
            <p>skçdjlaskjdlkasjdklasd</p>
          </Widget.Content>
        </Widget>
        <Widget>
          My page
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl='askjd' />
    </QuizBackground>
  );
}
