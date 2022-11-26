import {useEffect, useState} from 'react';

import type {DropdownOption, TableColumn} from '../../components/Table/View.types';
import {API_URL} from '../../constants/api';
import createParams from '../../helpers/createParams';

import {normalizeObject} from './View.helpers';
import type {AreaOption, Commodity, CommodityInput, SizeOption} from './View.types';

const useView = () => {
  const [commodities, setCommodities] = useState<Array<Commodity>>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [params, setParams] = useState<CommodityInput>({
    limit: pageSize, offset: 0, search: ''
  });
  const [filter, setFilter] = useState<Record<string, string>>({});
  const [sizeOptions, setSizeOptions] = useState<Array<DropdownOption>>([]);
  const [cityOptions, setCityOptions] = useState<Array<DropdownOption>>([]);
  const [provinceOptions, setProvinceOptions] = useState<Array<DropdownOption>>([]);
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
      dataType: 'number',
      filterKey: 'size',
      filterType: 'dropdown',
      filterOption: sizeOptions,
    },
    {
      name: 'Harga',
      dataKey: 'price',
      dataType: 'currency'
    },
    {
      name: 'Kota',
      dataKey: 'area_kota',
      dataType: 'string',
      filterKey: 'area_kota',
      filterType: 'dropdown',
      filterOption: cityOptions,
    },
    {
      name: 'Provinsi',
      dataKey: 'area_provinsi',
      dataType: 'string',
      filterKey: 'area_provinsi',
      filterType: 'dropdown',
      filterOption: provinceOptions,
    },
    {
      name: 'Tanggal',
      dataKey: 'tgl_parsed',
      dataType: 'date'
    },
  ];

  const getData = () => {
    fetch(`${API_URL}/list?${createParams(params)}&search=${JSON.stringify(normalizeObject(filter))}`)
      .then(res => res.json())
      .then((result: Array<Commodity>) => {
        setCommodities(result);
      }, (error) => {
        console.error(error.message);
      });
  };

  const getSizeOptions = () => {
    fetch(`${API_URL}/option_size`)
      .then(res => res.json())
      .then((result: Array<SizeOption>) => {
        const options = result.map(el => ({value: el.size, name: el.size}));
        setSizeOptions(options);
      }, (error) => {
        console.error(error.message);
      });
  };

  const getAreaOptions = () => {
    fetch(`${API_URL}/option_area`)
      .then(res => res.json())
      .then((result: Array<AreaOption>) => {
        const cities = result.map(el => ({value: el.city, name: el.city}));
        const provinces = result.map(el => ({value: el.province, name: el.province}));
        setCityOptions(cities);
        setProvinceOptions(provinces);
      }, (error) => {
        console.error(error.message);
      });
  };

  const onChangePage = (page: number) => {
    setPage(page);
    const newParams = { offset: ((page > 0 ? page : 1) * params.limit) - params.limit };
    setParams((prevState) => ({...prevState, ...newParams}));
  };

  const onPageSizeChange = (pageSize: number) => {
    setPage(1);
    setPageSize(pageSize);
    const newParams = { limit: pageSize, offset: 0 };
    setParams((prevState) => ({...prevState, ...newParams}));
  };

  const onQuickPageChange = (page: number) => {
    setPage(page);
  };

  const onFilterChange = (filter: Record<string, string>) => {
    setPage(1);
    const newParams = { limit: pageSize, offset: 0 };
    setParams((prevState) => ({...prevState, ...newParams}));
    setFilter((prevState) => ({...prevState, ...filter}));
  };

  useEffect(() => {
    getData();
  }, [params, filter]);

  useEffect(() => {
    getSizeOptions();
    getAreaOptions();
  }, []);

  return {commodities, tableColumns, page, pageSize, onChangePage, onPageSizeChange, onQuickPageChange, onFilterChange};
};

export default useView;