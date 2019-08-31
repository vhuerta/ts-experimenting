const profile = {
  name: "Victor",
  age: 30,
  cords: {
    lat: 0,
    lng: 0
  },
  setAge(age: number) {
    this.age = age;
  }
};

const { age }: { age: number, name: string } = profile;
const { cords: { lat, lng } }: { cords: { lat: number; lng: number } } = profile;