import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
      <footer className='mt-auto flex flex-col justify-center items-center'>
          <div className="bg-foreground py-4 px-6 text-center rounded-lg">
              <p className='text-background font-semibold'>© {currentYear} Kyan Cox</p>
          </div>
      </footer>
  )
}

export default Footer