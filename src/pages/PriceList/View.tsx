import React from 'react';

import Button from '../../components/Button/View';
import Table from '../../components/Table/View';

import useView from './View.hooks';

const View = () => {
  const {
    commodities,
    tableColumns,
    page,
    pageSize,
    onChangePage,
    onPageSizeChange,
    onQuickPageChange,
    onFilterChange
  } = useView();
  return (
    <div className="m-12 p-4 bg-neutral-50 rounded-2xl shadow">
      <h1 className='text-2xl font-extrabold'>Price List</h1>
      <div className="flex flex-row justify-end pb-2 px-4">
        <a href={`${window.location.href}/create`}>
          <Button type='primary'>Tambah Data</Button>
        </a>
      </div>
      <Table data={commodities} columns={tableColumns} page={page} onPageChange={onChangePage}
        pageSize={pageSize} onPageSizeChange={onPageSizeChange} onQuickPageChange={onQuickPageChange}
        onFilterChange={onFilterChange}
      />
    </div>
  );
};

export default View;