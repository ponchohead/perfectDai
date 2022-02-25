import { customerList } from '../../data/customerList'

export const getCustomerById = (customerId = '') => {


    
  return customerList.find(customer => customer.customerId === Number(customerId) );

  
}
