import type {TableColumn} from '../../components/Table/View.types';

export const COMMODITY_COLUMNS: Array<TableColumn> = [
  {
    name: 'Komoditas',
    dataKey: 'komoditas',
    dataType: 'string',
  },
  {
    name: 'Jumlah (g)',
    dataKey: 'size',
    dataType: 'number'
  },
  {
    name: 'Harga',
    dataKey: 'price',
    dataType: 'currency'
  },
  {
    name: 'Kota',
    dataKey: 'area_kota',
    dataType: 'string'
  },
  {
    name: 'Provinsi',
    dataKey: 'area_provinsi',
    dataType: 'string'
  },
  {
    name: 'Tanggal',
    dataKey: 'tgl_parsed',
    dataType: 'date'
  },
];