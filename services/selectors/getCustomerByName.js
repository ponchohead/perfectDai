import { customerList } from '../../data/customerList'

export const getCustomerByName = (name = '') => {

    if(name.length === 0){
        return customerList;
    }

    name = name.toLowerCase();
  return customerList.filter(customer => customer.name.toLowerCase().includes(name));
}
