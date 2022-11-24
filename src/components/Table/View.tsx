import React from 'react';

import noop from '../../helpers/noop';
import toIDR from '../../helpers/toIDR';
import toLocaleDate from '../../helpers/toLocaleDate';
import Button from '../Button/View';
import Input from '../Input/View';
import InputSearch from '../InputSearch/View';

import type {TableProps} from './View.types';

const Table = (props: TableProps) => {
  const {data, columns, page, onPageChange = noop} = props;
  return (
    <div className="shadow rounded-2xl">
      <div className="overflow-x-auto relative max-h-[576px] overflow-y-auto rounded-2xl">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-blue-200 sticky top-0">
            <tr>
              {columns.map((col, i) => (
                <th key={`head-column-${col.name}-${i}`} scope="col" className="py-3 px-6">
                  {col.name}
                </th>
              ))}
            </tr>
            <tr>
              {columns.map((col, i) => (
                <th key={`head-filter-column-${col.name}-${i}`} className="p-2">
                  {col.filterKey ? (
                    <>
                      {col.filterType === 'text' && <InputSearch/>}
                    </>
                  ) : (
                    <></>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={`body-row-${i}`} className={`border-b ${i % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                {columns.map((col, i) =>  (
                  <th key={`body-column-${col.name}-${i}`} scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    {col.dataType === 'string' && (row[col.dataKey] || '-')}
                    {col.dataType === 'number' && (row[col.dataKey] || 0)}
                    {col.dataType === 'currency' && toIDR(Number(row[col.dataKey] || 0))}
                    {col.dataType === 'date' && (row[col.dataKey] ? toLocaleDate(new Date(String(row[col.dataKey]))) : '-')}
                  </th>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row justify-end w-full p-4">
        <Button className="mx-1" disabled={Number(page) === 1 || !page} onClick={() => onPageChange(Number(page) - 1)}>
          &lt;
        </Button>
        <Input className="w-14" type="number" placeholder="Page"
          value={String(page || '')} onChange={(e) => onPageChange(Number(e.target.value || 0))}/>
        <Button className="mx-1" onClick={() => onPageChange(Number(page) + 1)}>
          &gt;
        </Button>
      </div>
    </div>
  );
};

export default Table;