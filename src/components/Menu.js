// import dependencies
import React from 'react'

// import files
import Card from './Card'
import Data from './Data'

// functional Menu component
function Menu() {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Pizza</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {/* mapping through the array of objects in the data component */}
                            {
                                Data.map((val, ind) => {
                                    return <Card key={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                        description={val.description}
                                        price={val.price}
                                        price1={val.price1}
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

export default Menu
