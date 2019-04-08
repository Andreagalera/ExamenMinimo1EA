import { Bike } from './bike';

export class Station {
    constructor(_id = '', name = '', description= '', bike = null) {
        this._id= _id;
        this.name=name;
        this.bike=bike;
        this.description=description;

    }
    _id: string;
    name: string;
    description: string;
    bike: Bike[];
    
}
