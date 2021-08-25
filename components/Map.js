import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({});

    // Transform searchResults Obj into longitude latitude only obj
    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    // center longitude & latitude of all place
    const center = getCenter(coordinates);

    const [viewPort, setViewPort] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/kreivc/cksr66rd81x2d17owb912ofi2"
            mapboxApiAccessToken={process.env.MAPBOX_KEY}
            {...viewPort}
            onViewportChange={(nextViewport) => setViewPort(nextViewport)}
        >
            {searchResults.map((result) => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p
                            role="img"
                            onClick={() => setSelectedLocation(result)}
                            className="cursor-pointer text-2xl animate-bounce"
                            aria-label="push-pin"
                        >
                            📌
                        </p>
                    </Marker>

                    {/* popup when click marker */}
                    {selectedLocation.long === result.long ? (
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                        >
                            <div className="relative h-32 w-full">
                                <Image
                                    src={result.img}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="w-40 font-semibold text-sm">
                                <p>{result.title}</p>
                                <p className="flex items-center">
                                    <StarIcon className="h-5 text-red-400" />
                                    {result.star}
                                </p>
                            </div>
                        </Popup>
                    ) : (
                        false
                    )}
                </div>
            ))}
        </ReactMapGL>
    );
}

export default Map;
