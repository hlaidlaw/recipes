import Header from '@/components/header'

export default function Layout({ title, children }) {
  return (
    <div className='grid grid-rows-[56px_auto] h-full'>
      <div className='row-span-1 shadow z-10'>
        <Header title={title} />
      </div>
      <main className='row-span-1'>{children}</main>
    </div>
  )
}
