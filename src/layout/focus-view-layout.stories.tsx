import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FocusViewLayout } from './focus-view-layout';
import { IFocusViewLayout } from '../typings';
import { ButtonStyled } from '../button';

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
`;

export default {
  title: 'Layout/V1/FocusViewLayout',
  component: FocusViewLayout,
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<FocusViewLayout
        title={'Title'},
        header={
          <ButtonWrapper>
            <ButtonStyled.Primary disabled={!isValid} onClick={onSave}>
              Save
            </ButtonStyled.Primary>
          </ButtonWrapper>
        }>
        Page Content
        </FocusViewLayout>`
      }
    }
  }
} as Meta;

const Template: Story<IFocusViewLayout> = (args) => <FocusViewLayout {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'Title',
  header: 
    <ButtonWrapper>
      <ButtonStyled.Primary disabled={false} onClick={() => {}}>
        Save
      </ButtonStyled.Primary>
    </ButtonWrapper>
  ,
  children: <div>Page Content</div>,
 
};

