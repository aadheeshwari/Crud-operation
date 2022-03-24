import React, { useState, useEffect } from 'react';


const getLocalItems = () => {
    let list = localStorage.getItem("lists");
    console.log(list);
    if (list) {
        console.log(JSON.parse(localStorage.getItem("lists")));
        return JSON.parse(localStorage.getItem("lists"));
    } else {
        return [];
    }
};


export function Addemploye() {
    const [arr, setArr] = useState(getLocalItems());
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [submit, setSubmit] = useState(true);
    const [edit, setEdit] = useState(null);
   

    const [show,setShow] = useState(true)

    const getFirstname = (e) => {

        setFirstname(e.target.value);
    };
    const getLastname = (e) => {

        setLastname(e.target.value);
    };
    const getEmail = (e) => {
        setEmail(e.target.value);
    };
    const deleteit = (id) => {
        const filteredArray = arr.filter((ele) => ele.id != id);

        setArr([...filteredArray]);
    };

    const onChangeHandle= (e) => {
        console.log("e.target.value", e.target.value);
        if (e.target.value == '') {
            window.location.reload(true);
            const tempArr = arr;
            setArr(tempArr)
            return
        }
        const searchResult = arr.filter(item => item.firstname.toLowerCase().startsWith(e.target.value.toLowerCase()) || item.lastname.toLowerCase().startsWith(e.target.value.toLowerCase()) || item.email.toLowerCase().startsWith(e.target.value.toLowerCase()))
        setArr(searchResult);
    }


    const getEdit = (id) => {
        const newEdit = arr.find((ele) => {
            return ele.id === id;
        })
        console.log(newEdit);
        setSubmit(false);
        setFirstname(newEdit.firstname);
        console.log(newEdit.firstname);
        setLastname(newEdit.lastname);
        setEmail(newEdit.email)
        setEdit(id);
    };

    
    const arrCon = () => {
        if (!firstname || !lastname || !email) {
            alert("please enter all the details")
        } else if (firstname && !submit) {
            setArr(
                arr.map((ele) => {
                    if (ele.id === edit) {
                        console.log('success fully entered');
                        return { ...ele, firstname, lastname, email }
                    }
                    return ele;
                    console.log(ele,'its working');
                })
            );

            setSubmit(true);
            setFirstname('');
            setLastname('');
            setEmail('');
            setEdit(null);
        } else {
        const id = btoa(Math.random().toString()).substr(10, 5);
        setArr([...arr, { firstname, lastname, email, id }]);
        setFirstname('');
        setLastname('');
        setEmail('');
        
        }

    };

  
    
    useEffect(() => {
        
        localStorage.setItem("lists", JSON.stringify(arr));
    }, [arr]);

   


    return (
        <div >
           <br/>
     <br/>
            
            <div>
                <input type="text"  placeholder="Search" onChange={onChangeHandle} id='inp' />
                <button type="button" onClick={() => setShow(!show)}>Search</button>
                <br />
                
            </div>
          <div>
            {
                show ?<form id ='for' >
                    <div id="inputdata">
                      <br/>
                      <br/>
                      <br/>
                    <label >First_Name:</label>
                    <input placeholder="Enter your first name" onChange={getFirstname} value={firstname}/>
                <br />
                    <label>Last_Name:</label>
                    <input type="text" placeholder="Enter your Last name" onChange={getLastname} value={lastname} />
                <br />
                    <label >Email_Id:</label>
                    <input type="text" placeholder="Enter your email-id" onChange={getEmail} value={email} />
                      <br/>
                <br />
                {
                        submit ? <button type="button"  onClick={arrCon}>Add Details</button> :
                            <button type="button"  onClick={arrCon}>Edit it</button>
                }
                    </div>
                    </form>: null
            }
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
                <div id='tab'>
                <table id='nam'>
                   
                        <tr>
                           
                            <th style={{ border: "2px solid",width: "25%" }} id='col'>First Name</th>
                            <th style={{ border: "2px solid ",width: "25%" }}>Last Name</th>
                            <th style={{ border: "2px solid ",width: "25%" }}>Email-id</th>
                            <th style={{ border: "2px solid ",width: "25%" }} id='col'>Actions</th>
                        </tr>
                   
                    {arr.map((ele) => (
                   
                        <tr key={ele.id}>
                          
                            <td>{ele.firstname}</td>
                            <td>{ele.lastname}</td>
                            <td>{ele.email}</td>
                             <td>   
                               <button type="button"  onClick={() =>  getEdit(ele.id)}>Edit</button>
                                &nbsp;
                                <button type="button"  onClick={() => deleteit(ele.id)}>Delete</button>
                             </td>
                             </tr>
                      
                    ))}
  
                </table>
                    
                </div>
          <br/>
          <br/>
          <br/>
          
            </div>
            
    )
}

export default Addemploye