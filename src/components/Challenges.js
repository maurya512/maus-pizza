import React from 'react'

// import the files needed 
import ChallengeData from './ChallengeData'
import ChallengeCard from './ChallengeCard'

function Challenges() {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"><strong>Challenges</strong></h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {/* mapping through the challenges data */}
                            {
                                ChallengeData.map((val, ind) => {
                                    return <ChallengeCard key={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                        description={val.description}
                                        prize={val.prize}
                                        time={val.time}
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

export default Challenges
