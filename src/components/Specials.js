// import dependencies
import React from 'react'

// import the files needed
import SpecialCard from './SpecialCard'
import SpecialData from './SpecialData'

// functional component
function Specials() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"><strong>Specials</strong></h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {/* mapping through the array of objects in the special data */}
              {
                SpecialData.map((val, ind) => {
                  return <SpecialCard key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    description={val.description}
                    price={val.price}
                  />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Specials
