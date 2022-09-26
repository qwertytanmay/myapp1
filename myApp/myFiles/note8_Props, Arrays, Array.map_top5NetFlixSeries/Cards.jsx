import './index.css';

const Cards = (propss) =>{
    console.log(propss);
return (
  <>
    <div className="movie_card" id="movie_card">
      <div className="info_section">
        <div className="movie_header">
          <img
            className="locandina"
            src={propss.imgsrc} alt="myPic"
          />
          <h1>{propss.sname}</h1>
          <h4>{propss.yearActor}</h4>
          <span className="minutes">{propss.duration}</span>
          <p className="type">{propss.typeGenre}</p>
        </div>
        <div className="movie_desc">
          <p className="text">
            {propss.description}
          </p><br />
          <a href={propss.link} target="_blank">
            <button className="button">Watch Now</button></a>
        </div>
        <div className="movie_social">
          <ul>
            <li>
              <i className="material-icons">share</i>
            </li>
            <li>
              <i className="material-icons"></i>
            </li>
            <li>
              <i className="material-icons">chat_bubble</i>
            </li>
          </ul>
        </div>
      </div>
      <div className="blur_back cardBgImg_back"></div>
    </div>
  </>
);
}

export default Cards;