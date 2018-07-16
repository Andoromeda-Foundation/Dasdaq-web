
import React from "react";
import { NavLink } from 'react-router-dom';
import { Affix,Layout, Menu, Icon, Row, Col } from "antd";
// import Brand from "../Brand.svg";
import logo from "../dasdaq-logo.svg";
const { Header } = Layout;
const { SubMenu } = Menu;
const navigationMenus = [
    {
        path: '/',
        icon: 'home',
        name: '首页'
    },
    {
        path: '/market',
        icon: 'area-chart',
        name: '市场'
    },
    {
        path: '/about',
        name: '关于'
    },
]


const MenuItem = ({ path, name, icon }) =>
    <Menu.Item key={path}>
        <NavLink to={path}>
            {icon ? <Icon type={icon} /> : <div />}
            <span>{name}</span>
        </NavLink>
    </Menu.Item>


const HeaderComponent = ({ location, lang, setLanguage, theme, setTheme }) => {
    const headerBackgroundColor = theme === 'light' ? "#FFF" : "#001529"
    return (
        <Affix offsetTop={0} onChange={affixed => console.log(affixed)}>
    <Header className="header" style={{ background: headerBackgroundColor }}>
    
            <Row>
                <Col xxl={4} xl={5} lg={2} sm={24} xs={24}>
                    <div className="logo" >
                        <img src={logo} alt="Dasdaq Brand" 
                        style={{maxHeight: '3rem'}}></img>
                    </div>
                </Col>
                <Col xxl={20} xl={19} lg={19} sm={24} xs={24}>
        <Menu
            theme={theme}
            mode="horizontal"
            defaultSelectedKeys={['/']}
            selectedKeys={[location.pathname]}
            style={{ lineHeight: '62px' }}>
            {
                navigationMenus.map(MenuItem)
            }
            <Menu.Item style={{ float: 'right' }}>
                当前货币：BTC
            </Menu.Item>
            <SubMenu 
            style={{ float: 'right' }} 
            title={<span>主题色</span>}>
                <Menu.Item onClick={() => setTheme('SWITCH_TO_DARK')}> DARK </Menu.Item>
                <Menu.Item onClick={() => setTheme('SWITCH_TO_LIGHT')}> LIGHT </Menu.Item>
            </SubMenu>
            <SubMenu 
            style={{ float: 'right' }} 
            title={<span><Icon type="global" /><span>语言 {lang}</span></span>}>
                <Menu.Item onClick={() => setLanguage('SWITCH_TO_CHINESE')}>中文</Menu.Item>
                <Menu.Item onClick={() => setLanguage('SWITCH_TO_ENGLISH')}>English</Menu.Item>
                <Menu.Item onClick={() => setLanguage('SWITCH_TO_JAPANESE')}>日本語</Menu.Item>
                <Menu.Item onClick={() => setLanguage('SWITCH_TO_KOREAN')}>한국말</Menu.Item>
            </SubMenu>
        </Menu>
        </Col>
        </Row>
        
    </Header>
    </Affix>
    )
}

export default HeaderComponent