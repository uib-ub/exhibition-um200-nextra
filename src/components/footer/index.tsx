import SvgUibCenteredNo from "../icons/uib-centered-no"
// import SvgUibUmCenteredNo from "../icons/uib-um-centered-no"
// import SvgUibUbCenteredNo from "../icons/uib-ub-centered-no"

export function Footer() {
  return (
    <footer className="bg-accent">
      <div className="container flex flex-col items-center justify-center px-4 py-8">

        <SvgUibCenteredNo className="size-96" />

        {/* <SvgUibUbCenteredNo className="" />
        <SvgUibUmCenteredNo className="" /> */}

        <p className="text-center text-sm text-muted-foreground">
          ...
        </p>
      </div>
    </footer>
  )
}