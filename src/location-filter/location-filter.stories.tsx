import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { LocationFilter } from './location-filter';
import { ILocationFilterProps } from '../typings/location-filter';

import { filterData, filter, config } from './location-filter.mocks';

export default {
  title: 'Filter/LocationFilter',
  component: LocationFilter,
  args: {
    filterData,
    filter,
    config
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
        code: `<LocationFilter                
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
  <LocationFilter {...args} />
);

export const Primary = Template.bind({});
