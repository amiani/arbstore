import React from 'react';
import './billingshippingform.scss';

const AddressInputs = props => (
  <div>
    <label>Name:
      <input type="text" value={props.name} onChange={ev=> props.handleChange(name, ev.target.value)} />
    </label>
    <label>Address Line 1:
      <input type="text" value={props.address1} onChange={ev=> props.handleChange({ address1: ev.target.value })} />
    </label>
    <label>Address Line 2:
      <input type="text" value={props.address2} onChange={ev=> props.handleChange({ address2: ev.target.value })} />
    </label>
    <label>City:
      <input type="text" value={props.city} onChange={ev=> props.handleChange({ city: ev.target.value })} />
    </label>
    <label>State/Province:
      <input type="text" value={props.province} onChange={ev=> props.handleChange({ province: ev.target.value })} />
    </label>
    <label>Zip/Postal Code:
      <input type="text" value={props.code} onChange={ev=> props.handleChange({ code: ev.target.value })} />
    </label>
    <label>Country:
      <input type="text" value={props.country} onChange={ev=> props.handleChange({ country: ev.target.value })} />
    </label>
  </div>
);

class BillingShippingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      number: '',
      cvc: '',
      date: '',
      shippingaddress: {},
      billingaddress: {},

      showshipping: false
    };
  }

  handleSubmit(event) {
    console.log('billing info submitted');
  }

  handleAddressChange(addresstype, property, value) {
    if (addresstype === 'shippingaddress' || addresstype === 'billingaddress') {
      this.setState((prevState, props) => {
        const address = JSON.parse(JSON.stringify(prevState[addresstype]));
        address[property] = value;
        return { [addresstype]: address };
      });
    } else {
      console.log('Got invalid address type: ', addresstype);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <AddressInputs handleChange={(property, value) => this.handleAddressChange('billingaddress', property, value)} />
        <label>Card Provider:
          {/*dropdown with card types*/}
        </label>
        <label>Card Number:
          <input type="text" value={this.state.number} onChange={ev=> this.setState({ number: ev.target.value })} />
        </label>
        <label>Security Code:
          <input type="text" value={this.state.cvc} onChange={ev=> this.setState({ cvc: ev.target.value })} />
        </label>
        <label>Expiry Month/Year (MM/YYYY):
          <input type="text" value={this.state.date} onChange={ev=> this.setState({ date: ev.target.value })} />
        </label>
        {
          this.state.showshipping
          ? <AddressInputs handleChange={(property, value) => this.handleAddressChange('shippingaddress', property, value)}/>
          : <a className='showshippingbutton' href='#0' onClick={() => this.setState({ showshipping: true })}>Different shipping address?</a>
        }
      </form>
    );
  }
}
export default BillingShippingForm;
