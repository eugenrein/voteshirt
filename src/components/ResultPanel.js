import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { white, black } from 'material-ui/styles/colors';


class ResultPanel extends Component {
  
  createTitleElementIfNeeded() {
    const { title } = this.props;
    if (title !== null) {
      return (
        <div className="result-panel-title">
          {title}
        </div>
      );
    }

    return '';
  }

  render() {
    const style = {
      backgroundColor: this.props.backgroundColor,
      color: this.props.color
    };

    const titleElement = this.createTitleElementIfNeeded();

    return (
      <Paper style={style} zDepth={1} className="result-panel">
        { titleElement }
        <div className="result-panel-content">
          { this.props.children }
        </div>
      </Paper>
    );
  }
}

ResultPanel.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.node
};

ResultPanel.defaultProps = {
  backgroundColor: white,
  color: black,
  title: null
};

export default ResultPanel;
