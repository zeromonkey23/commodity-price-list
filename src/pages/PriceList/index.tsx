import React, {lazy, Suspense} from 'react';

const View = lazy(() => import('./View'));

const PriceList = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <View/>
      </Suspense>
    </div>
  );
};

export default PriceList;