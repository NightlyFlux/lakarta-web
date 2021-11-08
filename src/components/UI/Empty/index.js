import EmptyIcon from 'src/components/icons/EmptyIcon'

export default function Empty({ message }) {
  return (
    <div className='flex flex-col items-center justify-center p-16 space-y-4 text-gray-500 dark:text-gray-400'>
      <EmptyIcon />
      <h5 className='font-medium text-center text-xl'>{message}</h5>
    </div>
  )
}
