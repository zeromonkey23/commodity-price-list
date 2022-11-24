export interface Commodity {
  [key: string]: unknown;
  uuid: string;
  komoditas: string;
  area_provinsi: string;
  area_kota: string;
  size: string;
  price: string;
  tgl_parsed: string;
  timestamp: string;
}

export interface CommodityInput {
  [key: string]: unknown;
  limit: number;
  offset: number;
}