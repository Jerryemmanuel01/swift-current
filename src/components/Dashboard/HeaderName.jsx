import React from 'react'

const HeaderName = ({title}) => {
  return (
    <h2 className="font-poppins font-semibold text-secondary text-xl lg:text-2xl">
      {title}
    </h2>
  );
}

export default HeaderName