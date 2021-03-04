import React, { useState, useEffect } from 'react';

import { IDictionaryOption } from '../../../typings/etc';
import { MainBox } from '../../../styles/resources.styled';
import { useDebounce } from '../../../hooks/use-debounce';

import { ISaveDeskData } from '../desks.typings';

import { DeskDetailsForm } from './desk-details.form';
// import { IOpenDeskDetails } from './desk-details.typings';
import { useDeskDetails } from './desk-details.state';

interface IUser {
  value: string;
  text: string;
}

export interface IDeskDetailsProps {
  deskKey: string;
  deskData: any;
  usersData: any;
  desk: any;
  options: any;
  deskFilterData: any;
  // desk: IOpenDeskDetails;
  // options: {
  //   regions: IDictionaryOption[];
  //   sites: IDictionaryOption[];
  //   buildings: IDictionaryOption[];
  //   floors: IDictionaryOption[];
  //   neighbourhoods: IDictionaryOption[];
  //   users: IUser[];
  // };
  isImplementation: boolean;
  onSave: (data: ISaveDeskData, cb: () => void) => void;
  onCancel: () => void;
  onDelete: (provisioningKey: string) => void;
  deskDetailsRouteHandler: (deskKey: string) => void;
  onFetchUsers: (search: string) => void;
}

export const DeskDetails = (props: IDeskDetailsProps) => {
  // const [userNameSearch, onSearchUser] = useState('');
  // const debouncedSearchTerm = useDebounce(userNameSearch, 500);

  const {
    // userNameSearch,
    desk, options,
    onSearchUser,
  } = useDeskDetails(props);


  // useEffect(() => {
  //   createDesk(deskKey);
  // }, [props.deskKey]);

  useEffect(() => {
    props.deskDetailsRouteHandler(props.deskKey);
  }, [props.deskKey]);

  // useEffect(() => {
  //   props.deskDetailsRouteHandler(props.deskKey);
  // }, [props.usersData]);

  // useEffect(() => {
  //   getUsers(debouncedSearchTerm);
  // }, [debouncedSearchTerm]);

  // const getUsers = async (search: string) => {
  //   if (search.length < 3) {
  //     return;
  //   }
  //   props.onFetchUsers(search);
  // };

  return (
    <MainBox>
      <DeskDetailsForm
        desk={desk}
        options={options}
        onSave={props.onSave}
        onCancel={props.onCancel}
        onDelete={props.onDelete}
        onSearchUser={onSearchUser}
        isImplementation={props.isImplementation}
      />
    </MainBox>
  );
};
