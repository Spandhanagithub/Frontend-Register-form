import React, { useState } from 'react';
import './form.css';
import image1 from './image/image1.jpg';
import PackageDetails from './PackageDetails';
import CaptchaComponent from './CaptchaComponent';
import PayPal from './PayPal';



const Form = () => {
  const [region, setRegion] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [premisesType, setPremisesType] = useState('');
  const [distanceFromCenter, setDistanceFromCenter] = useState('');
  const [contact, setContact] = useState('');
  const [houseNo, setHouseNo] = useState('');
  const [streetName, setStreetName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [countries, setCountries] = useState([]); // Define the countries array

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integration with PayPal and email sending logic goes here
    console.log('Form submitted');
  };

  const updateCountryOptions = (selectedRegion) => {
    let countriesData = [];

    switch (selectedRegion) {
      case 'ASIA':
        countriesData = ['India', 'China', 'Japan', 'South Korea',"Thailand","Singapore","Hong Kong",]; 
        break;
      case 'EUROPE':
        countriesData = ["United Kingdom", "Germany", "France", "Italy", "Netherlands", "Ireland", "Switzerland", "Poland", "Belgium", "Portugal", "Spain", "Slovakia", "Greece", "Austria", "Hungary", "Czech Republic", "Serbia", "Denmark", "Sweden", "Norway", "Lithuania", "Romania"]; 
        break;
      case 'NORTH AMERICA':
        countriesData = ['United States', 'Canada', 'Mexico']; 
        break;
      default:
        countriesData = [];
    }

    setCountries(countriesData);
    setCountry(''); 
  };

  const handleRegionChange = (e) => {
    const selectedRegion = e.target.value;
    setRegion(selectedRegion);
    updateCountryOptions(selectedRegion);
  };

  return (
    <form onSubmit={handleSubmit}>
       <div>
<img src={image1} alt="image1" className="my-image" />
 </div>
      <div className='container'>
        <label>Select Region:</label>
        <div className='Region'>
        <select value={region} onChange={handleRegionChange} required>
          <option value="">Select Region</option>
          <option value="ASIA">ASIA</option>
          <option value="EUROPE">EUROPE</option>
          <option value="NORTH AMERICA">NORTH AMERICA</option>
        </select>
      </div>
      
        <label>Select Country:</label>
        <div className='Country' >
        <select value={country} onChange={(e) => setCountry(e.target.value)} required>
          <option value="">Select Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      
        <label>Set Your Password:</label>
        <div className='Password'>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
    
        <label>Email ID:</label>
        <div className='Email'>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
   
        <label>First Name:</label>
        <div className='First'>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      
        <label>Middle Name:</label>
        <div className='Middle'>
        <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
      </div>
      
        <label>Last Name:</label>
        <div className='Last'>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div> 
      <label>Premises Type:</label>
      <div className='Premises'>
      <label>
        <input 
          type="radio" 
          name="premisesType" 
          value="Apartment" 
          checked={premisesType === 'Apartment'} 
          onChange={() => setPremisesType('Apartment')} 
        />
        Apartment
      </label>
      <label>
        <input 
          type="radio" 
          name="premisesType" 
          value="House/Villa" 
          checked={premisesType === 'House/Villa'} 
          onChange={() => setPremisesType('House/Villa')} 
        />
        House/Villa
      </label>
      <label>
        <input 
          type="radio" 
          name="premisesType" 
          value="Farm House" 
          checked={premisesType === 'Farm House'} 
          onChange={() => setPremisesType('Farm House')} 
        />
        Farm House
      </label>
</div>


    
        <label>Distance from Center Within:</label>
        <div className='Distance'>
        <label>
          <input 
            type="radio" 
            name="distance" 
            value="5km" 
            checked={distanceFromCenter === '5km'} 
            onChange={() => setDistanceFromCenter('5km')} 
          />
          5km
        </label>

        <label>
          <input 
            type="radio" 
            name="distance" 
            value="10km" 
            checked={distanceFromCenter === '10km'} 
            onChange={() => setDistanceFromCenter('10km')} 
          />
          10km
        </label>

        <label>
          <input 
            type="radio" 
            name="distance" 
            value="20km" 
            checked={distanceFromCenter === '20km'} 
            onChange={() => setDistanceFromCenter('20km')} 
          />
          20km
        </label>

        <label>
          <input 
            type="radio" 
            name="distance" 
            value="Above 20km" 
            checked={distanceFromCenter === 'Above 20km'} 
            onChange={() => setDistanceFromCenter('Above 20km')} 
          />
          Above 20km
        </label>

      </div>
     
        <label>Contact:</label>
        <div className='Contact'>
        <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
      </div>
     
        <label>Address:</label>
        <div className='Address'>
        <input type="text" placeholder="House No" value={houseNo} onChange={(e) => setHouseNo(e.target.value)} />
        <input type="text" placeholder="Street Name" value={streetName} onChange={(e) => setStreetName(e.target.value)} />
        <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
        <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
        <input type="text" placeholder="Pin Code" value={pinCode} onChange={(e) => setPinCode(e.target.value)} />
      </div>
    
        <label>Referral Code:</label>
        <div className='Referral'>
        <input type="text" value={referralCode} onChange={(e) => setReferralCode(e.target.value)} />
      </div>{/* Other form fields */}
      <PackageDetails country={country} />
      <CaptchaComponent />
      <PayPal />
      </div>
     
    </form>
  );
};

export default Form;
