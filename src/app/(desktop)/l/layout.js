export default function DesktopLayout({children, navbar, sidebar}) {
    return (
    <>
    {navbar}
    {children}
    {sidebar}
    </>)
}
