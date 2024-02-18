import FAQAccordion from 'components/FAQaccordions'
import Features from 'components/home/Features'
import type { SharedPageProps } from 'pages/_app'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import HighestEarners from 'components/Become-a-tutor/HighestEarnersSection'
import AppplyNowHero from 'components/Become-a-tutor/ApplyNowSection'
import { UserAuth } from 'context/AuthContext'
import TopDestinations from 'components/home/TopDestinations'
import DiscoverDestinations from 'components/Homepage/DiscoverDestinations'
import Head from 'next/head'
import HeroArea from 'components/layout/HomeSection'
import Footer from 'components/layout/Footer'

interface PageProps extends SharedPageProps {
}

interface Query {
  [key: string]: string
}

export default function Home(props: PageProps) {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');

  const router = useRouter();
  const { userRole } = UserAuth(); // Access the userRole from the context

  useEffect(() => {
    const redirectToRolePage = () => {
      if (userRole) {
        switch (userRole) {
          case 'Student':
            // Redirect Student to post-booking
            router.push('/dashboard');
            break;
          case 'Tutor':
            // Redirect Tutor to dashboard
            router.push('/dashboard');
            break;
          case 'Admin':
            // Redirect Admin to /admin/dashboard
            router.push('/admin/dashboard');
            break;

        }
      }
    };

    redirectToRolePage();
  }, [userRole, router]);


  return (
    <>
      <Head>
        <title>
          Computershop
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeroArea />
      <Features />
      <TopDestinations />
      <AppplyNowHero />
      <HighestEarners />
      <DiscoverDestinations />

      <FAQAccordion />
      <Footer />
    </>
  )
}
