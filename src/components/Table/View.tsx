import React from 'react';

import {toIDR} from '../../helpers/toIDR';
import {toLocaleDate} from '../../helpers/toLocaleDate';

import type {TableProps} from './View.types';

const Table = (props: TableProps) => {
  const {data, columns} = props;
  return (
    <div className="overflow-x-auto relative max-h-[576px] overflow-y-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-blue-200">
          <tr>
            {columns.map((col, i) => (
              <th key={`head-column-${col.name}-${i}`} scope="col" className="py-3 px-6">
                {col.name}
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
  );
};

export default Table;