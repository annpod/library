import React from 'react';
import styled from 'styled-components';

import { LocationFilterItems, ILocationFilterProps } from './location-filter.typings';

import { ExtendedSelect } from '../extended-select';

import { useFilter } from './location-filter.state';

const SearchSelectBox = styled.div`
  margin-top: 5px;
`;

export const LocationFilter = (props: ILocationFilterProps) => {
  const { onUpdateFilter } = useFilter(
    props.setFilterLocation,
    props.filterData,
    props.filter,
    props.config,
  );
  
  if(!props.filter) {
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
            <ExtendedSelect
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
            />
          </SearchSelectBox>
        );
      })}
    </>
  );
};
