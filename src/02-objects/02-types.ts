export type CityType = {
  title: string;
  houses: Array<HouseType>;
  governmentBuildings: Array<GovernmentBuildingsType>;
  citizensNumber: number;
};

export type HouseType = {
  id?: number;
  buildedAt: number;
  repaired: boolean;
  address: AddressType;
};

export type GovernmentBuildingsType = {
  type: 'HOSPITAL' | 'FIRE-STATION';
  budget: number;
  staffCount: number;
  address: AddressType;
};

export type AddressType = {
  number?: number;
  street: StreetType;
};

export type StreetType = {
  title: string;
};

// **********************************************
// **********************************************

// export type StudentType = {
//   name: string;
//   age: number;
//   isActive: boolean;
//   address: AddressType;
//   technologies: TechnologiesType[];
// };

// type AddressType = {
//   streetTitle: string;
//   city: LocalCityType;
// };

// type LocalCityType = {
//   title: string;
//   country: string;
// };

// type TechnologiesType = {
//   id: number;
//   title: string;
// };
