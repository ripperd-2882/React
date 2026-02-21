import styles from "./CountryItem.module.css";

const flagCodeToPNG = (countryCode) => {
  if (!countryCode) return null;

  return (
    <img
      src={`https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`}
      alt="flag"
    />
  );
};

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{flagCodeToPNG(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
