import faker from "faker";

import {Mappable} from './CustomMap';

export default class Company implements Mappable {
  name: string;
  catchPhrase: string;
  color: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    };
    this.color = faker.internet.color();
  }

  markerContent(): string {
    return `
      <div>
        <h5>Company named: ${this.name}</h5>
        <p>${this.catchPhrase}</p>
      </div>
    `;
  }
}
