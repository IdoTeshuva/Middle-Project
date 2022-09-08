import "./map-beer-tuvia.css"

const MapBeerTuvia = () => {

    return (
        <div>
            <div className="map-Tuvia-overlay">
                <div className="map-Tuvia-modal">
                    <div className="map-Tuvia-modal-txt">
                        <h1>HOW TO REACH US:</h1>
                        <h2>PAZA BEER TUVIA</h2>
                        <h4 className="since-header">since 1973</h4>
                    </div>
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe class="gmap_iframe" 
                                width="100%" frameborder="0" 
                                scrolling="no" 
                                marginheight="0" 
                                marginwidth="0" 
                                src="https://maps.google.com/maps?width=715&amp;height=710&amp;hl=en&amp;q=beer 
                                tuvia high school&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe>
                            <h4>Hamishtara st no.3, Beer Tuvia</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapBeerTuvia;

