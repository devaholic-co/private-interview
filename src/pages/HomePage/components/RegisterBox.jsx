import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

class RegisterBox extends PureComponent {
	render() {
		return (
			<div className='box-register container-fluid'>
				<Row>
					<Col span={24}>
						<div className='since'>ตั้งแต่วันที่</div>
					</Col>
					<Col span={24}>
						<div className='time'> {this.props.duration} </div>
					</Col>
					<Col span={24}>
						<a href='https://regist.ชิมช้อปใช้.com/Register/' target='_blank' rel='noopener noreferrer'>
							<button className='btn-register'>
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

RegisterBox.defaultProps = {
  duration: '27 ก.ย. - 31 ธ.ค. 62'
};
RegisterBox.propTypes = {
  duration: PropTypes.string
};