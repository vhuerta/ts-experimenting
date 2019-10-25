import faker from 'faker';

import {Mappable} from './CustomMap';

export default class User implements Mappable {
  name:string;
  color: string;
  location: {
    lat: number,
    lng: number
  }

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    }
    this.color = faker.internet.color();
  }

  markerContent(): string {
    return `
      <div>
        <h5>User named: ${this.name}</h5>
      </div>
    `;
  }
}