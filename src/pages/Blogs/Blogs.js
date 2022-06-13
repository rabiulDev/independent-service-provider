import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Blogs = () => {
    return (
        <Container>
            <Row>
                <Col lg={10} sm={12} className="mx-auto mt-5 border border-1 rounded p-4" >
                    <h4>1. What is the difference between authorization and authentication ?</h4>
                    <p className='w-75 text-muted' style={{ textAlign: 'justify' }}> <span className='fw-bold'>Ans. </span> In simple terms, authentication is the process of verifying who
                        a user is, while authorization is the process of verifying what they have access to.
                        Comparing these processes to a real-world example, when you go through security in an airport,
                        you show your ID to authenticate your identity. Like that when you want to access a private route in a website you have
                        to follow the process of authorization</p>
                </Col>
                <Col lg={10} sm={12} className="mx-auto mt-5 border border-1 rounded p-4" >
                    <h4>2. Why are you using firebase ?</h4>
                    <p className='w-75 text-muted' style={{ textAlign: 'justify' }}> <span className='fw-bold'>Ans. </span>
                        Firebase is a cloud platform created by google for using web and mobile app development. There is many functionality you can
                        use like Authentication, Hoisting, Realtime Database, Tracking Analytics, and many other. Its help the developers to develop an app
                        very easily. Firebase authentication is more than secure to implement custom authentication. So its hels a lot for development purpose.
                    </p>
                </Col>
                <Col lg={10} sm={12} className="mx-auto mt-5 border border-1 rounded p-4" >
                    <h4>3. What other services does firebase provide other than authentication ?</h4>
                    <p className='w-75 text-muted' style={{ textAlign: 'justify' }}> <span className='fw-bold'>Ans. </span>
                        There is many other services besides authenttication like, Realtime Data Base, Remote Config, App Check,
                        Cloud Functions, Cloud Messaging, Hosting, Coud Storage,  Cloud Firestore.
                        Build serverless, secure apps at global scale. Store app data in the cloud,
                        sync data across online and offline devices, and retrieve it with expressive queries.

                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Blogs