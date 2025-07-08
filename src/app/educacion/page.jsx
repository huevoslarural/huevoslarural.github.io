// src/app/educacion/page.jsx
import React from 'react'

import Introduction from './Components/Introduction';
import Courses from './Components/Courses';





function page() {
    return (
        <React.Fragment>
            <Introduction />
            <Courses />
        </React.Fragment>
    )
}

export default page