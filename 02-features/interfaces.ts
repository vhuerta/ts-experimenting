type Reportable = {
  summary(): string
}

function logSummary(item: Reportable): void {
  console.log(item.summary())
}

const car = {
  name: 'civic',
  color: 'blue',
  summary() {
    return `${this.name}`;
  }
}

logSummary(car);