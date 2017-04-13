import React from 'react';
import {Row, Col} from 'react-bootstrap';
import SimpleTextRender from './SimpleTextRender';

class FavoritesPage extends React.Component {

  render() {
    return (
      <Row>
        <Col md={12}>
          <p>This is favorites page</p>
        </Col>
        <SimpleTextRender customText1="Hello guys!" customText2="How are you!?"/>
      </Row>
    )
  }
}

export default FavoritesPage;
