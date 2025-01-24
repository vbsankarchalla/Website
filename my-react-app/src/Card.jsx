import profilepic from './assets/Profile Pic.jpeg'

function Card(){
  return(
    <div className="card">
      <img className='card-image' src={profilepic} alt="profile picture" />
      <h2 className='card-title'>Sankar</h2>
      <p className='card-text'>This is my second session on React</p>
    </div>
  );

}

export default Card