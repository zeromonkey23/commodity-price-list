import {useEffect, useState} from 'react';

import type {TableColumn} from '../../components/Table/View.types';
import {API_URL} from '../../constants/api';
import createParams from '../../helpers/createParams';

import type {Commodity, CommodityInput} from './View.types';

const useView = () => {
  const [commodities, setCommodities] = useState<Array<Commodity>>([]);
  const [page, setPage] = useState(1);
  const [params, setParams] = useState<CommodityInput>({
    limit: 10, offset: 0
  });
  const tableColumns: Array<TableColumn> = [
    {
      name: 'Komoditas',
      dataKey: 'komoditas',
      dataType: 'string',
      filterKey: 'komoditas',
      filterType: 'text',
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

  const getData = () => {
    fetch(`${API_URL}/list?${createParams(params)}`)
      .then(res => res.json())
      .then((result: Array<Commodity>) => {
        setCommodities(result);
      }, (error) => {
        console.error(error.message);
      });
  };

  const onChangePage = async (page: number) => {
    setPage(page);
    const newParams = { offset: (page * params.limit) - params.limit };
    setParams((prevState) => ({...prevState, ...newParams}));
  };

  useEffect(() => {
    getData();
  }, [params]);

  return {commodities, tableColumns, page, onChangePage};
};

export default useView;