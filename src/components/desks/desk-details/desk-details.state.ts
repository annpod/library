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
    props.deskDetailsRouteHandler(props.deskKey);
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

  useEffect(() => {
    onFetchUsers(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const createDesk = () => {
    if(!props.detailsData){
      return;
    }
    if (props.detailsData.details.allocatedUser.key) {
      props.deskFilterData.users = [
        {
          text: props.detailsData.details.allocatedUser.fullName,
          value: props.detailsData.details.allocatedUser.key
        }
      ];
    }

    setState((s) => ({
      ...s,
      desk: {
        ...props.detailsData,
        statusKey: props.detailsData.statusKey || 'new'
      },
      options: {
        ...props.deskFilterData
      }
    }));
  };

  const createUsers = () => {
   
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
