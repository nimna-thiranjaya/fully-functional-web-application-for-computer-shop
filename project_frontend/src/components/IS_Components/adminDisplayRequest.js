import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSingleRequest from "./adminSingleRequest"

const DisplayProductRequest = () => {
  const [productRequests, setProductRequests] = useState([])
  const [filteredProductRequests,setFilteredProductRequests] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchRequest = async () => {
      await axios.get('http://localhost:8070/requests/all')
      .then((res) => {
        setProductRequests(res.data.requests)
      })
      .catch((err) => {
        alert(err.message)
      })
    }
    fetchRequest()
  },[])

  useEffect(() => {
    setFilteredProductRequests(
      productRequests.filter((requests) => requests.itemname.toLowerCase().includes(search.toLowerCase()))
    )
  }, [search, productRequests])

  return (
    <div>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search Requests By Item Name" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e) => setSearch(e.target.value)}/>
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon2">Search</span>
        </div>
      </div>
        <br/>
      {filteredProductRequests.map((item) => (
        <AdminSingleRequest
          itemname={item.itemname}
          userName={item.userName}
          userEmail={item.userEmail}
          brand={item.brand}
          userImage={item.profileImage}
          model={item.model}
          version={item.version}
        />
      ))}
    </div>
  )
}

export default DisplayProductRequest