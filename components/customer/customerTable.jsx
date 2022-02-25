

export const CustomerTable = ({
    customerId,
    id,
    name,
    lastName,
    mobile,
    email,
    birthday,
    marketingMedium,
    ocupation,
    gender

}) => {
  return (
    <>
        
            
            <tr>
                <td scope="row">{`${id + 1}`}</td>
                <td><a href={`/customer/${customerId}`}>{name}</a></td>
                <td>{lastName}</td>
                <td>{mobile}</td>
                <td>{email}</td>
            </tr>
            
        
      
    </>
  )
}
