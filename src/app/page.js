// src/app/page.js
import React from 'react'

import Introduction from './Home/Introduction'
import Why from './Home/Why'
import ElSalvador from './Home/ElSalvador'





function page() {
  return (
    <React.Fragment>
      <Introduction />
      <Why />
      <ElSalvador />
    </React.Fragment>
  )
}

export default page