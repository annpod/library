import React from 'react';
import styled from 'styled-components';
import { LibWithTheme } from '../theme-provider';
import { Button, ExportBtn, SaveBtn, Submit, ButtonStyled } from '../button';

const ButtonsC = () => {
  return (
    <div>
      <h2>Buttons</h2>
      <br />
      <br />
      <Title>Button</Title>
      <br />
      <Wrapper>
        <div>
          <Button>Default</Button>
        </div>
        <div>
          <Button disabled={true}>Disabled</Button>
        </div>
      </Wrapper>

      <Title>ExportBtn</Title>

      <Wrapper>
        <div>
          <ExportBtn>Default</ExportBtn>
        </div>
        <div>
          <ExportBtn disabled={true}>Disabled</ExportBtn>
        </div>
      </Wrapper>

      <Title>SaveBtn</Title>

      <Wrapper>
        <div>
          <SaveBtn>Default</SaveBtn>
        </div>
        <div>
          <SaveBtn disabled={true}>Disabled</SaveBtn>
        </div>
      </Wrapper>

      <Title>Submit</Title>

      <Wrapper>
        <div>
          <Submit onClick={() => { }} loading={false} disabled={false}>
            Default
          </Submit>
        </div>
        <div>
          <Submit onClick={() => { }} loading={false} disabled={true}>
            Disabled
          </Submit>
        </div>
        <div>
          <Submit onClick={() => { }} loading={true} disabled={false}>
            Loading
          </Submit>
        </div>
      </Wrapper>

      <div><b>V1</b></div>
      <Title>ButtonStyled.Primary</Title>
      <Wrapper>
        <div>
          <ButtonStyled.Primary>Default</ButtonStyled.Primary>
        </div>
        <div>
          <ButtonStyled.Primary disabled={true}>Disabled</ButtonStyled.Primary>
        </div>
      </Wrapper>
      <Title>ButtonStyled.Dark</Title>
      <Wrapper>
        <div>
          <ButtonStyled.Dark>Default</ButtonStyled.Dark>
        </div>
        <div>
          <ButtonStyled.Dark disabled={true}>Disabled</ButtonStyled.Dark>
        </div>
      </Wrapper>
      <Title>ButtonStyled.Light</Title>
      <Wrapper>
        <div>
          <ButtonStyled.Light>Default</ButtonStyled.Light>
        </div>
        <div>
          <ButtonStyled.Light disabled={true}>Disabled</ButtonStyled.Light>
        </div>
      </Wrapper>
      <Title>ButtonStyled.Blue</Title>
      <Wrapper>
        <div>
          <ButtonStyled.Blue>Default</ButtonStyled.Blue>
        </div>
        <div>
          <ButtonStyled.Blue disabled={true}>Disabled</ButtonStyled.Blue>
        </div>
      </Wrapper>
    </div>
  );
};

export const Buttons = LibWithTheme(ButtonsC);

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  div {
    display: flex;
    width: 200px;
    align-content: center;
    padding: 0 40px;
  }
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;
