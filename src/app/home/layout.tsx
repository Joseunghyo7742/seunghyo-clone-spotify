import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'asac-spotify-clone | home',
  description: 'Generated by create next app',
}

export default async function HomeLayout({ children }: { children: React.ReactNode }) {
  return <section className="flex flex-col gap-10 px-4 pt-2 mb-20">{children}</section>
}
