import * as types from '../constants/actionTypes';
import ProjectService from '../Services/projectService';

export function changeProjectName(projectName) {
  return {
    type: types.CHANGE_PROJECT_NAME,
    name: projectName
  };
}

export function changeProjectCode(projectCode) { 
  return {
    type: types.CHANGE_PROJECT_CODE,
    code: projectCode
  };
}

function fetchingData(id) { 
  return {
    type: types.FETCHING_DATA,
    id: id
  };
}

function fetchData(id,project) {
 return {
    type: types.FETCH_DATA,
    project: project
  };
}

export function fetchProject(id) {
  return dispatch => {
    dispatch(fetchingData(id));
    return new ProjectService().getById(1)
      .then(response => response.json())
      .then(json => dispatch(fetchData(id, json)));
  };
}