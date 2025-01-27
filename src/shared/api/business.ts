import { instance } from "./config.ts";

interface GetBusinessesResponse {
  businesses: Array<Business>;
}

export interface Business {
  id: number;
  name: string;
  location: string;
  contact_info: string;
  status: "active" | "suspended";
  items: Array<BusinessItem>;
  created_at: Date;
  updated_at: Date;
}

export interface BusinessItem {
  id: number;
  name: string;
  price: string;
  discount: string;
  quantity: number;
  img: string;
}

function getBusinesses() {
  return instance.get<GetBusinessesResponse>("/business");
}

function getBusinessById(id: number) {
  return instance.get<Business>(`/business/${id}`);
}

export const business = {
  getBusinesses,
  getBusinessById,
};
