import React from 'react';
import ReachedItem from '../../molecules/ReachedItem';

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem reach="290M+" desc="Players Top Up" />
          <ReachedItem reach="12.500" desc="Games Available" />
          <ReachedItem reach="99,9%" desc="Happy Players" />
          <ReachedItem reach="4.7" desc="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
