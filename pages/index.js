import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="dries de vos landmeterexpert gent opmetingen 3d laserscanning attesten en studies drone zonnepanelen controlleren opsporen warmteverlies infra-rood camera fotorapportage 3d modellen fotogrammetrie puntenwolk gebouwen objecten stucturen ottegemsesteenweg gent"></meta>
        <meta name="description" content="landmeterexpert dries de vos"></meta>
      </Head>

      <main>
        <Header title="Hey poepie!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <p>Dit zou ongeveer op de pagina staan in keywords: keywords 
        dries de vos landmeterexpert gent opmetingen 3d laserscanning attesten en studies drone zonnepanelen controlleren opsporen warmteverlies infra-rood camera fotorapportage 3d modellen fotogrammetrie puntenwolk gebouwen objecten stucturen ottegemsesteenweg gent</p>
      </main>

      <Footer />
    </div>
  )
}
