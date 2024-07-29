import './flippy.css';

export default function Flippy(props) {
  return (
    <div className="card-component">
      <div className="card">
        <div 
          className="card__side card__side--front-1" 
          style={{ backgroundImage: `url(${props.backimg})` }}
        >
          <div className="card__title card__title--1">
            <i className="fas fa-heart"></i>
            <h4 className="card__heading">{props.header}</h4>
          </div>
        </div>
        <div className="card__side card__side--back-1">
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">blah blah blah</p>
              <p className="card__price-value">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et tenetur ducimus hic, harum amet architecto recusandae sed a delectus quis, nulla pariatur dicta iste ratione consectetur, nam mollitia esse cupiditate.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
