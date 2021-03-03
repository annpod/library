import { IOpenDeskDetails } from './desk-details';
// import { IOptions } from './desks.typings';

export const desk: IOpenDeskDetails = {
  details: {
    name: 'LU1.A1',
    allocatedUser: { key: null, fullName: null },
    deskStatus: 'Active',
    features: [
      {
        iconId: '17',
        iconUrl:
          '/systemicons/DigitalScreen.svg?t=L3N5c3RlbWljb25zL3wzMjM3MjAyMDYxfDQyYWFiYjY1NmE4MWRlMWIxMDcwYmMyN2VlYmE3YzI1NTUzY2JmOTM=',
        id: '14',
        isSelected: true,
        name: 'Double screen'
      },
      {
        iconId: '22',
        iconUrl:
          '/systemicons/PhoneConferencing.svg?t=L3N5c3RlbWljb25zL3wzMjM3MjAyMDYxfDQyYWFiYjY1NmE4MWRlMWIxMDcwYmMyN2VlYmE3YzI1NTUzY2JmOTM=',
        id: '28',
        isSelected: false,
        name: 'Imported Feature 1'
      }
    ],
    location: {
      buildingName: '250, The Village',
      buildingProvisioningKey: 'b19481d2-7f09-4e92-a9d5-a1bd8a4e4bd4',
      floorName: 'First Floor',
      floorProvisioningKey: '2d71002e-d4f3-45aa-b277-25bdc3a301e0',
      regionName: 'United Kingdom',
      regionProvisioningKey: 'd2986478-4f8c-4e33-ab71-a64d76be674e',
      siteName: 'Luton',
      siteProvisioningKey: 'bdfc2093-104e-4621-9599-1d4f632b40e6'
    },
    neighbourhoodId: '1'
    // neighbourhoods: [
    //   {
    //     color: '#53b947',
    //     id: 1,
    //     isSelected: true,
    //     key: 'DEV',
    //     name: 'Development'
    //   }
    // ]
  },

  key: '1',
  // parentProvisioningKey: '2d71002e-d4f3-45aa-b277-25bdc3a301e0',
  provisioningKey: 'd9f3c5d1-514e-491e-a233-18cb7b8a8441'
  // statusKey: 'new',
  // type: 'Desk'
};

export const options: any = {
  regions: [
    {
      name: 'United Kingdom',
      provisioningKey: 'd2986478-4f8c-4e33-ab71-a64d76be674e',
      regionKey: '1'
    }
  ],
  sites: [
    {
      key: 1,
      provisioningKey: 'bdfc2093-104e-4621-9599-1d4f632b40e6',
      name: 'Luton',
      regionProvisioningId: 'd2986478-4f8c-4e33-ab71-a64d76be674e'
    }
  ],
  buildings: [
    {
      key: 1,
      name: '250, The Village',
      provisioningKey: 'b19481d2-7f09-4e92-a9d5-a1bd8a4e4bd4',
      siteKey: 1,
      siteProvisioningKey: 'bdfc2093-104e-4621-9599-1d4f632b40e6'
    },
    {
      key: 101,
      name: '251, The Village',
      provisioningKey: 'D3501760-E9F9-4152-80D8-9C94AAE966AF',
      siteKey: 1,
      siteProvisioningKey: 'bdfc2093-104e-4621-9599-1d4f632b40e6'
    }
  ],
  floors: [
    {
      key: 1,
      provisioningKey: 'bbf6f728-f406-4e67-8a47-3f7a31d984ed',
      name: 'Ground Floor',
      buildingKey: 1,
      buildingProvisioningKey: 'b19481d2-7f09-4e92-a9d5-a1bd8a4e4bd4'
    },
    {
      key: 2,
      provisioningKey: '2d71002e-d4f3-45aa-b277-25bdc3a301e0',
      name: 'First Floor',
      buildingKey: 1,
      buildingProvisioningKey: 'b19481d2-7f09-4e92-a9d5-a1bd8a4e4bd4'
    },
    {
      key: 356,
      provisioningKey: '81A5B34A-28EC-4E9B-AC10-9B179D3B6F4C',
      name: 'Floor 1',
      buildingKey: 101,
      buildingProvisioningKey: 'D3501760-E9F9-4152-80D8-9C94AAE966AF'
    }
  ],
  features: [
    {
      iconId: 0,
      id: 14,
      name: 'Double screen'
    },
    {
      iconId: 0,
      id: 46,
      name: 'Standing Desk'
    }
  ],
  statuses: [
    { key: 'act', name: 'Active' },
    { key: 'not', name: 'Unavailable' },
    { key: 'arc', name: 'Archived' },
    { key: 'new', name: 'New' }
  ],
  neighbourhoods: [
    { id: 1, name: 'Development', key: 'DEV', color: '#53b947' },
    { id: 2, name: 'Professional Services', key: 'PROF', color: '#4c99d3' },
    { id: 3, name: 'Directors Suite', key: 'DIR', color: '#fbf02d' },
    { id: 4, name: 'Finance & HR', key: 'HRFIN', color: '#8E23AA' },
    { id: 5, name: 'Development 2', key: 'DEV2', color: '#53b947' },
    { id: 6, name: 'Professional Services 2', key: 'PROF2', color: '#4c99d3' },
    { id: 7, name: 'Desks with Doors', key: 'DWD', color: '#fa8900' }
  ]
};

export const filterLocation: any = {
  Region: {
    isDisabled: false,
    keyValue: 'Region',
    options: [
      { value: '1', label: 'United Kingdom' },
      { value: '2', label: 'North America' },
      { value: '3', label: 'Asia' }
    ],
    placeholder: 'Select Region',
    value: '1'
  },

  Site: {
    isDisabled: false,
    keyValue: 'Site',
    options: [
      { value: '1', label: 'Luton' },
      { value: '4', label: 'Luton Demo' }
    ],
    placeholder: 'All Sites',
    value: '1'
  },

  Building: {
    isDisabled: false,
    keyValue: 'Building',
    options: [
      { value: '1', label: '250, The Village' },
      { value: '99', label: 'Imported Building' },
      { value: '101', label: 'Building1215' }
    ],
    placeholder: 'All Buildings',
    value: '1'
  },
  Floor: {
    isDisabled: false,

    keyValue: 'Floor',
    options: [
      { value: '1', label: 'Ground Floor' },
      { value: '2', label: 'First Floor' },
      { value: '356', label: 'Floor1215' },
      { value: '358', label: 'Imported Floor 3' },
      { value: '360', label: 'Imported Floor 4 test' },
      { value: '361', label: 'Imported Floor 5' },
      { value: '362', label: 'Imported Floor 6' }
    ],
    placeholder: 'All Floors',
    value: ''
  }
};

export const filterData: any = {
  regions: [
    {
      name: 'United Kingdom',
      provisioningKey: 'd2986478-4f8c-4e33-ab71-a64d76be674e',
      regionKey: '1'
    }
  ],
  sites: [
    {
      key: 1,
      provisioningKey: 'bdfc2093-104e-4621-9599-1d4f632b40e6',
      name: 'Luton',
      regionProvisioningId: 'd2986478-4f8c-4e33-ab71-a64d76be674e'
    }
  ],
  buildings: [
    {
      key: 1,
      name: '250, The Village',
      provisioningKey: 'b19481d2-7f09-4e92-a9d5-a1bd8a4e4bd4',
      siteKey: 1,
      siteProvisioningKey: 'bdfc2093-104e-4621-9599-1d4f632b40e6'
    },
    {
      key: 101,
      name: '251, The Village',
      provisioningKey: 'D3501760-E9F9-4152-80D8-9C94AAE966AF',
      siteKey: 1,
      siteProvisioningKey: 'bdfc2093-104e-4621-9599-1d4f632b40e6'
    }
  ],
  floors: [
    {
      key: 1,
      provisioningKey: 'bbf6f728-f406-4e67-8a47-3f7a31d984ed',
      name: 'Ground Floor',
      buildingKey: 1,
      buildingProvisioningKey: 'b19481d2-7f09-4e92-a9d5-a1bd8a4e4bd4'
    },
    {
      key: 2,
      provisioningKey: '2d71002e-d4f3-45aa-b277-25bdc3a301e0',
      name: 'First Floor',
      buildingKey: 1,
      buildingProvisioningKey: 'b19481d2-7f09-4e92-a9d5-a1bd8a4e4bd4'
    },
    {
      key: 356,
      provisioningKey: '81A5B34A-28EC-4E9B-AC10-9B179D3B6F4C',
      name: 'Floor 1',
      buildingKey: 101,
      buildingProvisioningKey: 'D3501760-E9F9-4152-80D8-9C94AAE966AF'
    }
  ],
  features: [
    {
      iconId: 0,
      id: 14,
      name: 'Double screen'
    },
    {
      iconId: 0,
      id: 46,
      name: 'Standing Desk'
    }
  ],
  statuses: [
    { key: 'act', name: 'Active' },
    { key: 'not', name: 'Unavailable' },
    { key: 'arc', name: 'Archived' },
    { key: 'new', name: 'New' }
  ],
  neighbourhood: undefined
};

export const neighbourhood: any = {
  filterKey: 'id',
  isDisabled: false,
  keyValue: 'Neighbourhood',
  options: [
    { value: 1, label: 'Development' },
    { value: 2, label: 'Professional Services' },
    { value: 3, label: 'Directors Suite' },
    { value: 4, label: 'Finance & HR' },
    { value: 5, label: 'Development 2' },
    { value: 6, label: 'Professional Services 2' },
    { value: 7, label: 'Desks with Doors' },
    { value: 177, label: 'Imported Neighbourhood 1' },
    { value: 178, label: 'Imported Neighbourhood 2' }
  ],
  placeholder: 'All neighbourhoods',
  value: ''
};

export const deskList: any = [
  {
    deskStatus: { key: 'act', name: 'Active' },
    deskType: 'Standard',
    features: [],
    name: 'Austin',
    neighbourhood: {
      id: 7,
      name: 'Desks with Doors',
      key: 'DWD',
      color: '#fa8900',
      isSelected: true
    },
    provisioningKey: '836156bc-ea3f-421b-8c75-762d03df9df0'
  },
  {
    deskStatus: { key: 'act', name: 'Active' },
    deskType: 'Standard',
    features: [],
    name: 'LU1.A1',
    neighbourhood: {
      id: 1,
      name: 'Development',
      key: 'DEV',
      color: '#53b947',
      isSelected: true
    },
    provisioningKey: 'd9f3c5d1-514e-491e-a233-18cb7b8a8441'
  }
];

export const selectSearchFilter = {
  OptionSection: {
    Features: {
      isDisabled: false,
      keyValue: 'Features',
      options: [
        { value: 14, label: 'Double screen' },
        { value: 28, label: 'Imported Feature 1' },
        { value: 29, label: 'Imported Feature 2' },
        { value: 30, label: 'Imported Feature 3' },
        { value: 31, label: 'Imported Feature 4' },
        { value: 32, label: 'Imported Feature 5' },
        { value: 33, label: 'Imported Feature 6' },
        { value: 34, label: 'Triple Screen' },
        { value: 46, label: 'Standing Desk' }
      ],
      placeholder: 'All features',
      value: ''
    },
    Status: {
      isDisabled: false,
      keyValue: 'Status',
      options: [
        { value: 'Active', label: 'Active' },
        { value: 'Unavailable', label: 'Unavailable' },
        { value: 'Archived', label: 'Archived' },
        { value: 'New', label: 'New' }
      ],
      placeholder: 'Status',
      value: ''
    }
  }
};
