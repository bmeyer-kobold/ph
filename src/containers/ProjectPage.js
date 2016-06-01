import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProjectDisplay from '../components/ProjectDisplay';
import ProjectEdit from '../components/ProjectEdit';
import * as actionCreators from '../actions/crudActionCreators';

class ProjectPage extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { fetchProject } = this.props.actions;
        
        return (
            <div>
                <div>
                    <ProjectDisplay name={this.props.project.name} code={this.props.project.code} />
                </div>
                <div>
                    <ProjectEdit name={this.props.project.name} code={this.props.project.code} />
                </div>
                <input
                    type="button"
                    onClick={() => fetchProject(1)}
                    value="load" />
            </div>
        );
    }
}
/*ProjectPage.contextTypes = {
    store: React.PropTypes.object
};*/
ProjectPage.propTypes = {
    project : React.PropTypes.object.isRequired,
    actions : React.PropTypes.object.isRequired
};


function mapStateToProps(state) {
  return {
    project: state.project
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectPage);