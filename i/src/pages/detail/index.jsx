import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../components/card/card'
import { Helmet } from 'react-helmet-async'



function Detail() {
    const {id} = useParams()


    const [products, setproducts] = useState([])
    useEffect(() => {

        fetch("https://fakestoreapi.com/products/"+id)
            .then(res => res.json())
            .then(data => setproducts(data)
            )
    }, [])
    return (
    <>
        <Helmet><title>Detail </title></Helmet>
    <Card title={products.title} desc={products.description} price={products.price}></Card>
</>
  )
}

export default Detail