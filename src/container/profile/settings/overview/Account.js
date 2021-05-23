import React, { useState } from 'react';
import { Row, Col, Form, Input } from 'antd';
import { AccountWrapper } from './style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Button } from '../../../../components/buttons/buttons';
import { BasicFormWrapper } from '../../../styled';
import Heading from '../../../../components/heading/heading';
import './stylingUpdateAccount.css';

const Account = () => {

  const [form] = Form.useForm();

  let user_info = 
    {
      first_name:                 'Shad',
      last_name:                  'Reza',
      email:                      'contact@gmail.com',
      address:                    'Mirpur-2',
      city:                       'Dhaka',
      zip_code:                   1216,
      country:                    'Bangladesh', 
      billing_type:               'pre-paid' , 
      mobile:                     '01713000000',
      two_factor_authentication:  false,
      api_key:                    '123123123123'
    };


  const [state, setState] = useState(
    user_info    
  );

  const handleSubmit = () => {
    setState({ ...state });
    console.log(user_info);
  };

  const handleCancel = e => {
    e.preventDefault();
    form.resetFields();
  };

  let two_factor_auth_message = 'disabled';

  const handleChange = (whichPropertyToChange,e) => {
    
    if(whichPropertyToChange==="firstName")
    {
      user_info.first_name = e.target.value;
    }
    else if(whichPropertyToChange==="lastName")
    {
      user_info.last_name = e.target.value;
    }
    else if(whichPropertyToChange==="email")
    {
      user_info.email = e.target.value;
    }
    else if(whichPropertyToChange==="address")
    {
      user_info.address = e.target.value;
    }
    else if(whichPropertyToChange==="city")
    {
      user_info.city = e.target.value;
    }
    else if(whichPropertyToChange==="zipCode")
    {
      user_info.zip_code = e.target.value;
    }
    else if(whichPropertyToChange==="country")
    {
      user_info.country = e.target.value;
    }
    else if(whichPropertyToChange==="billingType")
    {
      user_info.billing_type = e.target.value;
    }
    else if(whichPropertyToChange==="mobile")
    {
      user_info.mobile = e.target.value;
    }
    else if(whichPropertyToChange==="twoFactorAuth")
    {
      user_info.two_factor_authentication = !user_info.two_factor_authentication;
    
      if(user_info.two_factor_authentication === true)
      {
        document.getElementById('twoFactorAuthOn').style.color="#5F63F2";
        document.getElementById('twoFactorAuthOff').style.color="#9299B8";
        two_factor_auth_message = 'enabled'
      }
      else if(user_info.two_factor_authentication === false)
      {
        document.getElementById('twoFactorAuthOn').style.color="#9299B8";
        document.getElementById('twoFactorAuthOff').style.color="#5F63F2";
        two_factor_auth_message = 'disabled'
      }

    }
    else if(whichPropertyToChange==="apiKey")
    {
      user_info.api_key = e.target.value;
    }

    setState(
      user_info
    );       
  };

  return (
    <AccountWrapper>
      <Cards
        title={
          <div className="setting-card-title">
            <Heading as="h4">Account Settings</Heading>
            <span>Update your account details</span>
          </div>
        }
      >
        <Row>
          <Col xs={24}>
            <BasicFormWrapper>
              <Form form={form} name="editAccount" onFinish={handleSubmit}>
                <div className="account-form-top">
                  <Row justify="center">
                    <Col xxl={10} lg={16} md={18} xs={24}>
                      <div className="account-form">
                        <Form.Item name="firstName" initialValue={state.first_name} label="First Name">
                          <Input onChange={e => {handleChange('firstName',e)}} />
                        </Form.Item>
                        <br />
                        <Form.Item name="lastName" initialValue={state.last_name} label="Last Name">
                          <Input onChange={e => {handleChange('lastName',e)}} />
                        </Form.Item>
                        <p>
                        Your Fullname : <strong>{state.first_name + " " + state.last_name}</strong>
                        </p>
                        <Form.Item
                          name="email"
                          initialValue={user_info.email}
                          rules={[{ type: 'email' }]}
                          label="Email"
                        >
                          <Input />
                        </Form.Item>
                        <br />
                        <Form.Item name="address" initialValue={state.address} label="Address">
                          <Input onChange={e => {handleChange('address',e)}} />
                        </Form.Item>
                        <br />
                        <Form.Item name="city" initialValue={state.city} label="City">
                          <Input onChange={e => {handleChange('city',e)}} />
                        </Form.Item>
                        <br />
                        <Form.Item name="zipCode" initialValue={state.zip_code} label="Zip Code">
                          <Input onChange={e => {handleChange('zipCode',e)}} />
                        </Form.Item>
                        <br />
                        <Form.Item name="country" initialValue={state.country} label="Country">
                          <Input onChange={e => {handleChange('country',e)}} />
                        </Form.Item>
                        <p>
                        Your Full Address : <strong>{state.address + ", " + state.city + "-" + state.zip_code + ", " + state.country}</strong>
                        </p>
                        <Form.Item name="billingType" initialValue={state.billing_type} label="Billing Type">
                          <Input onChange={e => {handleChange('billingType',e)}} />
                        </Form.Item>
                        <br />
                        <Form.Item name="mobile" initialValue={state.mobile} label="Mobile">
                          <Input onChange={e => {handleChange('mobile',e)}} />
                        </Form.Item>
                        <br />
                        <Form.Item name="twoFactorAuth" initialValue={state.two_factor_authentication} label="Two Factor Authentiication">
                          <div className="muted-text-and-toggler-div">
                            <div className="muted-text-on-left">
                              <p className="text-muted">Two factor authentication is currently {two_factor_auth_message}</p>
                            </div>
                            <div className="toggler-on-right">
                              <div className="toggler-switch">
                                <p className="text-toggler" id="twoFactorAuthOff">Off</p>
                                <label className="switch">
                                  <input type="checkbox"/>
                                  <span className="slider"  id="switch-btn" onClick={(e)=>handleChange('twoFactorAuth',e)}/>
                                </label>
                                <p className="text-toggler" id="twoFactorAuthOn">On</p>
                              </div>
                            </div>
                          </div>
                        </Form.Item>
                        <br />
                        <Form.Item name="apiKey" initialValue={state.api_key} label="API Key">
                          <Input onChange={e => {handleChange('apiKey',e)}} />
                        </Form.Item>
                        <br />
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="account-form-bottom">
                  <Row justify="center">
                    <Col xxl={10} lg={16} md={18} xs={24}>
                      <div className="account-closing">
                        <Row>
                          <Col lg={18} md={24} sm={18} xs={24}>
                            <Heading className="account-closing__title" as="h4">
                              Close Account
                            </Heading>
                            <p>Delete Your Account and Account data</p>
                          </Col>
                          <Col lg={6} md={24} sm={6} xs={24}>
                            <Button size="small" type="danger">
                              Close Account
                            </Button>
                          </Col>
                        </Row>
                      </div>
                      <div className="account-action">
                        <div className="setting-form-actions">
                          <Button size="default" htmlType="submit" type="primary">
                            Save Change
                          </Button>
                          &nbsp; &nbsp;
                          <Button size="default" onClick={handleCancel} type="light">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Form>
            </BasicFormWrapper>
          </Col>
        </Row>
      </Cards>
    </AccountWrapper>
  );
};

export default Account;
