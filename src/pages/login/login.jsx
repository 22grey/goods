import React from "react";
import { Form, Input, Button,Icon } from "antd";

import "./login.less";
import logo from "./images/logo.jpg";

class Login extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    // const form = this.props.form 
    // const values = form .getFieldsValue()

    this.props.form.validateFields((err, values) => {
        //校验成功
        if (!err) {
          console.log('提交登陆的ajax请求 ', values);
        } else {
            console.log('校验失败')
        }
      });
    
  };

  //对密码进行自定义验证
  validarePwd = (rule, value, callback) => {
    if(!value) {
        callback('密码必须输入')
    } else if(value.lenth < 4) {
        callback('密码长度不能小于4')
    } else if(value.lenth > 12) {
        callback('密码长度不能大于12')
    } else if(!/^[a-zA-Z0-9_]+$/.test(value)){
        callback('用户名必须是字母，数字，下划线组成')
    } else{
        callback()
    }
  }

  render() {

    const {getFieldDecorator} = this.props.form

    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="" />
          <h1>react 商品后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登陆</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
            {getFieldDecorator('username', { //配置对象：属性名是特定的名称
            rules: [
                //声明式验证
                { required: true,whitespace:true, message: 'Please input your username!' },
                { min: 4, message: '用户名至少4位' },
                { max: 12, message: '用户名最多12位' },
                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是字母，数字，下划线组成' },
            ],
            // initialValue:'admin'
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
            </Form.Item>
            <Form.Item>
            {getFieldDecorator('password', {
            rules: [
                {validator:this.validarePwd}
            ],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}

const WrapLogin  = Form.create()(Login)
export default WrapLogin