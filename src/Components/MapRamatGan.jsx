import "./map-ramat-gan.css"

const MapRamatGan = () => {

    return (
        <div>    
            <div className="map-ramat-gan-overlay">
                <div className="map-ramat-gan-modal">
                <div className="map-RamatGan-modal-txt">
                        <h1>HOW TO REACH US:</h1>
                        <h2>PAZA RAMAT GAN</h2>
                        <h4 className="since-header">since 2003</h4>
                    </div>
                    <div class="mapouter">
                       <div class="gmap_canvas">
                            <iframe class="gmap_iframe" 
                                width="100%" 
                                frameborder="0" 
                                scrolling="no" 
                                marginheight="0" 
                                marginwidth="0" 
                                src="https://maps.google.com/maps?width=604&amp;height=581&amp;hl=en&amp;q=ramat 
                                gan cyberpro&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe>
                            <h4>rothschild st no.68, Ramat Gan</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MapRamatGan;