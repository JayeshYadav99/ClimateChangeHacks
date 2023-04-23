import React from 'react'
import { useState } from 'react';

export default function Cart(
    {
        numTrees,
        treeName,
        occasion
    }
) {
   
    const[trees,settrees]=useState(numTrees);
    const [treePrice, setTreePrice] = useState(20);
    const [editingDetails, setEditingDetails] = useState(false);
    const [certificate, setCertificate] = useState("");
    const [certificateType, setCertificateType] = useState("");
    const [Checkout, setCheckout] = useState("");
  
    const handleNumTreesChange = (event) => {
settrees(event.target.value);


   
    };
  
    const handleCertificateChange = (event) => {
      setCertificate(event.target.value);
    };
  
    const handleCertificateTypeChange = (event) => {
      setCertificateType(event.target.value);
    };
  
    const handleEditDetailsClick = () => {
      setEditingDetails(true);
    };
  
    const handleCancelEditDetailsClick = () => {
      setEditingDetails(false);
    };
  
    const handleSaveDetailsClick = () => {
      setEditingDetails(false);
      // Save details code goes here
    };
    const handleCheckout = () => {
        setCheckout(false);
        // Save details code goes here
      };
      console.log(trees);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg px-4 py-5 sm:p-6">
          <h2 className="text-xl font-bold mb-4">
         
            Cart ({trees} {trees === 1 ? "tree" : "trees"})
          </h2>
          <div className="mb-4">
            <button
              onClick={handleEditDetailsClick}
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Edit Details
            </button>
          </div>
          {editingDetails && (
            <div className="mb-4">
              <label
                htmlFor="numTrees"
                className="block font-medium text-gray-700 mb-2"
              >
                Number of Trees
              </label>
              <input
                type="number"
                id="numTrees"
                name="numTrees"
                value={trees}
                onChange={handleNumTreesChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          )}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Order Summary</h3>
            <p className="text-gray-700">
              {trees} {trees === 1 ? "Tree" : "Trees"} x ${treePrice} each
            </p>
            <p className="text-gray-700">
              Total: ${trees * treePrice}
            </p>
          </div>
          < div className="mb-4">
            <label
              htmlFor="certificate"
              className="block font-medium text-gray-700 mb-2"
            >
              Select Certificate
            </label>
            <select
  id="certificate"
  name="certificate"
  value={certificate}
  onChange={(e) => setCertificate(e.target.value)}
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
>
<option value="">Select Certificate Type</option>
  <option value="regular">
    Regular Certificate
    <img src="regular_certificate.jpg" alt="Regular Certificate" className="w-16 inline-block ml-2" />
  </option>
  <option value="premium">
    Premium Certificate
    <img src="premium_certificate.jpg" alt="Premium Certificate" className="w-16 inline-block ml-2" />
  </option>
  <option value="sample1">
    Sample Certificate 1
    <img src="sample1_certificate.jpg" alt="Sample Certificate 1" className="w-16 inline-block ml-2" />
  </option>
  <option value="sample2">
    Sample Certificate 2
    <img src="sample2_certificate.jpg" alt="Sample Certificate 2" className="w-16 inline-block ml-2" />
  </option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414L11.414 10l2.293 2.293a1 1 0 0 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 0-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  
    <div className="flex justify-end">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button
  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline absolute bottom-0 right-0 m-4"
  onClick={handleCheckout}
>
  Checkout
</button>
</div>
</div>
</div>
</div>
</div>

  )
}