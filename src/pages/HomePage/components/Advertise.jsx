import React, { PureComponent } from 'react';
import { Row, Col } from 'antd'

import Banner_KTB_SQ from '../../../images/Banner_KTB_SQ.png';
import Banner_CGD_Sq from '../../../images/Banner_CGD_Sq.png';
import Banner_TAT_Hotline_Sq from '../../../images/Banner_TAT_Hotline_Sq.png';
import MOF from '../../../images/MOF.png';
import FPO from '../../../images/FPO.png';
import CGD from '../../../images/CGD.png';
import Krungthai from '../../../images/Krungthai.png';
import MOTS from '../../../images/MOTS.png';
import TAT from '../../../images/TAT.png';

class Advertise extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<div className='box-tat'>
					<div className='container'>
							<Row>
								<Col sm={24} md={8}>
									<a href='tel:021111144'>
										<img src={Banner_KTB_SQ}/>
									</a>
								</Col>
								<Col sm={24} md={8}>
									<a href='tel:022706400'>
										<img src={Banner_CGD_Sq}/>
									</a>
								</Col>
								
								<Col sm={24} md={8}>
									<a href='tel:1672'>
										<img src={Banner_TAT_Hotline_Sq}/>
									</a>
								</Col>
							</Row>
					</div> 
				</div>
				<div className='box-ktc'>
					<div className='container'>
						<div className='row d-none d-sm-block'>
							<div className='d-flex justify-content-around'>
								<div className='p2'><a href='https://www.mof.go.th/th/home' target='_blank' rel='noopener noreferrer'><img src={MOF}/></a></div>
								<div className='p2'><a href='http://www.fpo.go.th' target='_blank' rel='noopener noreferrer'><img src={FPO}/></a></div>
								<div className='p2'><a href='https://www.cgd.go.th' target='_blank' rel='noopener noreferrer'><img src={CGD}/></a></div>
								<div className='p2'><a href='https://www.newcb.ktb.co.th' target='_blank' rel='noopener noreferrer'><img src={Krungthai}/></a></div>
								<div className='p2'><a href='https://www.mots.go.th' target='_blank' rel='noopener noreferrer'><img src={MOTS}/></a></div>
								<div className='p2'><a href='https://thai.tourismthailand.org' target='_blank' rel='noopener noreferrer'><img src={TAT}/></a></div>
							</div>
						</div>
						<Row className='d-sm-none'>
							<Col span={8} className='text-right'><a href='https://www.mof.go.th/th/home' target='_blank' rel='noopener noreferrer'><img src={MOF}/></a></Col>
							<Col span={8} className='text-center'><a href='http://www.fpo.go.th' target='_blank' rel='noopener noreferrer'><img src={FPO}/></a></Col>
							<Col span={8} className='text-left'><a href='https://www.cgd.go.th' target='_blank' rel='noopener noreferrer'><img src={CGD}/></a></Col>
							<Col span={8} className='text-right'><a href='https://www.newcb.ktb.co.th' target='_blank' rel='noopener noreferrer'><img src={Krungthai}/></a></Col>
							<Col span={8} className='text-center'><a href='https://www.mots.go.th' target='_blank' rel='noopener noreferrer'><img src={MOTS}/></a></Col>
							<Col span={8} className='text-left'><a href='https://thai.tourismthailand.org' target='_blank' rel='noopener noreferrer'><img src={TAT}/></a></Col>
						</Row>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Advertise;