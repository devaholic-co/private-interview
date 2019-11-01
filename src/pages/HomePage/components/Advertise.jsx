import React, { PureComponent } from 'react';
import { Row, Col } from 'antd'

import img1 from '../../../Banner_KTB_SQ.png';
import img2 from '../../../Banner_CGD_Sq.png';
import img3 from '../../../Banner_TAT_Hotline_Sq.png';

class Advertise extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<div className='box-tat'>
					<div className='container'>
							<Row>
								<Col sm={24} md={8}>
									<a href="tel:021111144">
										<img src={img1}/>
									</a>
								</Col>
								<Col sm={24} md={8}>
									<a href="tel:022706400">
										<img src={img2}/>
									</a>
								</Col>
								
								<Col sm={24} md={8}>
									<a href="tel:1672">
										<img src={img3}/>
									</a>
								</Col>
							</Row>
					</div> 
					</div>
					<div class="box-ktc">
						<div class="container">
							<div class="row d-none d-sm-block">
								<div class="d-flex justify-content-around">
									<div class="p2"><a href="https://www.mof.go.th/th/home" target="_blank"><img src='https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/MOF.png'/></a></div>
									<div class="p2"><a href="http://www.fpo.go.th" target="_blank"><img src='https://www.ชิมช้อปใช้.com/img/brand-logo/FPO.png'/></a></div>
									<div class="p2"><a href="https://www.cgd.go.th" target="_blank"><img src='https://www.ชิมช้อปใช้.com/img/brand-logo/CGD.png'/></a></div>
									<div class="p2"><a href="https://www.newcb.ktb.co.th" target="_blank"><img src='https://www.ชิมช้อปใช้.com/img/brand-logo/Krungthai.png'/></a></div>
									<div class="p2"><a href="https://www.mots.go.th" target="_blank"><img src='https://www.ชิมช้อปใช้.com/img/brand-logo/MOTS.png'/></a></div>
									<div class="p2"><a href="https://thai.tourismthailand.org" target="_blank"><img src='https://www.ชิมช้อปใช้.com/img/brand-logo/TAT.png'/></a></div>
								</div>
							</div>
							<Row className="d-sm-none">
								<Col span={8} className="text-right"><a href="https://www.mof.go.th/th/home" target="_blank"><img src='https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/MOF.png'/></a></Col>
								<Col span={8} className="text-center"><a href="http://www.fpo.go.th" target="_blank"><img src='https://www.ชิมช้อปใช้.com/img/brand-logo/FPO.png'/></a></Col>
								<Col span={8} className="text-left"><a href="https://www.cgd.go.th" target="_blank"><img src='https://www.ชิมช้อปใช้.com/img/brand-logo/CGD.png'/></a></Col>
								<Col span={8} className="text-right"><a href="https://www.newcb.ktb.co.th" target="_blank"><img src='https://www.ชิมช้อปใช้.com/img/brand-logo/Krungthai.png'/></a></Col>
								<Col span={8} className="text-center"><a href="https://www.mots.go.th" target="_blank"><img src='https://www.ชิมช้อปใช้.com/img/brand-logo/MOTS.png'/></a></Col>
								<Col span={8} className="text-left"><a href="https://thai.tourismthailand.org" target="_blank"><img src='https://www.ชิมช้อปใช้.com/img/brand-logo/TAT.png'/></a></Col>
							</Row>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Advertise;