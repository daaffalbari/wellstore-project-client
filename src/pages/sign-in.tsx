import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SigninForm from '../../components/organisms/SigninForm';
import IlustrationSignin from '../../components/organisms/SigninForm/IllustrationSignin';

export default function SignIn() {
  return (
    <section className="sign-in mx-auto">
      <div className="row">
        <div className="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
          <form action="">
            <div className="container mx-auto">
              <div className="pb-50">
                <Link href="/" legacyBehavior>
                  <a className="navbar-brand">
                    <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
                  </a>
                </Link>
              </div>
              <SigninForm />
            </div>
          </form>
        </div>
        <IlustrationSignin />
      </div>
    </section>
  );
}
