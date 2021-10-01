import React from 'react';
import styled from 'styled-components';
import { LibWithTheme } from '../theme-provider';
import {
  Button,
  ExportBtn,
  SaveBtn,
  Submit,
  ButtonStyled,
  EditButton
} from '../button';

const ButtonsC = () => {
  return (
    <div>
      <h2>Buttons</h2>
      <br />
      <br />
      <Title>Button</Title>
      <br />
      <Wrapper>
        <ButtonWrapper>
          <Button>Default</Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button disabled={true}>Disabled</Button>
        </ButtonWrapper>
      </Wrapper>

      <Title>ExportBtn</Title>

      <Wrapper>
        <ButtonWrapper>
          <ExportBtn>Default</ExportBtn>
        </ButtonWrapper>
        <ButtonWrapper>
          <ExportBtn disabled={true}>Disabled</ExportBtn>
        </ButtonWrapper>
      </Wrapper>

      <Title>SaveBtn</Title>

      <Wrapper>
        <ButtonWrapper>
          <SaveBtn>Default</SaveBtn>
        </ButtonWrapper>
        <ButtonWrapper>
          <SaveBtn disabled={true}>Disabled</SaveBtn>
        </ButtonWrapper>
      </Wrapper>

      <Title>Submit</Title>

      <Wrapper>
        <ButtonWrapper>
          <Submit onClick={() => {}} loading={false} disabled={false}>
            Default
          </Submit>
        </ButtonWrapper>
        <ButtonWrapper>
          <Submit onClick={() => {}} loading={false} disabled={true}>
            Disabled
          </Submit>
        </ButtonWrapper>
        <ButtonWrapper>
          <Submit onClick={() => {}} loading={true} disabled={false}>
            Loading
          </Submit>
        </ButtonWrapper>
      </Wrapper>

      <Title>EditButton</Title>

      <Wrapper>
        <EditButton
          itemCountString={'Edit 2 Items'}
          resetKeys={() => {}}
          onClick={() => {}}
        />
      </Wrapper>

      <div>
        <b>V1</b>
      </div>
      <Title>ButtonStyled.Primary</Title>
      <Wrapper>
        <ButtonWrapper>
          <ButtonStyled.Primary>Default</ButtonStyled.Primary>
        </ButtonWrapper>
        <ButtonWrapper>
          <ButtonStyled.Primary disabled={true}>Disabled</ButtonStyled.Primary>
        </ButtonWrapper>
      </Wrapper>
      <Title>ButtonStyled.Dark</Title>
      <Wrapper>
        <ButtonWrapper>
          <ButtonStyled.Dark>Default</ButtonStyled.Dark>
        </ButtonWrapper>
        <ButtonWrapper>
          <ButtonStyled.Dark disabled={true}>Disabled</ButtonStyled.Dark>
        </ButtonWrapper>
      </Wrapper>
      <Title>ButtonStyled.Grey</Title>
      <Wrapper>
        <ButtonWrapper>
          <ButtonStyled.Grey>Default</ButtonStyled.Grey>
        </ButtonWrapper>
        <ButtonWrapper>
          <ButtonStyled.Grey disabled={true}>Disabled</ButtonStyled.Grey>
        </ButtonWrapper>
      </Wrapper>
      <Title>ButtonStyled.Light</Title>
      <Wrapper>
        <ButtonWrapper>
          <ButtonStyled.Light>Default</ButtonStyled.Light>
        </ButtonWrapper>
        <ButtonWrapper>
          <ButtonStyled.Light disabled={true}>Disabled</ButtonStyled.Light>
        </ButtonWrapper>
      </Wrapper>
      <Title>ButtonStyled.Blue</Title>
      <Wrapper>
        <ButtonWrapper>
          <ButtonStyled.Blue>Default</ButtonStyled.Blue>
        </ButtonWrapper>
        <ButtonWrapper>
          <ButtonStyled.Blue disabled={true}>Disabled</ButtonStyled.Blue>
        </ButtonWrapper>
      </Wrapper>
      <Title>ButtonStyled.Small</Title>
      <Wrapper>
        <ButtonWrapper>
          <ButtonStyled.Small>Default</ButtonStyled.Small>
        </ButtonWrapper>
        <ButtonWrapper>
          <ButtonStyled.Small disabled={true}>Disabled</ButtonStyled.Small>
        </ButtonWrapper>
      </Wrapper>
      <Title>ButtonStyled.Cancel</Title>
      <Wrapper>
        <ButtonWrapper>
          <ButtonStyled.Cancel>Default</ButtonStyled.Cancel>
        </ButtonWrapper>
        <ButtonWrapper>
          <ButtonStyled.Cancel disabled={true}>Disabled</ButtonStyled.Cancel>
        </ButtonWrapper>
      </Wrapper>
    </div>
  );
};

export const Buttons = LibWithTheme(ButtonsC);

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
 
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 200px;
  align-content: center;
  padding: 0 40px;
};`

const Title = styled.h3`
  margin-bottom: 20px;
`;
