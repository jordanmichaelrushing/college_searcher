import React from 'react';

import CollegesContainer from './CollegesContainer';

const Colleges = props => {
  return (
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="mx-auto">
          <CollegesContainer />
        </div>
      </div>
    </section>
  );
}
export default Colleges;