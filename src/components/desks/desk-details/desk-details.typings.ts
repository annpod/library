export interface IDeskFeature {
  id: string;
  iconId: string;
  name: string;
  iconUrl: string;
  isSelected: boolean;
}

export interface IAllocatedUser {
  fullName: string | null;
  key: string | null;
}

export interface IDeskDetails {
  name: string;
  deskStatus: string;
  location: {
    regionProvisioningKey: string;
    regionName: string;
    siteProvisioningKey: string;
    siteName: string;
    buildingProvisioningKey: string;
    buildingName: string;
    floorProvisioningKey: string;
    floorName: string;
  };
  features: IDeskFeature[];
  neighbourhoodId: string;
  allocatedUser: IAllocatedUser;
}

export interface IOpenDeskDetails {
  key: string;
  provisioningKey: string;
  details: IDeskDetails;
}
