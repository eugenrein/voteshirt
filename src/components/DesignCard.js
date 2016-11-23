import React, { Component, PropTypes } from 'react';
import {Card, CardTitle, CardMedia } from 'material-ui/Card';

class DesignCard extends Component {
  render() {
    const { title, imageUrl } = this.props;
    return (
      <Card className="design-card">
        <CardMedia>
          <img src={imageUrl} />
        </CardMedia>
        <CardTitle title={title} />
      </Card>
    );
  }
}

DesignCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default DesignCard;