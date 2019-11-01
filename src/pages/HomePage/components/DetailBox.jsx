import React from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';
import { Row, Col } from 'antd';

const htmlToReactParser = new Parser();

const DetailBox = ({condition, detail}) => {
	return (
		<div className='box-detail'>
			<div className='container'>
				<Row>
					<Col md={20}>
						<Row>
							<Col span={24}>
								<div className='head-title d-none d-sm-block'>
									มาตรการส่งเสริมการบริโภค <br/> ในประเทศ <span className='nowrap'>“ชิมช้อปใช้”</span>
								</div>
								<div className='head-title d-sm-none'>
									มาตรการส่งเสริมการบริโภคในประเทศ <span className='nowrap'>“ชิมช้อปใช้”</span>
								</div>
							</Col>
							<Col span={24} className='mt-4'>
							<div className='detail'>
								{ htmlToReactParser.parse(detail) }
							</div>
							</Col>
							<Col span={24} className='condition mt-4'>
								<div className='title'>เงื่อนไขการเข้าร่วมมาตรการ</div>
								<div className='detail ul mt-2'>
									{ htmlToReactParser.parse(condition) }
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</div> 
		</div> 
	);
}

export default DetailBox;

DetailBox.defaultProps = {
	condition: '1. เป็นบุคคลสัญชาติไทย มีบัตรประจำตัวประชาชน<br>2. มีอายุตั้งแต่ 18 ปีบริบูรณ์ขึ้นไป ณ วันที่ลงทะเบียน<br>3. มีโทรศัพท์มือถือสมาร์ทโฟนที่สามารถเชื่อมต่อสัญญาณอินเทอร์เน็ตและมีอีเมล',
	detail: 'ผู้สนใจเข้าร่วมมาตรการส่งเสริมการบริโภคในประเทศ <span class=\"nowrap\">“ชิมช้อปใช้”</span> รับเงินผ่าน <span class=\"nowrap\">“เป๋าตัง”</span> <span class=\"nowrap\">(G-Wallet)</span> รวมจำนวน 13 ล้านคน  ลงทะเบียนรับสิทธิ ได้ทางเว็บไซต์ <span class=\"nowrap\">www.ชิมช้อปใช้.com</span> <br> ตั้งแต่วันที่ 23 กันยายน  - 15 พฤศจิกายน 2562 (รับลงทะเบียน เฟส 2 ตั้งแต่วันที่ 24 ตุลาคม 2562 จำกัดจำนวนผู้ลงทะเบียน 1 ล้านคนต่อวัน จนกว่าจะครบ 3 ล้านคน)'
};
DetailBox.propTypes = {
	condition: PropTypes.string,
	detail: PropTypes.string
};