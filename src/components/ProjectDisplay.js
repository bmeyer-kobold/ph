import React from 'react';

class ProjectDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <span>Name: </span><span>{this.props.name}</span><br />
                <span>Code: </span><span>{this.props.code}</span>
            </div>
        );
    }
}

ProjectDisplay.propTypes = {
    name : React.PropTypes.string,
    code : React.PropTypes.string
};

export default ProjectDisplay;