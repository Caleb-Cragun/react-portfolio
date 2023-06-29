function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = 'NO SEATS'
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE'
  }
  return (
    <>
      <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img className="card--image" src={`/images/${props.image}`} />
        <div className="card--stats">
          <img className='card--star' src="/images/star.png"/>
          <span>{props.rating}</span>
          <span className="gray">({props.reviewCount}) • {props.location}</span>
        </div>
        <p>{props.title}</p>
        <p><span className="bold">From ${props.cost}</span> / person</p>
      </div>
    </>
  )
}

export default Card