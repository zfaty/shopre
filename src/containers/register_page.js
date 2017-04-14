import React, { Component, PropTypes} from 'react';
import { Button } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import { registrationAsync } from '../actions/accountActions';

const form_fields = {
  username: {
    validate:{message:'Enter a username..'},
    type : 'text',
    label : 'Username'
  },
  email: {
    validate:{message:'Enter an Email..'},
    type : 'email',
    label : 'Email'
  },
  password: {
    validate:{message:'Enter a password...'},
    type : 'password',
    label : 'Password'
  },
  first_name: {
    validate:{message:'Enter a First Name..'},
    type : 'text',
    label : 'First Name'
  },
  last_name: {
    validate:{message:'Enter a Last Name..'},
    type : 'text',
    label : 'Last Name'
  },
  country: {
    validate:{message:'Enter a Counrty..'},
    type : 'text',
    label : 'Counrty'
  },
  city: {
    validate:{message:'Enter a City..'},
    type : 'text',
    label : 'City'
  },
  zip: {
    validate:{message:'Enter a Zip Code..'},
    type : 'text',
    label : 'Zip Code'
  },
  address: {
    validate:{message:'Enter an Address..'},
    type : 'text',
    label : 'Address'
  }
};

class Register extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = { data: {username: '', email: '',password:''} };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    const field = event.target.name;
    const data = this.state.data;
    data[field] = event.target.value;
    return this.setState({data: data});
  }

  onFormSubmit(props) {
    // this.props.RegistrationAsync(props);
    console.log('Submit',props);
    this.props.registrationAsync(props)
      .then(() => {
        this.context.router.push('/login');
      });
  }

  renderFields(fields){
    return Object.keys(fields).map((field) => {
      return (
        <div className={`form-group ${fields[field].touched && fields[field].invalid ? 'has-danger' : ''} `} key={field}>
            <label htmlFor="name">{form_fields[field].label}</label>
            <input type={form_fields[field].type} className="form-control" id="username" {...fields[field]} />
            <div className="text-help">
              {fields[field].touched ? fields[field].error : ''}
            </div>
        </div>
      );
    });
  }

  render() {
    const { fields, handleSubmit } = this.props;
    return (
      <div className="col-md-12">
          <div className="box">
              <h1>New account</h1>
              <p className="lead">Not our registered customer yet?</p>
              <hr/>

              <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}  >
                  {this.renderFields(fields)}
                  <div className="text-center">
                      <button type="submit" className="btn btn-primary">
                        <i className="fa fa-user-md"></i> Register
                      </button>
                  </div>
              </form>
          </div>
      </div>
    );
  }
}

function validate(values){
  const errors = {};
  if(!values.username){
    errors.username = form_fields['username'].validate.message;
  }else if (!/^[A-Z0-9_-]+$/i.test(values.username)) {
    errors.username = 'Invalid username'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if(!values.password){
    errors.password = form_fields['password'].validate.message;
  }
  return errors;
}



export default reduxForm({
  form: 'register',
  fields: ['username', 'email', 'password','first_name','last_name','country','city','zip','address'],
  validate
},null,{registrationAsync})(Register);
