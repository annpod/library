import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Icon } from '../icon';

import {
  ContentWrapper,
  ListPageBodyPanel,
  ListPageHeaderBox,
  ListPageSearchLabel,
  ListPageSearchInputBox,
  RouteButton,
  CancelBtn,
  CancelIcon,
  GlobalSeparator,
  MainTitle,
  MainTitleName,
  MainTitleRegion,
  SaveBtn,
  DeleteBtn,
  CheckedInputStyles
} from './resources.styled';

export const Primary = () => {
  return (
    <div>
      <ExampleItem>
        <h3>{'<ContentWrapper></ContentWrapper>'}</h3>
        <ContentWrapper>Content</ContentWrapper>
      </ExampleItem>
      <ExampleItem>
        <h3>{'<ListPageBodyPanel></ListPageBodyPanel>'}</h3>
        <ListPageBodyPanel>Content</ListPageBodyPanel>
      </ExampleItem>
      <ExampleItem>
        <h3>{'<ListPageHeaderBox></ListPageHeaderBox>'}</h3>
        <ListPageHeaderBox>Header</ListPageHeaderBox>
      </ExampleItem>
      <ExampleItem>
        <h3>{'<ListPageSearchLabel></ListPageSearchLabel>'}</h3>
        <ListPageSearchLabel>Label</ListPageSearchLabel>
      </ExampleItem>
      <ExampleItem>
        <h3>{'<ListPageSearchInputBox></ListPageSearchInputBox>'}</h3>
        <ListPageSearchInputBox>Input</ListPageSearchInputBox>
      </ExampleItem>
      <ExampleItem>
        <h3>{'<RouteButton /> - styled(IconTextTabButton)'}</h3>
        <RouteButton
          icon={<Icon type='backArrowCircle' />}
          title={'Back to Top Menu'}
          section=''
          onClick={() => {}}
          className='resources-tab-button'
        />
      </ExampleItem>
      <ExampleItem>
        <h3>{'<CancelIcon type="backArrow"/>'}</h3>
        <div style={{ background: '#ccc', width: '20px' }}>
          <CancelIcon type='backArrow' />
        </div>
      </ExampleItem>
      <ExampleItem>
        <h3>{'<CancelBtn><CancelIcon type="backArrow" /></CancelBtn>'}</h3>
        <CancelBtn>
          <CancelIcon type='backArrow' />
        </CancelBtn>
      </ExampleItem>
      <ExampleItem>
        <h3>{'<GlobalSeparator />'}</h3>
        <GlobalSeparator />
      </ExampleItem>
      <ExampleItem>
        <h3>{'<MainTitle></MainTitle>'}</h3>
        <MainTitle>Main Title</MainTitle>
      </ExampleItem>
      <ExampleItem>
        <h3>{'<MainTitleName></MainTitleName>'}</h3>
        <MainTitleName>Main Title Name</MainTitleName>
      </ExampleItem>
      <ExampleItem>
        <h3>{'<MainTitleRegion></MainTitleRegion>'}</h3>
        <MainTitleRegion>Main Title Region</MainTitleRegion>
      </ExampleItem>
      <ExampleItem>
        <h3>{'<SaveBtn></SaveBtn> - styled(Button)'}</h3>
        <SaveBtn disabled={false} onClick={() => {}}>
          Save
        </SaveBtn>
      </ExampleItem>
      <ExampleItem>
        <h3>{'<CheckedInputStyles>'}</h3>
        <CheckedInputStyles.Wrapper>
          <CheckedInputStyles.CheckboxWrapper>
            <CheckedInputStyles.CheckboxLabel>
              <span>Label</span>
              <CheckedInputStyles.Checkbox checked={true} onChange={() => {}} />
            </CheckedInputStyles.CheckboxLabel>
          </CheckedInputStyles.CheckboxWrapper>
        </CheckedInputStyles.Wrapper>
      </ExampleItem>
    </div>
  );
};

const Fields = Primary.bind({});

export default {
  title: 'StyledComponents',
  component: Primary,
  parameters: {
    docs: {
      source: {
        code: ` `
      }
    }
  }
} as Meta;

const ExampleItem = styled.div`
  padding: 45px 30px;
  border-bottom: 1px solid #ddd;
`;
