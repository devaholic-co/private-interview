import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';

class DetailBox extends PureComponent {
	render() {
		return (
			<div className='box-detail'>
			<div className='container'>
				<Row>
					<Col md={20}>
						<Row>
							<Col span={24}>
								<div class="head-title d-none d-sm-block">มาตรการส่งเสริมการบริโภค <br/> ในประเทศ <span class="nowrap">“ชิมช้อปใช้”</span></div>
								<div class="head-title d-sm-none">มาตรการส่งเสริมการบริโภคในประเทศ <span class="nowrap">“ชิมช้อปใช้”</span></div>
							</Col>
							<Col span={24} className='mt-4'>
							<div class="detail">ผู้สนใจเข้าร่วมมาตรการส่งเสริมการบริโภคในประเทศ <span class="nowrap">“ชิมช้อปใช้”</span> รับเงินผ่าน <span class="nowrap">“เป๋าตัง”</span> <span class="nowrap">(G-Wallet)</span> รวมจำนวน 13 ล้านคน  ลงทะเบียนรับสิทธิ ได้ทางเว็บไซต์ <span class="nowrap">www.ชิมช้อปใช้.com</span> <br/> ตั้งแต่วันที่ 23 กันยายน  - 15 พฤศจิกายน 2562 (รับลงทะเบียน เฟส 2 ตั้งแต่วันที่ 24 ตุลาคม 2562 จำกัดจำนวนผู้ลงทะเบียน 1 ล้านคนต่อวัน จนกว่าจะครบ 3 ล้านคน)</div>
							</Col>
							<Col span={24} className='condition mt-4'>
								<div class="title">เงื่อนไขการเข้าร่วมมาตรการ</div>
								<div class="detail ul mt-2">
                  1. เป็นบุคคลสัญชาติไทย มีบัตรประจำตัวประชาชน<br/>
                  2. มีอายุตั้งแต่ 18 ปีบริบูรณ์ขึ้นไป ณ วันที่ลงทะเบียน<br/>
                  3. มีโทรศัพท์มือถือสมาร์ทโฟนที่สามารถเชื่อมต่อสัญญาณอินเทอร์เน็ตและมีอีเมล
                </div>
							</Col>
						</Row>
					</Col>
					<Col md={6} lg={16}>
					</Col>
				</Row>
			</div> 
			</div> 
		);
	}
}

export default DetailBox;