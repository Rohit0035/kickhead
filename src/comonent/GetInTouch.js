import React from 'react';
import { Form, FormGroup, Input, Label, Row, Col, Button } from 'reactstrap';

const GetInTouch = () => {


    return (
        <>
            <Form>
                <Row>
                    <Col md="6">
                        <FormGroup className='mt-3'>
                            <Label for="">
                                First name
                            </Label>
                            <Input
                                id=""
                                name=""
                                placeholder=""
                                type="text"
                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup className='mt-3'>
                            <Label for="">
                                Last name
                            </Label>
                            <Input
                                id=""
                                name=""
                                placeholder=""
                                type="text"
                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup className='mt-3'>
                            <Label for="">
                                Email address
                            </Label>
                            <Input
                                id=""
                                name=""
                                placeholder=""
                                type="email"
                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup className='mt-3'>
                            <Label for="">
                                Phone Number
                            </Label>
                            <Input
                                id=""
                                name=""
                                placeholder=""
                                type="number"
                            />
                        </FormGroup>
                    </Col>
                    <Col md="12">
                    <FormGroup className='mt-3'>
                        <Label for="">Message</Label>
                        <Input
                            id="exampleText"
                            name="text"
                            type="textarea"
                        />
                        </FormGroup>
                    </Col>
                    <Col md="12" className='text-center mt-3'>

                        <Button className='button-primary'>
                            SEND MESSAGE
                        </Button>
                    </Col>
                </Row>
            </Form >
        </>
    );
};

export default GetInTouch;
