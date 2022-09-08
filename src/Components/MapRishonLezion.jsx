import "./map-rishon.css"

const MapRishonLezion = () => {

    return (
        <div>
            <div className="map-rishon-overlay">
                <div className="map-rishon-modal">
                    <div className="map-Rlz-modal-txt">
                        <h1>HOW TO REACH US:</h1>
                        <h2>PAZA RISHON LEZION</h2>
                        <h4 className="since-header">since 1948</h4>
                    </div>
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe class="gmap_iframe" 
                                width="100%" frameborder="0" 
                                scrolling="no" 
                                marginheight="0" 
                                marginwidth="0" 
                                src="https://maps.google.com/maps?width=604&amp;height=281&amp;hl=en&amp;q=rishon
                                lezion mall zahav&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe>
                            <h4>Vigodski st no.17, Rishon Lezion</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapRishonLezion;