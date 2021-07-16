import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { LocationDropdown } from './location-dropdown';
import { ILocationFilterProps } from '../typings/location-filter';

import { filterData, filter, config } from './location-dropdown.mocks';

export default {
  title: 'V1/LocationDropdown',
  component: LocationDropdown,
  args: {
    filterData,
    filter,
    config,
    setFilterLocation: () => {}
  },
  argTypes: {
    setFilterLocation: {
      table: {
        category: 'Events'
      }
    }
  },
  parameters: {
    docs: {
      source: {
        code: `<LocationDropdown
                filterData={filterData}
                config={config}
                filter={filter}
                setFilterLocation={setFilterLocation}
                />`
      }
    }
  }
} as Meta;

const Template: Story<ILocationFilterProps> = (args) => (
  <div style={{ display: 'inline-block' }}>
    <LocationDropdown {...args} />
  </div>
);

export const Primary = Template.bind({});
