import React, {lazy, Suspense} from 'react';

const View = lazy(() => import('./View'));

const CreatePriceList = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <View/>
      </Suspense>
    </div>
  );
};

export default CreatePriceList;