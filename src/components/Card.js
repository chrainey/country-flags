const Card = ({ name, flags }) => {
  const nativeName = name.nativeName ? name.nativeName[Object.keys(name.nativeName)[0]].common : name.common
  return (
    <div className="col-6 col-md-4 mb-4">
      <div className="card text-center">
        <div className="card-header">
          <h4>{name.common}</h4>
        </div>
        <div className="card-image">
          <img className="w-100" src={flags[0]} alt={name.common} />
        </div>
        <div className="card-text">
          <h6>{nativeName}</h6>
        </div>
      </div>
    </div>
  )
}

export default Card