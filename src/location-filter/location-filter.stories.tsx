import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { LocationFilter } from './location-filter';
import {
  ILocationFilterProps,
  IFilterData,
  IFilterState,
  IFilterConfig
} from './location-filter.typings';

const filter: IFilterState = {
  Region: {
    isDisabled: false,
    keyValue: 'Region',
    options: [{ value: '1', label: 'United Kingdom' }],
    placeholder: 'Select Region',
    value: '1'
  },
  Site: {
    isDisabled: false,
    keyValue: 'Site',
    options: [{ value: '1', label: 'Luton' }],
    placeholder: 'All Sites',
    value: '1'
  },
  Building: {
    isDisabled: false,
    keyValue: 'Building',
    options: [{ value: '1', label: '250, The Village' }],
    placeholder: 'All Buildings',
    value: ['1']
  },
  Floor: {
    isDisabled: false,
    keyValue: 'Floor',
    options: [
      { value: '1', label: 'Ground Floor' },
      { value: '2', label: 'First Floor' }
    ],
    placeholder: 'All Floors',
    value: []
  }
};

const filterData: IFilterData = {
  regions: [{ key: '1', name: 'United Kingdom' }],
  sites: [{ key: '1', regionKey: '1', name: 'Luton' }],
  buildings: [{ key: '1', name: '250, The Village', siteKey: '1' }],
  floors: [
    { key: '9', name: 'Ground Floor', buildingKey: '3' },
    { key: '2', name: 'First Floor', buildingKey: '1' }
  ]
};

const config: IFilterConfig = {
  Region: {
    isMulti: false
  },
  Site: {
    isMulti: false
  },
  Building: {
    isMulti: true
  },
  Floor: {
    isMulti: true
  }
};

export default {
  title: 'Example/LocationFilter',
  component: LocationFilter,
  args: {
    filterData,
    filter,
    config,
  },
  argTypes: {
    setFilterLocation: {
      table: {
        category: 'Events',        
      },      
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
