import React, { useContext, useEffect } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Form, Input, Button, Checkbox } from 'antd';
import { checkLogin, loginToFirebase, rememberLoginUser } from '../actions'
import { StoreContext } from "../store"

const LoginCard = ({ redirect }) => {
    const { state:{ userSignin: { userInfo, loading, error, remember } }, dispatch } = useContext(StoreContext);
    const [form] = Form.useForm();
    const router = useRouter()
   
    const onFinish = async (values) => {
      console.log('Received values of form: ', values);
      await loginToFirebase(dispatch, values);
    };
  
    const onChange = e => {
      rememberLoginUser(dispatch, e.target.checked);
    }
  
    useEffect(() => {    
      if( userInfo && checkLogin(dispatch) ) router.push(redirect);
    }, [ userInfo ]);// eslint-disable-line react-hooks/exhaustive-deps
  
    return (
        <div className="login-card-alignment">
            <Form
                name="normal_login"
                className="login-form"
                form={form}
                initialValues={{ remember: true, }}
                onFinish={onFinish}
            >
                <div className="login-title">
                    <img 
                        src="/images/login-title.png"
                        className="login-title-img"
                        alt="ramen"    
                    />
                </div>
                <Form.Item
                    className="login-email"
                    name="email"
                    rules={[
                        {
                            type: "email",
                            message: "The input is not valid E-mail!",
                        },
                        {
                            required: true,
                            message: "Please input your E-mail!",
                        },
                     ]}
                    hasFeedback
                >
                    <Input
                        placeholder="E-Mail"
                    />
                </Form.Item>
                <Form.Item
                    className="login-password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Password!",
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item className="login-remember-forget">
                    <Form.Item
                        className="login-remember"
                        name="remember"
                        noStyle
                    >
                        <Checkbox onChange={onChange} checked={remember}>Remember me</Checkbox>
                    </Form.Item>
    
                    <Link href={"/"} className="login-form__forgot" >
                        忘記密碼
                    </Link>
                </Form.Item>
                <Form.Item className="login-register">
                    <Link href={"/register?redirect=index"}>建立帳戶</Link>
                </Form.Item>
                <Form.Item className="login-login">
                    {loading ? (
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form__button"
                            loading
                        >
                            <span className="login-form__button-span">登入</span>
                        </Button>
                    ) : (
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form__button"
                        >
                            <span className="login-form__button-span">登入</span>
                        </Button>
                    )}
                    {error === "" ? (
                        <></>
                    ) : (
                        <div className="login-form__error-wrap">
                            <h3 className="login-form__error-title">
                                <WarningOutlined className="site-form-item-icon" />
                                {"  "}There was a problem
                            </h3>
                            <p className="login-form__error-message">{error}</p>
                        </div>
                    )}
                </Form.Item>
            </Form>
        </div>
    );
};
export default LoginCard;