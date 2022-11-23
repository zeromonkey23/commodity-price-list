import {useEffect, useState} from 'react';

import {API_URL} from '../../constants/api';

import {COMMODITY_COLUMNS} from './View.constants';
import type {Commodity} from './View.types';

const useView = () => {
  const [commodities, setCommodities] = useState<Array<Commodity>>([]);
  const tableColumns = COMMODITY_COLUMNS;

  const getData = () => {
    fetch(API_URL + '/list')
      .then(res => res.json())
      .then((result: Array<Commodity>) => {
        setCommodities(result);
      }, (error) => {
        console.error(error.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return {commodities, tableColumns};
};

export default useView;