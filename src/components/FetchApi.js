import React, { useState, useEffect } from "react";

const FetchApi = () => {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({});


  //Get Method
  const apiGet = async() => {
    await fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  };

  //Post Method
  const apiPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: inputs.title,
    body: inputs.body,
    userId: parseInt(inputs.userId),
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  };


  const handleChange = (event) => {
    event.persist();
    setInputs((input) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    apiPost();

    console.log(inputs);
  };

  // useEffect(() => {
  //   apiGet();
  // }, [])

  return (
    <div>
      FetchApi
      <br />
      <button onClick={apiGet}>Fetch API</button>
      <br />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div>
        {data.map((item) => (
          <li key={item.id}>
            {item.userId},{item.title}
          </li>
        ))}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
          />
          <input
            type="text"
            name="body"
            placeholder="body"
            onChange={handleChange}
          />
          <input
            type="number"
            name="userId"
            placeholder="userId"
            onChange={handleChange}
          />{" "}
          <br />
          <input type="submit" value="Submit" onChange={handleChange} />
        </form>
      </div>
    </div>
  );
};

export default FetchApi;
