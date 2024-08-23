import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import linkedin from '@/public/linkedin.svg'


const Contact = () => {
  const {theme} = useTheme()
  const emailWhite = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='256' height='256' viewBox='0 0 256 256' xml:space='preserve'%3e%3cdefs%3e%3c/defs%3e%3cg style='stroke: none%3b stroke-width: 0%3b stroke-dasharray: none%3b stroke-linecap: butt%3b stroke-linejoin: miter%3b stroke-miterlimit: 10%3b fill: none%3b fill-rule: nonzero%3b opacity: 1%3b' transform='translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)'%3e%3cpath d='M 75.546 78.738 H 14.455 C 6.484 78.738 0 72.254 0 64.283 V 25.716 c 0 -7.97 6.485 -14.455 14.455 -14.455 h 61.091 c 7.97 0 14.454 6.485 14.454 14.455 v 38.567 C 90 72.254 83.516 78.738 75.546 78.738 z M 14.455 15.488 c -5.64 0 -10.228 4.588 -10.228 10.228 v 38.567 c 0 5.64 4.588 10.229 10.228 10.229 h 61.091 c 5.64 0 10.228 -4.589 10.228 -10.229 V 25.716 c 0 -5.64 -4.588 -10.228 -10.228 -10.228 H 14.455 z' style='stroke: none%3b stroke-width: 1%3b stroke-dasharray: none%3b stroke-linecap: butt%3b stroke-linejoin: miter%3b stroke-miterlimit: 10%3b fill: rgb(255%2c255%2c255)%3b fill-rule: nonzero%3b opacity: 1%3b' transform=' matrix(1 0 0 1 0 0) ' stroke-linecap='round'/%3e%3cpath d='M 11.044 25.917 C 21.848 36.445 32.652 46.972 43.456 57.5 c 2.014 1.962 5.105 -1.122 3.088 -3.088 C 35.74 43.885 24.936 33.357 14.132 22.83 C 12.118 20.867 9.027 23.952 11.044 25.917 L 11.044 25.917 z' style='stroke: none%3b stroke-width: 1%3b stroke-dasharray: none%3b stroke-linecap: butt%3b stroke-linejoin: miter%3b stroke-miterlimit: 10%3b fill: rgb(255%2c255%2c255)%3b fill-rule: nonzero%3b opacity: 1%3b' transform=' matrix(1 0 0 1 0 0) ' stroke-linecap='round'/%3e%3cpath d='M 46.544 57.5 c 10.804 -10.527 21.608 -21.055 32.412 -31.582 c 2.016 -1.965 -1.073 -5.051 -3.088 -3.088 C 65.064 33.357 54.26 43.885 43.456 54.412 C 41.44 56.377 44.529 59.463 46.544 57.5 L 46.544 57.5 z' style='stroke: none%3b stroke-width: 1%3b stroke-dasharray: none%3b stroke-linecap: butt%3b stroke-linejoin: miter%3b stroke-miterlimit: 10%3b fill: rgb(255%2c255%2c255)%3b fill-rule: nonzero%3b opacity: 1%3b' transform=' matrix(1 0 0 1 0 0) ' stroke-linecap='round'/%3e%3cpath d='M 78.837 64.952 c -7.189 -6.818 -14.379 -13.635 -21.568 -20.453 c -2.039 -1.933 -5.132 1.149 -3.088 3.088 c 7.189 6.818 14.379 13.635 21.568 20.453 C 77.788 69.973 80.881 66.89 78.837 64.952 L 78.837 64.952 z' style='stroke: none%3b stroke-width: 1%3b stroke-dasharray: none%3b stroke-linecap: butt%3b stroke-linejoin: miter%3b stroke-miterlimit: 10%3b fill: rgb(255%2c255%2c255)%3b fill-rule: nonzero%3b opacity: 1%3b' transform=' matrix(1 0 0 1 0 0) ' stroke-linecap='round'/%3e%3cpath d='M 14.446 68.039 c 7.189 -6.818 14.379 -13.635 21.568 -20.453 c 2.043 -1.938 -1.048 -5.022 -3.088 -3.088 c -7.189 6.818 -14.379 13.635 -21.568 20.453 C 9.315 66.889 12.406 69.974 14.446 68.039 L 14.446 68.039 z' style='stroke: none%3b stroke-width: 1%3b stroke-dasharray: none%3b stroke-linecap: butt%3b stroke-linejoin: miter%3b stroke-miterlimit: 10%3b fill: rgb(255%2c255%2c255)%3b fill-rule: nonzero%3b opacity: 1%3b' transform=' matrix(1 0 0 1 0 0) ' stroke-linecap='round'/%3e%3c/g%3e%3c/svg%3e"
  const emailDark = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='256' height='256' viewBox='0 0 256 256' xml:space='preserve'%3e%3cdefs%3e%3c/defs%3e%3cg style='stroke: none%3b stroke-width: 0%3b stroke-dasharray: none%3b stroke-linecap: butt%3b stroke-linejoin: miter%3b stroke-miterlimit: 10%3b fill: none%3b fill-rule: nonzero%3b opacity: 1%3b' transform='translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)'%3e%3cpath d='M 75.546 78.738 H 14.455 C 6.484 78.738 0 72.254 0 64.283 V 25.716 c 0 -7.97 6.485 -14.455 14.455 -14.455 h 61.091 c 7.97 0 14.454 6.485 14.454 14.455 v 38.567 C 90 72.254 83.516 78.738 75.546 78.738 z M 14.455 15.488 c -5.64 0 -10.228 4.588 -10.228 10.228 v 38.567 c 0 5.64 4.588 10.229 10.228 10.229 h 61.091 c 5.64 0 10.228 -4.589 10.228 -10.229 V 25.716 c 0 -5.64 -4.588 -10.228 -10.228 -10.228 H 14.455 z' style='stroke: none%3b stroke-width: 1%3b stroke-dasharray: none%3b stroke-linecap: butt%3b stroke-linejoin: miter%3b stroke-miterlimit: 10%3b fill: %2320242c%3b fill-rule: nonzero%3b opacity: 1%3b' transform=' matrix(1 0 0 1 0 0) ' stroke-linecap='round'/%3e%3cpath d='M 11.044 25.917 C 21.848 36.445 32.652 46.972 43.456 57.5 c 2.014 1.962 5.105 -1.122 3.088 -3.088 C 35.74 43.885 24.936 33.357 14.132 22.83 C 12.118 20.867 9.027 23.952 11.044 25.917 L 11.044 25.917 z' style='stroke: none%3b stroke-width: 1%3b stroke-dasharray: none%3b stroke-linecap: butt%3b stroke-linejoin: miter%3b stroke-miterlimit: 10%3b fill: %2320242c%3b fill-rule: nonzero%3b opacity: 1%3b' transform=' matrix(1 0 0 1 0 0) ' stroke-linecap='round'/%3e%3cpath d='M 46.544 57.5 c 10.804 -10.527 21.608 -21.055 32.412 -31.582 c 2.016 -1.965 -1.073 -5.051 -3.088 -3.088 C 65.064 33.357 54.26 43.885 43.456 54.412 C 41.44 56.377 44.529 59.463 46.544 57.5 L 46.544 57.5 z' style='stroke: none%3b stroke-width: 1%3b stroke-dasharray: none%3b stroke-linecap: butt%3b stroke-linejoin: miter%3b stroke-miterlimit: 10%3b fill: %2320242c%3b fill-rule: nonzero%3b opacity: 1%3b' transform=' matrix(1 0 0 1 0 0) ' stroke-linecap='round'/%3e%3cpath d='M 78.837 64.952 c -7.189 -6.818 -14.379 -13.635 -21.568 -20.453 c -2.039 -1.933 -5.132 1.149 -3.088 3.088 c 7.189 6.818 14.379 13.635 21.568 20.453 C 77.788 69.973 80.881 66.89 78.837 64.952 L 78.837 64.952 z' style='stroke: none%3b stroke-width: 1%3b stroke-dasharray: none%3b stroke-linecap: butt%3b stroke-linejoin: miter%3b stroke-miterlimit: 10%3b fill: %2320242c%3b fill-rule: nonzero%3b opacity: 1%3b' transform=' matrix(1 0 0 1 0 0) ' stroke-linecap='round'/%3e%3cpath d='M 14.446 68.039 c 7.189 -6.818 14.379 -13.635 21.568 -20.453 c 2.043 -1.938 -1.048 -5.022 -3.088 -3.088 c -7.189 6.818 -14.379 13.635 -21.568 20.453 C 9.315 66.889 12.406 69.974 14.446 68.039 L 14.446 68.039 z' style='stroke: none%3b stroke-width: 1%3b stroke-dasharray: none%3b stroke-linecap: butt%3b stroke-linejoin: miter%3b stroke-miterlimit: 10%3b fill: %2320242c%3b fill-rule: nonzero%3b opacity: 1%3b' transform=' matrix(1 0 0 1 0 0) ' stroke-linecap='round'/%3e%3c/g%3e%3c/svg%3e"


  return (
    <section id="contact" className="my-12">
    <p className="text-center text-5xl font-bold mb-6">Contact Me</p>
    <div className="flex flex-row items-center justify-center space-x-2">

      <button className="py-2.5 px-3.5 rounded-full bg-foreground flex flex-row items-center justify-center space-x-2 hover:translate-y-[-2px] hover:opacity-60 transition-transform duration-300" 
        onClick={() => window.open('mailto:kyan@cs.wisc.edu', '_blank')}
      >
        <Image
          src={theme === 'light' ? emailWhite : emailDark}
          alt="Email logo"
          width={24}
          height={24}
        />
        <p className="text-lg font-semibold text-background">kyan@cs.wisc.edu</p>
      </button>

      <button className="py-2.5 px-3.5 rounded-full flex flex-row items-center justify-center space-x-1 hover:translate-y-[-2px] hover:opacity-60 transition-transform duration-300" style={{ backgroundColor: '#0078d4' }}
        onClick={() => window.open('https://www.linkedin.com/in/kyancox', '_blank')}
      >
        <Image
          src={linkedin}
          alt="LinkedIn logo"
          width={24}
          height={24}
        />
        <p className="text-lg font-semibold text-white">@KyanCox</p>
      </button>

    </div>
  </section>
  )
}

export default Contact