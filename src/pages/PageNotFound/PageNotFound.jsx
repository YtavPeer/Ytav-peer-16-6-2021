import './PageNotFound.scss'

export const PageNotFound = () => {

  const image_url = 'http://i.giphy.com/l117HrgEinjIA.gif';

  return (
    <div className="FourOhFour">
      <div className="bg" style={{ backgroundImage: 'url(' + image_url + ')' }}></div>
      <div className="code">404
      </div>
    </div>
  )
}

