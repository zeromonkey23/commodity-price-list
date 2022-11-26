import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import JsonToForm from 'json-reactform';

import useView from './View.hooks';

import 'bootstrap/dist/css/bootstrap.min.css';


const View = () => {
  const {form, onSubmit} = useView();
  return (
    <div className="m-12 p-4 bg-neutral-50 rounded-2xl shadow">
      <h1 className='text-2xl font-extrabold'>Price List</h1>
      <JsonToForm model={form} onSubmit={onSubmit}/>
    </div>
  );
};

export default View;