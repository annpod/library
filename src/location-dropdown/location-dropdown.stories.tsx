import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { LocationDropdown } from './location-dropdown';
import { ILocationFilterProps } from '../typings/location-filter';

import { filterData, filter, config } from './location-dropdown.mocks';
import { ThemeTypes, ILocationDropdown } from '../typings';

export default {
  title: 'V1/LocationDropdown',
  component: LocationDropdown,
  args: {
    filterData,
    filter,
    config,
    themeType: ThemeTypes.Dark,
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
                themeType={ThemeTypes.Dark},
                />`
      }
    }
  }
} as Meta;

const Template: Story<ILocationDropdown> = (args) => (
  <div style={{ display: 'inline-block' }}>
    <LocationDropdown {...args} />
  </div>
);

export const Dark = Template.bind({});
