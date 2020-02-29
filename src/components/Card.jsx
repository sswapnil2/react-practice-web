import React, { useState } from 'react'

export default function Card(props) {

  // const [state, setstate] = useState({
  //   title: "Hello",
  //   description: "Hello Image",
  //   image: "https://picsum.photos/536/354"
  // })


    return (
        <div className="col-md-3">
          <div className="card" style={{width: '18rem'}}>
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href="dsfd" className="btn btn-primary">click me</a>
          </div>
        </div>
        </div>

    )
}
