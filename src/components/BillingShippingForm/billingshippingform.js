import React from 'react';
import './billingshippingform.scss';

class BillingShippingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  handleSubmit(event) {
    console.log('billing info submitted');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Name:
          <input type="text" value={this.state.name} onChange={()=> this.setState({ name: event.target.value })} />
        </label>
      </form>
    );
  }
}
export default BillingShippingForm;
