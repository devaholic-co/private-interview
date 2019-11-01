import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';

import './Footer.scss';

class Footer extends PureComponent {
	render() {
		return (
			<footer>
				<div className='footer-1'>
					<div className='container'>
						<Row>
							<Col md={6} sm={24}>
								<img class='logo' src='https://www.ชิมช้อปใช้.com/img/logo/footer.png'/>
							</Col>
							<Col md={6} sm={8} xs={24}>
								<div className='head'>ข้อมูลลงทะเบียนประชาชน</div>
								<div className="detail">การรับสิทธิ การใช้งานแอปพลิเคชั่น <span class="nowrap">“เป๋าตัง”</span> และ <span class="nowrap">“ถุงเงิน”</span></div>
								<div className='detail'>
								ติดต่อ ชิมช้อปใช้ Call Center by 
								Krungthai โทร.<a class="ml-1" href="tel:021111144"><span class="nowrap">0 2111 1144</span></a>
								</div>
							</Col>
							<Col md={6} sm={8} xs={24}>
							<div className='head'>ข้อมูลลงทะเบียนผู้ประกอบการ</div>
							<div className='detail'>เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ</div>
							<div className='detail'>ติดต่อ โทร.<a class="ml-1" href="tel:022706400"><span class="nowrap">0 2270 6400 กด 7</span></a>
						</div>
							</Col>
							<Col md={6} sm={8} xs={24}>
							<div className='head'>ข้อมูลเที่ยวชิมช้อปใช้</div>
							<div className='detail'>ติดต่อ ททท.</div>
							<div className='detail'>โทร<a class="ml-1" href="tel:1672"><span>1672</span></a></div>
							</Col>
						</Row>
					</div>  
				</div>
				<div className='footer-2'>
					<div className='container'>
						<Row className='no-gutters'>
							<Col lg={6} md={6} sm={24}>
								<div class="copyright">Copyright © 2003-2019</div>
							</Col>
							<Col lg={18} md={18} sm={24}>
								<Row className='nav no-pad'>
									<Col lg={8} md={8} sm={8} xs={24}>
										<a class="nav-link" href="https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/" target="_blank">ลงทะเบียนเข้าร่วมมาตรการ</a>
									</Col>
									<Col lg={8} md={8} sm={8} xs={24}>
										<a class="nav-link" href="https://www2.xn--b3caa1e2a7e2b0h2be.com/howto-register" target="_blank">ขั้นตอนการเข้าร่วมทั้งหมด</a>
									</Col>
									<Col lg={8} md={8} sm={8} xs={24}>
										<a class="nav-link" href="https://www2.xn--b3caa1e2a7e2b0h2be.com/thung-ngern-shop-province" target="_blank">รายชื่อร้านค้าที่เข้าร่วมรายการ</a>
									</Col>
								</Row>
							</Col>
						</Row>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;