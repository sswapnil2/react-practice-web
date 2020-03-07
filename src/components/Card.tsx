import React, { useState } from 'react'

export interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
  onClick?: (id: number) => void
}


export default function Card(props: CardData) {

  // const [state, setstate] = useState({
  //   title: "Hello",
  //   description: "Hello Image",
  //   image: "https://picsum.photos/536/354"
  // })

  const onClick = () => {
    // alert(props.title);
    if (props.onClick){
      props.onClick(props.id);
    }
  }

  // console.log(props);

    return (
        <div className="col-md-3">
          <div className="card" style={{width: '18rem'}}>
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <button className="btn btn-primary" onClick={onClick} >click me</button>
          </div>
        </div>
        </div>

    )
}
