import React from "react"
const webeveynWebsite = "https://www.webeveyn.com/"

type FooterProps = {
  className?: string
}

function Footer({className}:FooterProps) {
  return (
    <div className={`mt-40 p-5 text-end text-sm ${className}`}>
        <a href={webeveynWebsite}>&copy; Copyright 2023 - Designed by webeveyn.com</a> 
    </div>
  )
}

export default Footer