
export default class BaseService {
    constructor(entityName) {
        this.baseUrl = "http://localhost:62110/api";
        this.entityName = entityName;
        this.url = `${this.baseUrl}/${this.entityName}`;
    }
    
    getById(id) {
        return fetch(`${this.url}/${id}`);
    }
}