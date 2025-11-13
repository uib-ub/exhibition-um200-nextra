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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div className="col-span-1">
          <h3 className="text-lg">Hvem, hva og hvor?</h3>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-lg">Tema</h3>
          <ul className="md:columns-2">
            <li> <Link href="/tema/arkeologi">Arkeologi</Link> </li>
            <li> <Link href="/tema/bokstaver-og-tegn">Bokstaver og tegn</Link> </li>
            <li> <Link href="/tema/det-store-utland">Det store utland</Link> </li>
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