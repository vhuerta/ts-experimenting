const carMakers = ['honda', 'toyota', 'mazda'];

const cars: string[][] = [];

cars[0] = ['civic', 'corolla', '3'];
// cars[1] = [1, 2, 3]; <== Error

carMakers.forEach((carMaker): string => {
  return carMaker;
});

const importantDates: (Date | string)[] = [new Date(), '1929-01-01'];
importantDates.push(new Date());
importantDates.push('1929-01-01');
