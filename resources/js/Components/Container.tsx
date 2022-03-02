import React from 'react'

interface Props {
  className?: string
}

const Container: React.FC<Props> = ({  className, children }) => {
  return (
    <div className="py-12">
      <div className={`max-w-7xl mx-auto ${className}`}>
        {children}
      </div>
    </div>
  )
}

export default Container
