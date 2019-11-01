import React, { PureComponent } from 'react';
import { Row, Col, Menu, Dropdown } from 'antd';
import { map } from 'lodash';
// import { useFetch } from '../hoc/withContentQuery';

import './Header.scss';
import { setState } from 'expect/build/jestMatchersObject';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
  }
	render() {
// 		console.log(this.props)
// 		return (
// 			<div>
// 				{this.props.data}
// 			</div>  
// 		);
// 	}
// }

// export default withContentQuery(Header);

// const Photos = (props) => {
	// const [data, loading] = useFetch();
  // const { navbarItems, duration, detail, condition } = data
  const policyDropdownMenu = (
    <Menu className="Header__policyDropdownMenu">
      {
        map([{id: 1}, {id: 2}, {id: 2}], data => (
          <Menu.Item key={data.id} className="Header__policyCard">
            <div class="nav-item"><a class="nav-link" href="https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/" target="_blank">ลงทะเบียนเข้าร่วมมาตรการ</a></div>
          </Menu.Item>
        ))
      }
    </Menu>
  )
	
  return (
    <header>
      <div class="container-fluid">
        <Row>
          <Col span={24}>
            <ul class="header-links">
              <li><a href="https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/" target="_blank">ลงทะเบียนเข้าร่วมมาตรการ</a></li>
              <li><a href="https://www2.xn--b3caa1e2a7e2b0h2be.com/howto-register" target="_blank">ขั้นตอนการเข้าร่วม</a></li>
              <li><a href="https://www2.xn--b3caa1e2a7e2b0h2be.com/thung-ngern-shop-province" target="_blank">ร้านค้าที่เข้าร่วม</a></li>
            </ul>
          </Col>
        </Row>
      </div>
      <div className='header-link-mobile'>
      <div className='navbar'>
      <a class="navbar-brand" href="#"><img src="https://www.ชิมช้อปใช้.com/img/logo/footer.png"/></a>
      <Dropdown
          overlay={policyDropdownMenu}
          className="dropdown"
          placement="bottomRight"
          trigger={['click']}
        >
          <div className={"hamburger hamburger--elastic " + (this.state.toggle ? 'is-active' : '')} 
            onClick={()=>{this.setState({toggle: this.state.toggle ? false : true})}} >
            <div class="hamburger-box">
              <div class="hamburger-inner"></div>
            </div>
          </div>
        </Dropdown>
        </div></div>
    </header>
    // <>
    //   {loading ? (
    //     "Loading..."
    //   ) : (
    //     <div>
		// 			{condition}
		// 			{/* <p>
		// 			{duration}
		// 			{condition}
		// 			</p> */}
		// 		</div>
    //   )}
    // </>
  );
  }
}
export default Header;