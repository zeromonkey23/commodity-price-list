import {useEffect, useState} from 'react';

import {API_URL} from '../../../../constants/api';
import type {AreaOption, SizeOption} from '../../View.types';

import type {FormSchema} from './View.types';

const useView = () => {
  const [loading, setLoading] = useState(false);
  const [loadingSize, setLoadingSize] = useState(false);

  const form: FormSchema = {
    'Komoditas': {
      'type': 'text',
      'required': true
    },
    'Size': {
      'type': 'select',
      'required': true,
      'options': []
    },
    'Harga': {
      'type': 'currency',
      'required': true
    },
    'Kota': {
      'type': 'select',
      'required': true,
      'options': []
    },
    'Provinsi': {
      'type': 'select',
      'required': true,
      'options': []
    },
    'Save': { // button submit
      'type': 'submit',
    }
  };

  const getSizeOptions = () => {
    setLoadingSize(true);
    fetch(`${API_URL}/option_size`)
      .then(res => res.json())
      .then((result: Array<SizeOption>) => {
        result.forEach(el => {
          (form.Size.options || []).push({value: el.size, label: el.size});
        });
        setLoadingSize(false);
      }, (error) => {
        console.error(error.message);
      });
  };

  const getAreaOptions = () => {
    setLoading(true);
    fetch(`${API_URL}/option_area`)
      .then(res => res.json())
      .then((result: Array<AreaOption>) => {
        result.forEach(el => {
          (form.Kota.options || []).push({value: el.city, label: el.city});
          (form.Provinsi.options || []).push({value: el.province, label: el.province});
        });
        setLoading(false);
      }, (error) => {
        console.error(error.message);
      });
  };

  const onSubmit = (value: Record<string, string>) => {
    fetch(`${API_URL}/list`, {
      method: 'POST',
      body: JSON.stringify([value]),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(() => {
        alert('Berhasil menambahkan data');
        window.location.replace('/');
      }, (error) => {
        console.error(error.message);
      });
  };

  useEffect(() => {
    getSizeOptions();
    getAreaOptions();
  }, []);

  return {form, loading, loadingSize, onSubmit};
};

export default useView;