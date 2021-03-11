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

export const deskFilterData = {
  regions: [
    {
      regionKey: '1',
      name: 'United Kingdom',
      provisioningKey: 'd2986478-4f8c-4e33-ab71-a64d76be674e'
    },
    {
      regionKey: '2',
      name: 'North America',
      provisioningKey: 'e63f78a8-a84e-4133-aee9-8b8696f18042'
    },
    {
      regionKey: '3',
      name: 'Asia',
      provisioningKey: '91945825-de51-4734-b1c5-62bda7cf942c'
    },
    {
      regionKey: '67',
      name: 'Imported Region 1',
      provisioningKey: '73D29EE2-A5E0-465A-B7E5-5C764BD55CA1'
    },
    {
      regionKey: '68',
      name: 'Imported Region 2',
      provisioningKey: 'B86D886C-1246-41D8-B1D3-4C691E9E90FE'
    }
  ],
  sites: [
    {
      key: 1,
      provisioningKey: 'bdfc2093-104e-4621-9599-1d4f632b40e6',
      name: 'Luton',
      regionProvisioningId: 'd2986478-4f8c-4e33-ab71-a64d76be674e'
    },
    {
      key: 2,
      provisioningKey: '5aa547e9-221c-462f-a099-1fb765e947dc',
      name: 'Denver',
      regionProvisioningId: 'e63f78a8-a84e-4133-aee9-8b8696f18042'
    },
    {
      key: 3,
      provisioningKey: '9afdedfa-1a64-4aaa-964d-84760f524d32',
      name: 'Asia',
      regionProvisioningId: '91945825-de51-4734-b1c5-62bda7cf942c'
    },
    {
      key: 4,
      provisioningKey: '5c8fa320-cf75-4b90-bf8c-72d07ef14a6d',
      name: 'Luton Demo',
      regionProvisioningId: 'd2986478-4f8c-4e33-ab71-a64d76be674e'
    },
    {
      key: 85,
      provisioningKey: '2A8AB615-0B42-4D2B-8F73-54D267AA42DC',
      name: 'Imported Site 1',
      regionProvisioningId: '73D29EE2-A5E0-465A-B7E5-5C764BD55CA1'
    },
    {
      key: 86,
      provisioningKey: '491D6668-5597-4016-A774-11D3BF62C545',
      name: 'Imported Site 2',
      regionProvisioningId: 'B86D886C-1246-41D8-B1D3-4C691E9E90FE'
    }
  ],
  buildings: [
    {
      key: 1,
      provisioningKey: 'b19481d2-7f09-4e92-a9d5-a1bd8a4e4bd4',
      name: '250, The Village',
      siteKey: 1,
      siteProvisioningKey: 'bdfc2093-104e-4621-9599-1d4f632b40e6'
    },
    {
      key: 2,
      provisioningKey: '58f23d18-d0b5-45a0-ac85-ba4507a64ae8',
      name: 'FWI Demo Building',
      siteKey: 2,
      siteProvisioningKey: '5aa547e9-221c-462f-a099-1fb765e947dc'
    },
    {
      key: 3,
      provisioningKey: '6474e576-93f7-47df-b89e-f4fc383ab233',
      name: 'SmartSpace Building E',
      siteKey: 3,
      siteProvisioningKey: '9afdedfa-1a64-4aaa-964d-84760f524d32'
    },
    {
      key: 4,
      provisioningKey: '2c4d23c6-7c5a-47ce-9f84-6c5822688749',
      name: 'SmartSpace Building F',
      siteKey: 3,
      siteProvisioningKey: '9afdedfa-1a64-4aaa-964d-84760f524d32'
    },
    {
      key: 5,
      provisioningKey: '2b0a7a62-7508-4df9-90c3-fc7191167ab4',
      name: 'Luton Demo',
      siteKey: 4,
      siteProvisioningKey: '5c8fa320-cf75-4b90-bf8c-72d07ef14a6d'
    },
    {
      key: 95,
      provisioningKey: 'E4BDCFCB-74E7-4F84-8664-E674737DD809',
      name: 'Imported Building 1',
      siteKey: 85,
      siteProvisioningKey: '2A8AB615-0B42-4D2B-8F73-54D267AA42DC'
    },
    {
      key: 96,
      provisioningKey: 'E3D9670D-F223-4143-B042-DD31729D10B0',
      name: 'Imported Building 2',
      siteKey: 85,
      siteProvisioningKey: '2A8AB615-0B42-4D2B-8F73-54D267AA42DC'
    },
    {
      key: 97,
      provisioningKey: '41874DAB-ECD6-4060-B1EE-882471CF66C2',
      name: 'Imported Building 3',
      siteKey: 86,
      siteProvisioningKey: '491D6668-5597-4016-A774-11D3BF62C545'
    },
    {
      key: 98,
      provisioningKey: '3C0AA8F2-7A06-4861-8C85-7959BBDEA800',
      name: 'Imported Building 4',
      siteKey: 86,
      siteProvisioningKey: '491D6668-5597-4016-A774-11D3BF62C545'
    },
    {
      key: 99,
      provisioningKey: '100FF008-01EC-46CD-8BA8-18E7B89C5C4F',
      name: 'Imported Building',
      siteKey: 1,
      siteProvisioningKey: 'bdfc2093-104e-4621-9599-1d4f632b40e6'
    },
    {
      key: 101,
      provisioningKey: 'D3501760-E9F9-4152-80D8-9C94AAE966AF',
      name: 'Building1215',
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
      name: 'Floor1215',
      buildingKey: 1,
      buildingProvisioningKey: 'b19481d2-7f09-4e92-a9d5-a1bd8a4e4bd4'
    },
    {
      key: 358,
      provisioningKey: '1C74BEB3-36E4-42E2-9096-6E306FC56AD2',
      name: 'Imported Floor 3',
      buildingKey: 1,
      buildingProvisioningKey: 'b19481d2-7f09-4e92-a9d5-a1bd8a4e4bd4'
    },
    {
      key: 360,
      provisioningKey: '615BE875-1FF3-48BD-9809-81E51FE0F6BA',
      name: 'Imported Floor 4 test',
      buildingKey: 1,
      buildingProvisioningKey: 'b19481d2-7f09-4e92-a9d5-a1bd8a4e4bd4'
    },
    {
      key: 361,
      provisioningKey: 'D6C49D2D-AD06-4C8D-9351-2B483CB4E440',
      name: 'Imported Floor 5',
      buildingKey: 1,
      buildingProvisioningKey: 'b19481d2-7f09-4e92-a9d5-a1bd8a4e4bd4'
    },
    {
      key: 362,
      provisioningKey: 'C8DE3B9C-0E05-4BD7-A175-6853A3B039B2',
      name: 'Imported Floor 6',
      buildingKey: 1,
      buildingProvisioningKey: 'b19481d2-7f09-4e92-a9d5-a1bd8a4e4bd4'
    },
    {
      key: 3,
      provisioningKey: '9b21baba-65cc-4a5d-85fd-dfb64361a2e1',
      name: 'Ground Floor',
      buildingKey: 2,
      buildingProvisioningKey: '58f23d18-d0b5-45a0-ac85-ba4507a64ae8'
    },
    {
      key: 4,
      provisioningKey: 'a0b7a829-37c6-423e-96f9-c0d797f05be6',
      name: 'Floor 1',
      buildingKey: 2,
      buildingProvisioningKey: '58f23d18-d0b5-45a0-ac85-ba4507a64ae8'
    },
    {
      key: 5,
      provisioningKey: 'adc45fb2-d3b1-4a35-aeb0-87a4ca0fed48',
      name: 'Floor 2',
      buildingKey: 2,
      buildingProvisioningKey: '58f23d18-d0b5-45a0-ac85-ba4507a64ae8'
    },
    {
      key: 6,
      provisioningKey: 'ff3f120c-cb83-4b90-8037-da44bc960427',
      name: 'Floor 3',
      buildingKey: 2,
      buildingProvisioningKey: '58f23d18-d0b5-45a0-ac85-ba4507a64ae8'
    },
    {
      key: 7,
      provisioningKey: '6800d4e5-60b1-4692-927a-a0bcfeb651d6',
      name: 'Floor 4',
      buildingKey: 2,
      buildingProvisioningKey: '58f23d18-d0b5-45a0-ac85-ba4507a64ae8'
    },
    {
      key: 8,
      provisioningKey: '92a6de2d-837f-4e5c-a33f-01a0bb52051c',
      name: 'Floor 5',
      buildingKey: 2,
      buildingProvisioningKey: '58f23d18-d0b5-45a0-ac85-ba4507a64ae8'
    },
    {
      key: 9,
      provisioningKey: 'bc149c63-ad65-4416-8bad-e50c9e54d885',
      name: 'Ground Floor',
      buildingKey: 3,
      buildingProvisioningKey: '6474e576-93f7-47df-b89e-f4fc383ab233'
    },
    {
      key: 10,
      provisioningKey: '181c87d5-d423-41f1-84fa-61917a4aed64',
      name: 'Floor 1',
      buildingKey: 3,
      buildingProvisioningKey: '6474e576-93f7-47df-b89e-f4fc383ab233'
    },
    {
      key: 11,
      provisioningKey: '334ba0f6-fb3f-4934-9ae7-8ed2b8a61bc0',
      name: 'Floor 2',
      buildingKey: 3,
      buildingProvisioningKey: '6474e576-93f7-47df-b89e-f4fc383ab233'
    },
    {
      key: 12,
      provisioningKey: '37633450-416f-4359-bc04-b270fd6f2c49',
      name: 'Floor 3',
      buildingKey: 3,
      buildingProvisioningKey: '6474e576-93f7-47df-b89e-f4fc383ab233'
    },
    {
      key: 13,
      provisioningKey: 'c9ea08b9-e339-4e02-a6d8-cc07d5d0cb08',
      name: 'Floor 4',
      buildingKey: 3,
      buildingProvisioningKey: '6474e576-93f7-47df-b89e-f4fc383ab233'
    },
    {
      key: 14,
      provisioningKey: '73eaa9a7-c2ef-4c77-a9fb-47b523abfd48',
      name: 'Floor 5',
      buildingKey: 3,
      buildingProvisioningKey: '6474e576-93f7-47df-b89e-f4fc383ab233'
    },
    {
      key: 15,
      provisioningKey: '7f61080d-a512-4ee3-b5fa-7e5a2562b3a7',
      name: 'Floor 6',
      buildingKey: 3,
      buildingProvisioningKey: '6474e576-93f7-47df-b89e-f4fc383ab233'
    },
    {
      key: 16,
      provisioningKey: '4b5ddfd9-393c-4359-a61d-4e1b5a85baef',
      name: 'Floor 7',
      buildingKey: 3,
      buildingProvisioningKey: '6474e576-93f7-47df-b89e-f4fc383ab233'
    },
    {
      key: 17,
      provisioningKey: '842debe4-9e16-454b-9332-e15e014157ac',
      name: 'Ground Floor',
      buildingKey: 4,
      buildingProvisioningKey: '2c4d23c6-7c5a-47ce-9f84-6c5822688749'
    },
    {
      key: 18,
      provisioningKey: 'd5fbed3a-72a4-4ed5-af08-4d7b09ce1479',
      name: 'Floor 1',
      buildingKey: 4,
      buildingProvisioningKey: '2c4d23c6-7c5a-47ce-9f84-6c5822688749'
    },
    {
      key: 19,
      provisioningKey: 'b2a62fc7-1967-4642-8f70-ad7eadc6936a',
      name: 'Floor 2',
      buildingKey: 4,
      buildingProvisioningKey: '2c4d23c6-7c5a-47ce-9f84-6c5822688749'
    },
    {
      key: 20,
      provisioningKey: '7e909b3b-a557-4d65-b047-7272aa22497c',
      name: 'Floor 3',
      buildingKey: 4,
      buildingProvisioningKey: '2c4d23c6-7c5a-47ce-9f84-6c5822688749'
    },
    {
      key: 21,
      provisioningKey: 'f6b7ccae-fd7c-405b-b60b-1c1c6f6b9e38',
      name: 'Floor 4',
      buildingKey: 4,
      buildingProvisioningKey: '2c4d23c6-7c5a-47ce-9f84-6c5822688749'
    },
    {
      key: 22,
      provisioningKey: 'bd2fa921-f185-461d-a228-4175bfb75a7d',
      name: 'Floor 5',
      buildingKey: 4,
      buildingProvisioningKey: '2c4d23c6-7c5a-47ce-9f84-6c5822688749'
    },
    {
      key: 23,
      provisioningKey: '857db8a0-c980-4467-b2d4-ea366df8730f',
      name: 'Ground Floor',
      buildingKey: 5,
      buildingProvisioningKey: '2b0a7a62-7508-4df9-90c3-fc7191167ab4'
    },
    {
      key: 347,
      provisioningKey: 'CF0E4D40-C1A4-4B09-B85C-D17F3CD2EDF0',
      name: 'Imported Floor 1',
      buildingKey: 95,
      buildingProvisioningKey: 'E4BDCFCB-74E7-4F84-8664-E674737DD809'
    },
    {
      key: 348,
      provisioningKey: 'CD8B58B5-80A1-41F4-ADDF-B4CE26663625',
      name: 'Imported Floor 2',
      buildingKey: 95,
      buildingProvisioningKey: 'E4BDCFCB-74E7-4F84-8664-E674737DD809'
    },
    {
      key: 349,
      provisioningKey: 'F426E758-464D-410B-9E06-DFC83FA75CEB',
      name: 'Imported Floor 1',
      buildingKey: 96,
      buildingProvisioningKey: 'E3D9670D-F223-4143-B042-DD31729D10B0'
    },
    {
      key: 350,
      provisioningKey: 'E891E6D9-9C25-4BCB-846A-BECA16E36184',
      name: 'Imported Floor 1',
      buildingKey: 97,
      buildingProvisioningKey: '41874DAB-ECD6-4060-B1EE-882471CF66C2'
    },
    {
      key: 351,
      provisioningKey: 'ECC07F5D-97A1-4B13-87AD-0C392B51E372',
      name: 'Imported Floor 1',
      buildingKey: 98,
      buildingProvisioningKey: '3C0AA8F2-7A06-4861-8C85-7959BBDEA800'
    },
    {
      key: 352,
      provisioningKey: '9C82A1F8-5512-487C-8421-2547BEDEE9CA',
      name: 'Imported Floor',
      buildingKey: 99,
      buildingProvisioningKey: '100FF008-01EC-46CD-8BA8-18E7B89C5C4F'
    }
  ],
  neighbourhoods: [
    { id: 1, name: 'Development', key: 'DEV', color: '#53b947' },
    { id: 2, name: 'Professional Services', key: 'PROF', color: '#4c99d3' },
    { id: 3, name: 'Directors Suite', key: 'DIR', color: '#fbf02d' },
    { id: 4, name: 'Finance & HR', key: 'HRFIN', color: '#8E23AA' },
    { id: 5, name: 'Development 2', key: 'DEV2', color: '#53b947' },
    { id: 6, name: 'Professional Services 2', key: 'PROF2', color: '#4c99d3' },
    { id: 7, name: 'Desks with Doors', key: 'DWD', color: '#fa8900' },
    {
      id: 177,
      name: 'Imported Neighbourhood 1',
      key: 'import',
      color: '#7CB342'
    },
    {
      id: 178,
      name: 'Imported Neighbourhood 2',
      key: 'imported',
      color: '#4c99d3'
    }
  ],
  features: [
    { id: 14, name: 'Double screen', iconId: 0 },
    { id: 28, name: 'Imported Feature 1', iconId: 0 },
    { id: 29, name: 'Imported Feature 2', iconId: 0 },
    { id: 30, name: 'Imported Feature 3', iconId: 0 },
    { id: 31, name: 'Imported Feature 4', iconId: 0 },
    { id: 32, name: 'Imported Feature 5', iconId: 0 },
    { id: 33, name: 'Imported Feature 6', iconId: 0 },
    { id: 34, name: 'Triple Screen', iconId: 0 },
    { id: 46, name: 'Standing Desk', iconId: 0 }
  ],
  statuses: [
    { key: 'act', name: 'Active' },
    { key: 'not', name: 'Unavailable' },
    { key: 'arc', name: 'Archived' },
    { key: 'new', name: 'New' }
  ]
};

export const deskData = {
  key: '2',
  provisioningKey: '6481483c-eeed-473b-8d43-7671707e1425',
  parentProvisioningKey: '2d71002e-d4f3-45aa-b277-25bdc3a301e0',
  type: 'Desk',
  details: {
    name: 'LU1.A2',
    deskType: 'Standard',
    deskStatus: 'Active',
    location: {
      regionProvisioningKey: 'd2986478-4f8c-4e33-ab71-a64d76be674e',
      regionName: 'United Kingdom',
      siteProvisioningKey: 'bdfc2093-104e-4621-9599-1d4f632b40e6',
      siteName: 'Luton',
      buildingProvisioningKey: 'b19481d2-7f09-4e92-a9d5-a1bd8a4e4bd4',
      buildingName: '250, The Village',
      floorProvisioningKey: '2d71002e-d4f3-45aa-b277-25bdc3a301e0',
      floorName: 'First Floor'
    },
    features: [
      {
        id: 14,
        name: 'Double screen',
        iconId: 17,
        iconUrl:
          '/systemicons/DigitalScreen.svg?t=L3N5c3RlbWljb25zL3wzMjM3MjAyMDYxfDQyYWFiYjY1NmE4MWRlMWIxMDcwYmMyN2VlYmE3YzI1NTUzY2JmOTM=',
        isSelected: false
      },
      {
        id: 28,
        name: 'Imported Feature 1',
        iconId: 22,
        iconUrl:
          '/systemicons/PhoneConferencing.svg?t=L3N5c3RlbWljb25zL3wzMjM3MjAyMDYxfDQyYWFiYjY1NmE4MWRlMWIxMDcwYmMyN2VlYmE3YzI1NTUzY2JmOTM=',
        isSelected: false
      },
      {
        id: 29,
        name: 'Imported Feature 2',
        iconId: 23,
        iconUrl:
          '/systemicons/Podium.svg?t=L3N5c3RlbWljb25zL3wzMjM3MjAyMDYxfDQyYWFiYjY1NmE4MWRlMWIxMDcwYmMyN2VlYmE3YzI1NTUzY2JmOTM=',
        isSelected: false
      },
      {
        id: 30,
        name: 'Imported Feature 3',
        iconId: 24,
        iconUrl:
          '/systemicons/Polycom.svg?t=L3N5c3RlbWljb25zL3wzMjM3MjAyMDYxfDQyYWFiYjY1NmE4MWRlMWIxMDcwYmMyN2VlYmE3YzI1NTUzY2JmOTM=',
        isSelected: false
      },
      {
        id: 31,
        name: 'Imported Feature 4',
        iconId: 25,
        iconUrl:
          '/systemicons/Printer.svg?t=L3N5c3RlbWljb25zL3wzMjM3MjAyMDYxfDQyYWFiYjY1NmE4MWRlMWIxMDcwYmMyN2VlYmE3YzI1NTUzY2JmOTM=',
        isSelected: false
      },
      {
        id: 32,
        name: 'Imported Feature 5',
        iconId: 26,
        iconUrl:
          '/systemicons/Projector.svg?t=L3N5c3RlbWljb25zL3wzMjM3MjAyMDYxfDQyYWFiYjY1NmE4MWRlMWIxMDcwYmMyN2VlYmE3YzI1NTUzY2JmOTM=',
        isSelected: false
      },
      {
        id: 33,
        name: 'Imported Feature 6',
        iconId: 27,
        iconUrl:
          '/systemicons/Speaker.svg?t=L3N5c3RlbWljb25zL3wzMjM3MjAyMDYxfDQyYWFiYjY1NmE4MWRlMWIxMDcwYmMyN2VlYmE3YzI1NTUzY2JmOTM=',
        isSelected: false
      },
      {
        id: 34,
        name: 'Triple Screen',
        iconId: 32,
        iconUrl:
          '/systemicons/CakesBiscuits.svg?t=L3N5c3RlbWljb25zL3wzMjM3MjAyMDYxfDQyYWFiYjY1NmE4MWRlMWIxMDcwYmMyN2VlYmE3YzI1NTUzY2JmOTM=',
        isSelected: false
      },
      {
        id: 46,
        name: 'Standing Desk',
        iconId: 1,
        iconUrl:
          '/systemicons/Aircon.svg?t=L3N5c3RlbWljb25zL3wzMjM3MjAyMDYxfDQyYWFiYjY1NmE4MWRlMWIxMDcwYmMyN2VlYmE3YzI1NTUzY2JmOTM=',
        isSelected: false
      }
    ],
    neighbourhoods: [
      {
        id: 5,
        name: 'Development 2',
        key: 'DEV2',
        color: '#53b947',
        isSelected: true
      }
    ],
    neighbourhoodId: 5,
    allocatedUser: { key: null, fullName: null }
  }
};

export const usersData = {
  users: [
    {
      id: 61,
      name: 'Ext Aleksey',
      email: 'ExtAleksey@ssdev.smartspacesoftware.tech',
      attendeeId: null
    },
    {
      id: 60,
      name: 'Ext Anna',
      email: 'ExtAnna@ssdev.smartspacesoftware.tech',
      attendeeId: null
    },
    {
      id: 56,
      name: 'Ext Dmytro',
      email: 'edmytro@ssdev.smartspacesoftware.tech',
      attendeeId: null
    },
    {
      id: 62,
      name: 'Ext Eugene',
      email: 'ExtEugene@ssdev.smartspacesoftware.tech',
      attendeeId: null
    },
    {
      id: 58,
      name: 'Ext Sergey',
      email: 'ExtSergy@ssdev.smartspacesoftware.tech',
      attendeeId: null
    },
    {
      id: 59,
      name: 'Ext YaroslavK',
      email: 'ExtYaroslavK@ssdev.smartspacesoftware.tech',
      attendeeId: null
    },
    {
      id: 57,
      name: 'Ext YaroslavS',
      email: 'ExtYaroslavS@ssdev.smartspacesoftware.tech',
      attendeeId: null
    }
  ]
};
