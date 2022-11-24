import React from 'react';

import Table from '../../components/Table/View';

import useView from './View.hooks';

const View = () => {
  const {commodities, tableColumns, page, onChangePage} = useView();
  return (
    <div className="m-12 p-4 bg-neutral-50 rounded-2xl shadow">
      <Table data={commodities} columns={tableColumns} page={page} onPageChange={onChangePage}/>
    </div>
  );
};

export default View;