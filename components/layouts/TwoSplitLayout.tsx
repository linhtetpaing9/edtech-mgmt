import React from 'react';
import { Row, Col } from 'antd';

const TwoSplitLayout = props => {
  
  return (
    <Row gutter={16}>
      <Col span={4} style={{padding: 12}}>
        <div className="overflow-y-auto overflow-x-hidden bg-white p-12 min-h-screen">
          {
            props.left ? props.left : null
          }
        </div>
      </Col>
      <Col span={20} style={{padding: 12}}>
        <div className="overflow-y-auto overflow-x-hidden bg-white p-12 min-h-screen">
          {
            props.right ? props.right : null
          }
        </div>
      </Col>
    </Row>
  )
};

export default TwoSplitLayout;