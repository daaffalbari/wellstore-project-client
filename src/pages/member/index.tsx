import React from 'react';
import Image from 'next/image';
import Sidebar from '../../../components/organisms/Sidebar';
import OverviwContent from '../../../components/organisms/OverviewContent';

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar />
      <OverviwContent />
    </section>
  );
}
