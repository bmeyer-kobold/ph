import React from 'react';
import ProjectTextInput from '../components/ProjectTextInput';
import * as actions from '../constants/actionTypes';

class ProjectEdit extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const store = this.context.store;
        return (
            <div>
                <span>Name: </span>
                <ProjectTextInput 
                    value={this.props.name} 
                    onChange={(newName) => store.dispatch({type:actions.CHANGE_PROJECT_NAME, name:newName})} />
                <br />
                <span>Code: </span>
                <ProjectTextInput 
                    value={this.props.code} 
                    onChange={(newCode) => store.dispatch({type:actions.CHANGE_PROJECT_CODE, code:newCode})} />
            </div>
        );
    }
}

ProjectEdit.contextTypes = {
    store: React.PropTypes.object
};

ProjectEdit.propTypes = {
    name : React.PropTypes.string,
    code : React.PropTypes.string
};

export default ProjectEdit;