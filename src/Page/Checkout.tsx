import "./Checkout.css"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Checkout = () => {
  return (
    <div className="checkoutcontainer">
      <div className="heading">
        <h1>Check Out</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, magni
          assumenda ullam cupiditate perspiciatis, praesentium laboriosam, aut
          repudiandae aliquam delectus impedit rem. Atque ducimus repellat
          obcaecati alias velit perferendis explicabo.
        </p>
      </div>
      <div className="maincontainer">
        <div className="billing">
          <h1>Billing Adress</h1>
          <label> Full Name</label>
          <br />
          <input type="text" name="firstname" placeholder="John M. Doe"></input>
          <br />
          <label> Username </label>
          <br />
          <input type="Username" name="Username" placeholder="Lnwza007"></input>
          <br />
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Lnwza007@hotmail.com"
          ></input>
          <br />
          <label>Adress</label>
          <br />
          <input type="text" name="adress" placeholder="123 "></input>
          <br />
          <label>Adress2</label>
          <br />
          <input type="text" name="adress" placeholder="123 "></input>
          <br />
          <label>Country</label>
           <select name="Country">
            <option value="Thailand">Thailand</option>
            <option value="China">China</option>
            <option value="Japan">Japan</option>
            <option value="USA">USA</option>
          </select>

          <label>State</label>
          <select name="Country">
            <option value="Thailand">Thailand</option>
            <option value="China">China</option>
            <option value="Japan">Japan</option>
            <option value="USA">USA</option>
          </select>
          <br /><br />
          <label>ZIP</label>
          <input className="zip" type="text" name="zip" placeholder="123 "></input>
        </div>
        <div className="yourcart">
            <h1>Your Cart</h1>
            <p>Productname&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50THB</p>
            <p>Productname&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50THB</p>
            <p>Productname&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50THB</p>
            <p>Productname&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50THB</p>
            <p>Productname&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50THB</p>
            <p>Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;250THB</p>
        </div>
      </div>
      <div className="shigoption">
      <FormControlLabel control={<Checkbox defaultChecked />} label="Shipping adress is same as my billing adress" />
      <br />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Save my infomation for next time" />
      </div>
      <div className="payment">
        <h1>Payment</h1>
        <input type="radio" /> Debid Cardb <br />
        <input type="radio" /> Credit Card <br />
        <input type="radio" /> Paypal
      </div>
    </div>
  );
};

export default Checkout;
