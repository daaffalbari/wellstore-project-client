import Image from 'next/image';
import FooterItem from '../../molecules/FooterItem';

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image src="/logo.svg" width={60} height={60} alt="logo wellstore" />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                WellStore membantu gamers
                <br />
                untuk menjadi Gamers sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2023. All Rights Reserved.</p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">Company</p>
                  <ul className="list-unstyled">
                    <FooterItem title="About Us" link="/" />
                    <FooterItem title="Press Release" link="/" />
                    <FooterItem title="Terms of Use" link="/" />
                    <FooterItem title="Privacy & Policy" link="/" />
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">Support</p>
                  <ul className="list-unstyled">
                    <FooterItem title="Refund Policy" link="/" />
                    <FooterItem title="Unlock Rewards" link="/" />
                    <FooterItem title="Live Chatting" link="/" />
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
                  <ul className="list-unstyled">
                    <FooterItem title="@wellstore" link="mailto: daffaa.albari@gmail.com" />
                    <FooterItem title="well.store@gmail.com" link="mailto: daffaa.albari@gmail.com" />
                    <FooterItem title="Dipatiukur 12, Bandung" link="https://goo.gl/maps/aidvyxEFgCAXXtW48" />
                    <FooterItem title="081267140932" link="tel: 081267140932" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
