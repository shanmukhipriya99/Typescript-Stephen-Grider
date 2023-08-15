const profile = {
  name: 'Alex',
  age: 20,
  coords: {
    lat: 3,
    lng: 5,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;

const { lat, lng }: { lat: number; lng: number } = profile.coords;

