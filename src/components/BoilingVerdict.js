export default function BoilingVerdict({ celcius = 0 }) {
  if (celcius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>Water would not boil.</p>;
}
