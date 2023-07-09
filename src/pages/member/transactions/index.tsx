import Sidebar from '../../../../components/organisms/Sidebar';
import TransactionContent from '../../../../components/organisms/TransactionContent';
import Image from 'next/image';


export default function Transcations() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu='transactions'/>
      <TransactionContent/>
      </section>
  );
}
