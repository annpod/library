export const strings = {
  logout: 'Logout',
  header: 'Administration',
  buttons: {
    edit: 'Edit',
    save: 'Save Changes',
    cancel: 'Cancel',
    delete: 'Delete',
  },
  common: {
    name: 'name',
  },
  home: {
    title: 'home',
    note: 'Select an admin area',
    usersTab: 'users',
    estateTab: 'estate',
    resourcesTab: 'resources',
    reportingTab: 'reporting',
    settingsTab: 'settings',
    uploadTab: 'upload',
    covidTab: 'COVID-19',
    bookingsTab: 'Bookings',
    protectedRouteError: "You don't have permission to access this page",
  },
  estate: {
    title: 'Estate',
    titleActions: 'Actions',
    hierarchyNote:
      'Edit the regions, sites, buildings & floors Or zones in your estate.',
    noEstateSelected: 'Select an item to edit',
    info: {
      estate: 'Edit organization',
      region: 'Edit region',
      site: 'Edit site',
      building: 'Edit building',
      floor: 'Edit floor',
    },
    details: {
      estate: 'Estate details',
      region: 'Region details',
      site: 'Site details',
      building: 'Building details',
      floor: 'Floor details',
    },
    names: {
      region: 'New Region',
      site: 'New Site',
      building: 'New Building',
      floor: 'New Floor',
    },
    edit: {
      timeZone: { title: 'Time Zone', placeholder: 'Select Time Zone' },
      workingHours: {
        title: 'Working Hours',
        placeholder: 'HH:MM',
        start: 'Start Time',
        end: 'End Time',
      },
      workingDays: 'Working Days',
    },
    addButton: {
      estate: 'Add Region',
      region: 'Add Site',
      site: 'Add Building',
      building: 'Add Floor',
    },
    rules: [
      'Make & save any updates required.',
      'Submit the updates to SmartSpace',
      'We’ll update the maps & floor plans & apply them to your estates.',
    ],
    hint:
      'When you have saved all the changes and marked all the maps and locations that require updating, submit the request to SmartSpace to update the maps.',
  },
  resources: {
    title: 'Resources',
    backButtonText: 'Back to Top Menu',
    resetButtonText: 'Reset',
    whereSectionHeader: 'Where',
    helpTitle: 'A guide to resources',
    helpBody: [
      {
        title: 'Rooms',
        text:
          'Assign the available characteristics and specifications to the rooms across your estate. Define the seating capacity, and any booking windows, alongside the room capabilities.',
      },
      {
        title: 'Facilities',
        text:
          'Specify the key facilities available in the meeting rooms across your estate. Include in-room features such as ‘Blackout Option’ or fixed equipment like ‘Whiteboard’ and ‘Air Con’. These will help your colleagues to locate and book meeting rooms that meet their needs.',
      },
      {
        title: 'Services',
        text:
          'Specify the key services available for the meeting rooms at each site. You can add the range of layout options available, the equipment and catering services that can be booked and detail any costs. You will also be able to detail service providers alongside any booking time restrictions that need to be considered.',
      },
      {
        title: 'Room Types',
        text:
          'Room types allow you to specify the different types of rooms within your estate. Define types such as ‘Conference’, ‘Phone Booth’ and ‘Interview Room’.',
      },
      {
        title: 'Desks',
        text:
          'Assign the available features to each desk and the neighbourhood it is located within. Specify the characteristics of each desk, including features and availability.        ',
      },
      {
        title: 'Neighbourhoods',
        text:
          'Define each neighbourhood name and assign a colour key. You can then select which departments can book a desk within each neighbourhood.',
      },
      {
        title: 'Desk Features',
        text:
          'Specify the key features for the desks across your estate. Define features such as ‘Sit to Stand’ desks, ‘Docking stand’ and ‘Phone’. These will help your colleagues to locate desks that meet their needs.',
      },
    ],
    footerText1:
      'Room and Desk locations will already be defined. You will only be able to edit their characteristics as required.',

    footerText2:
      'SmartSpace offer a range of products and some may not have been implemented by your organisation. Therefore, you may not see all the options detailed above.',
    button: {
      back: 'Back',
      confirm: 'Confirm',
    },
    desks: {
      sideTitle: 'Desks',
      title: 'Resources: Desks',
      buttonTitle: 'Desks',
      addButtonTitle: 'Add Desk',
      nameInputPlaceholder: 'Desk name',
      searchPanelTitle: 'Desk filters',
      optionsSection: 'Desk Options',
      servicesPanelTitle: 'Report services',
      facilityPanelTitle: 'Desk facilities',
      nameColumnHeader: 'Desk Name',
      nameInputLabel: 'Desks',
      featureSelectPlaceholder: 'All features',
      regions: 'Select Region',
      neighbourhoodSelectPlaceholder: 'All neighbourhoods',
      detailsScreen: {
        modalWindowText: {
          arc: {
            header: 'Archive Desk',
            content: [
              'Remove (and archive) this desk from the system.',
              'Users will not see this room on the floorplan or search results and not be able to reserve it.',
            ],
            buttonLabel: 'Archive Desk',
          },
          act: {
            header: 'Make available',
            content: [
              'Make a desk available that was previously removed and archived..',
              'This will update the desk so that users will be again be able to book it.',
            ],
            buttonLabel: 'Make Available',
          },
          not: {
            header: 'Make a desk unavailable',
            content: [
              'This is often used to make the desk unavailable for short periods (for example, during maintenance).',
              'Users will still see this desk on the floorplan or search results but not be able to book it.',
              'Any existing future bookings will be cancelled. Colleagues who have desk bookings will receive notification of this.',
            ],
            buttonLabel: 'Make Unavailable',
          },
        },
        saveButtonTitle: 'Save',
        deleteButtonTitle: 'Delete Desk',
        sections: {
          features: 'Desk Features',
          deskDetails: 'Desk Details',
          location: 'Location',
          neighbourhoods: 'Neighbourhoods',
        },

        name: {
          label: 'Desk Name',
          placeholder: '...',
          error: 'Please enter 3 or more characters',
          whitespace: 'less than 3 characters entered or incorrect name',
        },
        status: {
          label: 'Desk Status',
          placeholder: 'Select a room status',
          error: 'Please select a room status',
        },
        site: {
          label: 'Site',
          placeholder: 'Site',
          error: 'Please select a site',
        },
        region: {
          placeholder: 'Region',
          error: 'Please select a region',
          location: 'Location',
        },
        building: {
          placeholder: 'Building',
          error: 'Please select a building',
        },
        floor: {
          placeholder: 'Floor',
          error: 'Please select a floor',
        },
        user: {
          placeholder: 'Allocated User',
          agile: 'Agile',
          fixed: 'Fixed',
          error: 'Please select a colleague to allocate to this desk.',
        },
        neighbourhoods: {
          placeholder: 'Neighbourhood',
        },
      },
    },
    rooms: {
      sideTitle: 'Rooms',
      title: 'Resources: Rooms',
      buttonTitle: 'Rooms',
      addButtonTitle: 'Add Room',
      nameInputPlaceholder: 'Room name',
      siteSelectPlaceholder: 'All Sites',
      buildingSelectPlaceholder: 'All Buildings',
      floorSelectPlaceholder: 'All Floors',
      roomSelectPlaceholder: 'All Rooms',
      regionSelectPlaceholder: 'All regions',
      roomTypeSelectPlaceholder: 'Room type',
      cateringServiceSelectPlaceholder: 'All catering',
      equipmentServiceSelectPlaceholder: 'All equipment & features',
      layoutServiceSelectPlaceholder: 'All layouts',
      facilitySelectPlaceholder: 'All facilities',
      minSizeSelectPlaceholder: 'Min size',
      maxSizeSelectPlaceholder: 'Max size',
      statusSelectPlaceholder: 'Status',
      searchPanelTitle: 'Rooms filters',
      siteSearchPanelTitle: 'Where',
      typeAndSizePanelTitle: 'Room Type & Size',
      servicesPanelTitle: 'Report services',
      facilityPanelTitle: 'Room facilities',
      nameColumnHeader: 'Room Name',
      statusColumnHeader: 'Status',
      nameInputLabel: 'Rooms',
      detailsScreen: {
        modalWindowText: {
          arc: {
            header: 'Archive Room',
            content: [
              'Remove (and archive) this room from the system.',
              'Users will not see this room on the floorplan or search results and not be able to book it.',
            ],
            buttonLabel: 'Archive Room',
          },
          act: {
            header: 'Make available',
            content: [
              'Make a room available that was previously made unavailable.',
              'This will update the room so that users will be again be able to book it.',
            ],
            buttonLabel: 'Make Available',
          },
          not: {
            header: 'Make a room unavailable',
            content: [
              'This is often used to make the room unavailable for short periods (for example, during maintenance).',
              'Users will still see this room on the floorplan or search results but not be able to book it.',
              'For any scheduled meetings in the room, the host will receive an email notification that the room is no longer available but the scheduled meeting will be unaffected.',
            ],
            buttonLabel: 'Make Unavailable',
          },
        },
        saveButtonTitle: 'Save',
        deleteButtonTitle: 'Delete Room',
        sections: {
          roomDetails: 'Room Details',
          location: 'Location',
          roomType: 'Room Type',
          estateDetails: 'Estate Details',
          bookingRestrictions: 'Booking Restrictions',
          userRestrictions: 'User Restrictions',
          roomCapacity: 'Room capacity',
          finance: 'Finance & Costs',
          roomCapability: 'Room Capability',
        },
        roomCapabilitySections: {
          layout: 'Layout',
          equipment: 'Equipment & Features',
          catering: 'Catering',
          roomFeatures: 'Room Features',
          inRoomFacilities: 'In-room Facilities',
        },
        name: {
          label: 'Room Name',
          placeholder: '...',
          error: 'Please enter 3 or more characters',
          whitespace: 'less than 3 characters entered or incorrect name',
        },
        status: {
          label: 'Room Status',
          placeholder: 'Select a room status',
          error: 'Please select a room status',
        },
        description: {
          label: 'Description',
          placeholder: 'Room Description',
        },
        capacity: {
          label: 'Seating capacity',
          error: 'Please enter a number greater than 0',
        },
        site: {
          label: 'Site',
          placeholder: 'Site',
          error: 'Please select a site',
        },
        region: {
          placeholder: 'Region',
          error: 'Please select a region',
          location: 'Location',
        },
        building: {
          placeholder: 'Building',
          error: 'Please select a building',
        },
        floor: {
          placeholder: 'Floor',
          error: 'Please select a floor',
        },
        roomType: {
          label: 'Room type',
          error: 'Please enter a room type',
        },
        exchangeMailBox: {
          label: 'Exchange Mailbox',
          placeholder: '...',
          error: 'Please enter an exchange mailbox',
          validation: 'Please enter a valid email address',
        },
        exchangeName: {
          label: 'Exchange Name',
          placeholder: '...',
        },
        noticePeriod: {
          label: 'Notice period',
          placeholder: 'HH:MM',
        },
        clearDownTime: {
          label: 'Clear Down Time',
          placeholder: 'HH:MM',
        },
        bookingWindowDays: {
          label: 'Booking window days',
          validateError: 'Entered over 4 symbols or non numerical value',
        },
        roomTypes: {
          label: 'Room type',
          placeholder: 'Please select a room type',
          error: 'Please select a room type',
        },
      },
    },
    deskFeatures: {
      headerTitle: 'Delete Desk Feature',
      modalWindowText:
        'Are you sure you wish to delete this desk feature and remove it from all desks that it is assigned to?',
      sideTitle: 'Desk Features',
      title: 'Resources: Desk Features',
      buttonTitle: 'Desk Features',
      addButton: 'Add Desk Feature',
      searchPanelTitle: 'Find Desk Feature',
      nameInputPlaceholder: 'Desk Feature name',
      nameColumnHeader: 'Desk Feature Name',
      iconColumnHeader: 'Icon',
      searchLabel: 'Desk Features',
      detailsScreen: {
        saveButtonTitle: 'Save',
        deleteButtonTitle: 'Delete Desk Feature',
        detailsSectionTitle: 'Desk Feature Details',
        name: {
          label: 'Desk Feature Name',
          error: 'Please enter desk feature name',
          whitespace: 'less than 3 characters entered or incorrect name',
        },
        icon: {
          label: 'Icon',
          error: 'Please select an icon',
        },
      },
    },
    neighbourhoods: {
      headerTitle: 'Delete Neighbourhood',
      conflictHeaderTitle: 'Cannot delete neighbourhood',
      modalWindowText: 'Are you sure you wish to delete this neighbourhood?',
      modalConflictText: ['In order to delete a neighbourhood, all desks that are members must be removed first.', 'To identify which desks are members of this neighbourhood you can filter by neighbourhood within Desks.'],
      sideTitle: 'Neighbourhoods',
      title: 'Resources: Neighbourhoods',
      buttonTitle: 'Neighbourhoods',
      searchPanelTitle: 'Neighbourhood Search',
      nameInputPlaceholder: 'Neighbourhood name',
      nameColumnHeader: 'Neighbourhood Name',
      addButton: 'Add Neighbourhood',
      deleteButton: 'Delete Neighbourhood',
      colorColumn: 'Colour',
      detailsScreen: {
        summaryTitle: 'Summary',
        saveButtonTitle: 'Save',
        detailsSectionTitle: 'Neighbourhood Details',
        bookingSectionTitle: 'Availability',
        department: {
          label: 'Department Availability',
          allLabel: 'Available to Everyone',
          selectLabel: 'Only Certain User Groups',
          selectPlaceholder: 'Search for User Groups...',
          remove: 'Remove',
        },
        name: {
          label: 'Neighbourhood Name',
          error: 'Please enter neighbourhood name',
          whitespace: 'less than 3 characters entered or incorrect name',
        },
        key: {
          label: 'Neighbourhood Key',
          error: 'Please enter neighbourhood key',
          whitespace: 'less than 3 characters entered or incorrect name',
        },
        color: {
          label: 'Colour',
        },
      },
    },
    facilities: {
      headerTitle: 'Delete Facility',
      modalWindowText:
        'Are you sure you wish to delete this facility and remove it from all rooms that it is assigned to?',
      sideTitle: 'Room Facilities',
      title: 'Resources: Room Facilities',
      buttonTitle: 'Facilities',
      addButtonTitle: 'Add Facility',
      searchPanelTitle: 'Find Room Facility',
      nameInputPlaceholder: 'Facility name',
      typeSelectPlaceholder: 'Facility Type',
      nameColumnHeader: 'Facility Name',
      typeColumnHeader: 'Facility Type',
      whereSectionTitle: 'Where',
      facilityInfoSectionTitle: 'Facility Info',
      searchLabel: 'Facilities',
      detailsScreen: {
        mainTitle: 'Edit room service',
        summaryTitle: 'Summary',
        saveButtonTitle: 'Save',
        deleteButtonTitle: 'Delete Facility',
        detailsSectionTitle: 'Room Facility Details',
        name: {
          label: 'Facility Name',
          error: 'Please enter facility name',
          whitespace: 'less than 3 characters entered or incorrect name',
        },
        description: {
          label: 'Description',
        },
        type: {
          label: 'Facility Type',
          error: 'Please select facility type',
        },
        icon: {
          label: 'Icon',
          error: 'Please select an icon',
        },
      },
    },
    services: {
      headerTitle: 'Delete Service',
      modalWindowText:
        'Are you sure you wish to delete this service and remove it from all rooms that it is assigned to?',
      sideTitle: 'Services',
      title: 'Resources: Services',
      buttonTitle: 'Services',
      addButtonTitle: 'Add Service',
      searchPanelTitle: 'Find Room Service',
      nameInputPlaceholder: 'Room Service Name',
      typeSelectPlaceholder: 'Service Type',
      regionSelectPlaceholder: 'Select Region',
      siteSelectPlaceholder: 'Select Site',
      nameColumnHeader: 'Service Name',
      typeColumnHeader: 'Service Type',
      whereSectionHeader: 'Where',
      infoSectionHeader: 'Service Info',
      searchLabel: 'Services',
      detailsScreen: {
        mainTitle: 'Edit room service',
        summaryTitle: 'Summary',
        saveButtonTitle: 'Save',
        deleteButtonTitle: 'Delete Service',
        detailsSectionTitle: 'Room Service Details',
        name: {
          label: 'Service Name',
          error: 'Please enter service name',
          whitespace: 'less than 3 characters entered or incorrect name',
        },
        description: {
          label: 'Description',
        },
        type: {
          label: 'Service Type',
          error: 'Please select service type',
        },
        icon: {
          label: 'Icon',
          error: 'Please select an icon',
        },
        setUpTime: {
          label: 'Set-up time',
          placeholder: 'HH:MM',
        },
        clearDownTime: {
          label: 'Clear Down Time',
          placeholder: 'HH:MM',
        },
        noticePeriod: {
          label: 'Notice period',
        },
        maxBookable: {
          label: 'Maximum bookable per session (leave blank if no limit)',
        },
        restrictedRoom: {
          label: 'Restricted Room',
        },
        costs: {
          label: 'Costs',
        },
        location: {
          label: 'Location',
        },
        site: {
          label: 'Site',
          error: 'Please select a site',
        },
        region: {
          label: 'Region',
          error: 'Please select a region',
        },
        providerDetails: 'Provider Details',
        providerEmail: {
          label: 'Provider email',
          error: 'Please enter a valid email address',
          whitespace: 'You have entered an invalid email address',
        },
        restrictionsSectionStart: 'Booking Restrictions',
        userRestrictions: 'User Restrictions',
        setUpAndClearAwayPeriods: 'Set-up and Clear Down Periods',
        setUpAndClearAwayPeriodsDescription:
          'These are the time periods during which the room is blocked for booking during set-up and clear down of the service.',
        restrictionsSubsectionStart:
          'Specify any restrictions for booking this service',
        financeSectionStart: 'Finance & Costs',
        sitesSectionStart: 'Sites',
        siteControl: {
          error: 'Please select at least one site',
        },
      },
    },
    roomTypes: {
      headerTitle: 'Delete Room Type',
      modalWindowText:
        'Are you sure you wish to delete this room type and remove it from all rooms that it is assigned to?',
      buttonTitle: 'Room Types',
      sideTitle: 'Room Types',
      title: 'Resources: Room Types',
      addButtonTitle: 'Add Room Type',
      searchPanelTitle: 'Find Room Types',
      nameInputPlaceholder: 'Room Type name',
      typeSelectPlaceholder: 'Room Type',
      nameColumnHeader: 'Room Type Name',
      typeColumnHeader: 'Room Type',
      whereSectionTitle: 'Where',
      facilityInfoSectionTitle: 'Room Type Info',
      searchLabel: 'Room Types',
      detailsScreen: {
        mainTitle: 'Edit room types',
        summaryTitle: 'Summary',
        saveButtonTitle: 'Save',
        deleteButtonTitle: 'Delete Room Type',
        detailsSectionTitle: 'Room Type Details',
        name: {
          label: 'Room type Name',
          error: 'Please enter Room type name',
          whitespace: 'less than 3 characters entered or incorrect name',
        },
      },
    },
  },
  reporting: {
    title: 'Reporting',
    backButtonText: 'Back to Top Menu',
    resetButtonText: 'Reset',
    whereSectionHeader: 'Where',
    helpTitle: 'A guide to reporting',
    helpBody: [
      {
        title: 'Service Orders',
        text: 'This is what you can report for service orders',
      },
    ],
    filter: {
      title: 'Service Orders',
      datePlaceholder: 'Select Date',
      serviceType: 'All Service Types',
      collapseWhat: 'What',
      collapseWhen: 'When',
      collaspeWhere: 'Where',
      from: 'From',
      to: 'To',
      regionPlaceholder: 'Select Region',
      sitePlaceholder: 'Select Site',
      buildingPlaceholder: 'Select Building',
      floorPlaceholder: 'Select Floor',
    },
  },
  settings: {
    title: 'Settings',
    microsoftTeams: {
      title: 'Microsoft Teams',
      sectionStart: 'Authentication',
      tenantIdTitle:
        "To be able to create Teams meetings you need to link your organisation's service account by entering its Azure Tenant ID.",
      placeholder: 'Enter Azure Tenant ID',
      label: 'Azure Tenant ID',
    },
    teamsMeetings: {
      title: 'Configuration',
      description:
        'Enabling this option will default all new meetings created in the mobile and web application to being Teams meetings.',
    },
  },
  upload: {
    estate: 'Estate',
    meetingRooms: 'Meeting Rooms',
    desks: 'Desks',
  },
  serviceType: 'All Service Types',
};
