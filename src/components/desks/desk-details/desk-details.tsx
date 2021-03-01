import React, { useState, useEffect } from 'react';

import { IDictionaryOption } from '../../../typings/etc';
import { MainBox } from '../../../styles/resources.styled';
import { useDebounce } from '../../../hooks/use-debounce';

import { ISaveDeskData } from '../desks.typings';

import { DeskDetailsForm } from './desk-details.form';
import { IOpenDeskDetails } from './desk-details.typings';

interface IUser {
  value: string;
  text: string;
}
export interface IDeskDetailsProps {
  deskKey: string;
  desk: IOpenDeskDetails;
  options: {
    regions: IDictionaryOption[];
    sites: IDictionaryOption[];
    buildings: IDictionaryOption[];
    floors: IDictionaryOption[];
    neighbourhoods: IDictionaryOption[];
    users: IUser[];
  };
  isImplementation: boolean;
  onSave: (data: ISaveDeskData, cb: () => void) => void;
  onCancel: () => void;
  onDelete: (provisioningKey: string) => void;
  deskDetailsRouteHandler: () => void;
  onFetchUsers: (search: string) => void;
}

export const DeskDetails = (props: IDeskDetailsProps) => {
  const [userNameSearch, onSearchUser] = useState('');
  const debouncedSearchTerm = useDebounce(userNameSearch, 500);

  useEffect(() => {
    props.deskDetailsRouteHandler();
  }, [props.deskKey]);

  useEffect(() => {
    getUsers(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const getUsers = async (search: string) => {
    if (search.length < 3) {
      return;
    }
    props.onFetchUsers(search);
  };

  return (
    <MainBox>
      <DeskDetailsForm
        desk={props.desk}
        options={props.options}
        onSave={props.onSave}
        onCancel={props.onCancel}
        onDelete={props.onDelete}
        onSearchUser={onSearchUser}
        isImplementation={props.isImplementation}
      />
    </MainBox>
  );
};
