import React, { Component, Suspense } from 'react';
// import GrandSon from './GrandSon';

const GrandSon = React.lazy(() => {
  // eslint-disable-next-line no-undef
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(import('./GrandSon'));
    }, 1000);
  });
});

export default class Son extends Component {
  render() {
    return (
      <div className="son">
        Son
        <Suspense fallback={<div>loading...</div>}>
          <GrandSon />
        </Suspense>
      </div>
    );
  }
}
