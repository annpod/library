import React from 'react';
import styled from 'styled-components';

import {
  LocationFilterItems,
  ILocationDropdown
} from '../typings/location-filter';

import { ExtendedDropdown } from '../extended-dropdown';

import { useFilter } from './location-dropdown.state';

const SearchSelectBox = styled.div`
  margin-top: 5px;
`;

export const LocationDropdown = (props: ILocationDropdown) => {
  const { onUpdateFilter } = useFilter(
    props.setFilterLocation,
    props.filterData,
    props.filter,
    props.config
  );

  if (!props.filter) {
    return null;
  }

  return (
    <>
      {Object.keys(props.filter).map((key, index) => {
        const option = props.filter[key];
        const isDisabled =
          key !== LocationFilterItems.Region
            ? !props.filter[LocationFilterItems.Region].value
            : false;

        return (
          <SearchSelectBox key={index}>
            <ExtendedDropdown
              keyValue={key}
              options={option.options}
              value={option.value}
              placeholder={option.placeholder}
              clearable={true}
              searchable={false}
              onChange={onUpdateFilter}
              onChangeMulti={onUpdateFilter}
              isDisabled={isDisabled || option.isDisabled}
              isAutoSelect={true}
              isMulti={props.config[key].isMulti}
              themeType={props.themeType}
            />
          </SearchSelectBox>
        );
      })}
    </>
  );
};
