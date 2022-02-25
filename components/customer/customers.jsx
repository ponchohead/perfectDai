import React from "react";

import { useMemo } from "react";
import { useForm } from "../../hooks/useForm";
import { getCustomerByName } from "../../services/selectors/getCustomerByName";
import { CustomerTable } from "./customerTable";
import DataTable from "./customerTable copy";




export const Customer = () => {



  const [formValues, handleInputChange] = useForm({
    searchText: '',
  });

  const {searchText} = formValues;
  const costumersFilterd = useMemo(() => getCustomerByName(searchText), [searchText]) ;

  return (
    <div>
        <h1> Customer </h1>
        <hr/>
        <br/> 

        <div className="input-group input-group-sm row row-cols-lg-auto justify-content-end " >
             
             <span className="input-group-text">Buscar</span>
             <input
                  type='text'
                  placeholder="Nombre" 
                  className="p-1 border"
                  name="searchText"
                  autoComplete="off"
                  value={searchText}
                  onChange={handleInputChange}
              />

        </div>
        <hr/>

        <DataTable customers = {costumersFilterd}/>
      {/* <table className="table text-center table-hover">
            <thead className="table-dark ">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">LastName</th>
                <th scope="col">Mobile</th>
                <th scope="col">Email</th>

            </tr>
            </thead>
            
            <tbody>
           

                {
                  costumersFilterd.map(client => (
                    <CustomerTable
                      key={client.id}
                        {...client}
                    />
                  ))
                }
            

            </tbody>

            

      </table> */}

      
      
    </div>
    

  )
}
