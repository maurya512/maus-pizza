import React from 'react'

// import files needed
import ContactData from './ContactData'
import ContactCard from './ContactCard'

// functional component
function Contact() {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"><strong>Contact Us</strong></h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {/* mapping through the array of objects in the contactData */}
                            {
                                ContactData.map((val, ind) => {
                                    return <ContactCard key={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                        address={val.address}
                                        address1={val.address1}
                                        phone={val.phone}
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

export default Contact
