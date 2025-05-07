import MapLocationImage from "../assets/marker.png";

export default function Entry (props) {
    return (
        <div className="contents">
            <article className="travel-log">
                <div className="travel-log_img-cont">
                    <img className="travel-log_image" src={props.img['src']} alt={props.img['alt']}/>
                </div>
                <div className="travel-log-card-details">
                    <div className="location-cont">
                        <img src={ MapLocationImage } alt="map location image" />
                        <div className="location-details">
                            <span>{props.country}</span>
                            <a  
                                href={props.googleMapsLink}
                                target="_blank"
                                >
                                View on Google Maps
                            </a>
                        </div>
                    </div>
                    <h1 className="location-name">
                        {props.title}
                    </h1>
                    <p className="visit-date">
                        {props.dates}
                    </p>
                    <p className="location-desc">
                        {props.text}
                    </p>
                </div>
            </article>
        </div>
    )
}