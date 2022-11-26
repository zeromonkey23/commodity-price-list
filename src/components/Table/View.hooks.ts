import {useState} from 'react';

import noop from '../../helpers/noop';

import type {TableHooksProps} from './View.types';

const useView = (props: TableHooksProps) => {
  const {onFilterChange = noop} = props;
  const [filter, setFilter] = useState<Record<string, string>>({});

  const onChangeFilter = (filterKey: string, value: string, opt = {applyFilterOnChange: false}) => {
    const {applyFilterOnChange} = opt;
    const newFilter = { [filterKey]: value };
    setFilter((prevState) => ({...prevState, ...newFilter}));
    applyFilterOnChange && onApplyFilter({...filter, ...newFilter});
  };

  const onApplyFilter = (overrideFilter?: Record<string, string>) => {
    onFilterChange(overrideFilter || filter);
  };

  return {filter, onChangeFilter, onApplyFilter};
};

export default useView;