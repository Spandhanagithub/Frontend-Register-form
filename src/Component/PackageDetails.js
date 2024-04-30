import React from 'react';
import styles from './PackageDetails.module.css';

const PackageDetails = ({ country }) => {
  const currencyConversions = {
    "India": "Indian Rupee",
    "Australia": "Australian Dollar",
    "New Zealand": "New Zealand Dollar",
    "UAE": "UAE Dirham",
    "Thailand": "Thai Baht 17500",
    "Singapore": "Singapore Dollar 1099",
    "Hong Kong": "Hong Kong Dollar 6900",
    "United Kingdom": "British Pound 900",
    "Germany": "Euro 950",
    "France": "Euro 950",
    "Italy": "Euro 950",
    "Netherlands": "Euro 950",
    "Ireland": "Euro 950",
    "Switzerland": "Swiss Franc",
    "Poland": "Polish Zloty",
    "Belgium": "Euro 950",
    "Portugal": "Euro 950",
    "Spain": "Euro 950",
    "Slovakia": "Euro 950",
    "Greece": "Euro 950",
    "Austria": "Euro 950",
    "Hungary": "Hungarian Forint",
    "Czech Republic": "Czech Koruna",
    "Serbia": "Serbian Dinar",
    "Denmark": "Danish Krone",
    "Sweden": "Swedish Krona",
    "Norway": "Norwegian Krone",
    "Lithuania": "Euro 950",
    "Romania": "Romanian Leu",
    "United States": "US Dollar 1350",
    "Canada": "Canadian Dollar 1200",
  };

  const selectedCurrency = currencyConversions[country];

  return (
    <div className={styles.packageDetails}>
      <label className={styles.labelService}>Services in Package:</label><br/>
      
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.columnHeader}>Type of Services</th>
            <th className={styles.columnHeader}>Number of Visits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.service}>Electrical & Electronics Maintenance</td>
            <td className={styles.visit}>18</td>
          </tr>
          <tr>
            <td className={styles.service}>Plumbing Maintenance</td>
            <td className={styles.visit}>10</td>
          </tr>
          <tr>
            <td className={styles.service}>Computer System Maintenance (Hardware & Software)</td>
            <td className={styles.visit}>8</td>
          </tr>
          <tr>
            <td className={styles.service}>Carpenter Services</td>
            <td className={styles.visit}>6</td>
          </tr>
          <tr>
            <td className={styles.service}>Housekeeping Services (Cleaning Solutions)</td>
            <td className={styles.visit}>4</td>
          </tr>
          <tr>
            <td className={styles.service}>F.M.O Review</td>
            <td className={styles.visit}>Half Yearly Site Audit</td>
          </tr>
          <tr>
            <td className={styles.service}>Yearly Fee</td>
            <td className={styles.visit}>{selectedCurrency}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PackageDetails;
