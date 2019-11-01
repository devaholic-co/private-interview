import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';

class RegisterBox extends PureComponent {
	render() {
		return (
			<div className='box-register container-fluid'>
				<Row>
					<Col span={24}>
						<div class="since">ตั้งแต่วันที่</div>
					</Col>
					<Col span={24}>
						<div class="time">27 ก.ย. - 31 ธ.ค. 62</div>
					</Col>
					<Col span={24}>
						<a href="https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/" target="_blank">
							<button class="btn-register">
								ลงทะเบียน เฟส 2<br/>
								ตั้งแต่วันที่ 24 ต.ค.62 วันละ 2 รอบ เวลา 6.00 และ 18.00 น.<br/>
								(จำกัดจำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)
							</button> 
							<hr/>
						</a>
					</Col>
				</Row>
			</div> 
		);
	}
}

export default RegisterBox;