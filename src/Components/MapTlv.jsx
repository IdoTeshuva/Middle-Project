import "./map-tlv.css"

const MapTlv = () => {

    return (
        <div>
            <div className="map-tlv-overlay">
                <div className="map-tlv-modal">
                    <div className="map-Tlv-modal-txt">
                        <h1>HOW TO REACH US:</h1>
                        <h2>PAZA TEL AVIV</h2>
                        <h4 className="since-header">since 1999</h4>
                    </div>
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe class="gmap_iframe" 
                                width="100%" 
                                frameborder="0" 
                                scrolling="no" 
                                marginheight="0" 
                                marginwidth="0" 
                                src="https://maps.google.com/maps?width=604&amp;height=281&amp;hl=en&amp;q=tel 
                                aviv azrielli&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe>
                            <h4>Alenby st no.120, Tel Aviv</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapTlv;