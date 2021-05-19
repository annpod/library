import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  CheckedInputStyles
} from './resources.styled';

export const Primary = () => {
  return (
    <CheckedInputStyles.Wrapper>
      <CheckedInputStyles.CheckboxWrapper>
        <CheckedInputStyles.CheckboxLabel>
          <span>Label</span>
          <CheckedInputStyles.Checkbox checked={true} onChange={() => {}} />
        </CheckedInputStyles.CheckboxLabel>
      </CheckedInputStyles.CheckboxWrapper>
    </CheckedInputStyles.Wrapper>
  );
};

const Fields = Primary.bind({});

export default {
  title: 'CheckedInputStyles',
  component: Primary,
  parameters: {
    docs: {
      source: {
        code: `<CheckedInputStyles.Wrapper>
        <CheckedInputStyles.CheckboxWrapper>
          <CheckedInputStyles.CheckboxLabel>
            <span>allLabel</span>
            <CheckedInputStyles.Checkbox
              checked={true}
              onChange={() => {}}
            />
          </CheckedInputStyles.CheckboxLabel>
        </CheckedInputStyles.CheckboxWrapper>         
      </CheckedInputStyles.Wrapper> `
      }
    }
  }
} as Meta;
