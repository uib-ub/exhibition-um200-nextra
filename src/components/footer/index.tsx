import Link from 'next/link'
import SvgUibCenteredNo from "../icons/uib-centered-no"
// import SvgUibUmCenteredNo from "../icons/uib-um-centered-no"
// import SvgUibUbCenteredNo from "../icons/uib-ub-centered-no"

export function Footer() {
  return (
    <footer className="bg-accent pt-16 px-5 md:px-16">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-14 mx-auto">
        <div className="col-span-1">
          <h3 className="text-lg">200 år med vidunderlig vitenskap</h3>
          Den digitale portalen «200 år med Vidunderlig Vitenskap» er et samarbeidsprosjekt mellom Universitetsmuseet og Universitetsbiblioteket i Bergen, i anledning museets 200års-jubileum.
        </div>
        <div className="col-span-1">
          <h3 className="text-lg">Hvem, hva og hvor?</h3>
          «200 år med Vidunderlig Vitenskap» er laget av seniorrådgiver Anita Haugen Lie, Universitetsmuseet i Bergen; rådgiver og digitalarkivar Marianne Paasche og universitetsbibliotekar Ola Søndenå, Universitetsbiblioteket i Bergen. Stor takk til hovedbibliotekar Tarje Sælen Lavik ved Universitetsbiblioteket i Bergen for digital støtte, og til Åsta Lindemann og Rannveig Lohne i Haltenbanken!
        </div>
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-lg">Tema</h3>
          <ul className="md:columns-2">
            <li> <Link href="/tema/arkeologi">Arkeologi</Link> </li>
            <li> <Link href="/tema/bokstaver-og-tegn">Bokstaver og tegn</Link> </li>
            <li> <Link href="/tema/verden-i-bergen">Verden i Bergen</Link> </li>
            <li> <Link href="/tema/dyr">Dyr</Link> </li>
            <li> <Link href="/tema/fisk">Fisk</Link> </li>
            <li> <Link href="/tema/glass">Glass</Link> </li>
            <li> <Link href="/tema/helse">Helse</Link> </li>
            <li> <Link href="/tema/hverdag">Hverdag</Link> </li>
            <li> <Link href="/tema/kirkekunst">Kirkekunst</Link> </li>
            <li> <Link href="/tema/stein">Stein</Link> </li>
            <li> <Link href="/tema/tid-og-rom">Tid og rom</Link> </li>
            <li> <Link href="/tema/vann-vaer-og-vind">Vann, vær & vind</Link> </li>
            <li> <Link href="/tema/vekster">Vekster</Link> </li>
          </ul>
          <div className="mt-4">
            <Link href="/documentation">Dokumentasjon</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">

        <SvgUibCenteredNo className="size-96" />

        {/* <SvgUibUbCenteredNo className="" />
        <SvgUibUmCenteredNo className="" /> */}
      </div>
    </footer>
  )
}