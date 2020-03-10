import React, {Suspense} from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => {
    return new Promise(resolve => setTimeout(() => resolve(import('./AnotherComponent')), 2000));
});

function SuspenseLazy() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </div>
  );
}

export default SuspenseLazy;