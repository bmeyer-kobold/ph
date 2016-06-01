import React, {PropTypes} from 'react';

class ProjectTextInput extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <input
                className="small"
                type="text"
                value={this.props.value}
                onChange={(e) => this.props.onChange(e.target.value)}/>
        );
    }
}

ProjectTextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default ProjectTextInput;