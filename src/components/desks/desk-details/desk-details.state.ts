import { useState, useEffect } from 'react';

import { useDebounce } from '../../../hooks/use-debounce';

import { IOpenDeskDetails } from './desk-details.typings';
import { IDictionaryOption } from '../../../typings/etc';

export interface IDeskDetailsStateData {
  desk: IOpenDeskDetails;
  options: {
    regions: IDictionaryOption[];
    sites: IDictionaryOption[];
    buildings: IDictionaryOption[];
    floors: IDictionaryOption[];
    neighbourhoods: IDictionaryOption[];
    users: Array<{ value: string; text: string }>;
  };
}

const initialState: IDeskDetailsStateData = {
  desk: {
    key: '',
    provisioningKey: '',
    details: {
      name: '',
      deskStatus: '',
      location: {
        regionProvisioningKey: '',
        regionName: '',
        siteProvisioningKey: '',
        siteName: '',
        buildingProvisioningKey: '',
        buildingName: '',
        floorProvisioningKey: '',
        floorName: ''
      },
      features: [],
      neighbourhoodId: '',
      allocatedUser: {
        key: '',
        fullName: ''
      }
    }
  },
  options: {
    regions: [],
    sites: [],
    buildings: [],
    floors: [],
    neighbourhoods: [],
    users: []
  }
};

export interface IDeskDetailsState {
  state: IDeskDetailsStateData;
  onSearchUser(search: string): void;
}

export const useDeskDetails = (props: any): any => {
  // IDeskDetailsState => {
  const [state, setState] = useState(initialState);
  const [userNameSearch, onSearchUser] = useState('');
  const debouncedSearchTerm = useDebounce(userNameSearch, 500);

  useEffect(() => {
    createUsers();
  }, [props.usersData]);

  useEffect(() => {
    createDesk();
  }, [props.deskData, props.deskFilterData]);

  useEffect(() => {
    onFetchUsers(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const createDesk = () => {
    if (!props.deskData || !props.deskFilterData) {
      return;
    }
    if (props.deskData.details.allocatedUser.key) {
      props.deskFilterData.users = [
        {
          text: props.deskData.details.allocatedUser.fullName,
          value: props.deskData.details.allocatedUser.key
        }
      ];
    }

    setState((s) => ({
      ...s,
      desk: {
        ...props.deskData,
        statusKey: props.deskData.statusKey || 'new'
      },
      options: {
        ...props.deskFilterData
      }
    }));
  };

  const createUsers = () => {
    if (!props.usersData) {
      return;
    }
    setState((s) => ({
      ...s,
      options: {
        ...s.options,
        users: props.usersData.users.map((i: any) => ({
          text: i.name,
          value: i.id
        }))
      }
    }));
  };

  const onFetchUsers = (search: string) => {
    if (search.length < 3) {
      return;
    }
    props.fetchUsers(search);
  };

  return {
    state,
    userNameSearch,
    onSearchUser
  };
};
