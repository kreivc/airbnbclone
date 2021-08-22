function Footer() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
                <div className="space-y-4 text-xs text-gray-800">
                    <h5 className="font-bold">ABOUT</h5>
                    <p>How Airbnb Work</p>
                    <p>Newsroom</p>
                    <p>Investor</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb Luxe</p>
                </div>
                <div className="space-y-4 text-xs text-gray-800">
                    <h5 className="font-bold">COMMUNITY</h5>
                    <p>How Airbnb Work</p>
                    <p>Newsroom</p>
                    <p>Investor</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb Luxe</p>
                </div>
                <div className="space-y-4 text-xs text-gray-800">
                    <h5 className="font-bold">HOST</h5>
                    <p>How Airbnb Work</p>
                    <p>Newsroom</p>
                    <p>Investor</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb Luxe</p>
                </div>
                <div className="space-y-4 text-xs text-gray-800">
                    <h5 className="font-bold">SUPPORT</h5>
                    <p>How Airbnb Work</p>
                    <p>Newsroom</p>
                    <p>Investor</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb Luxe</p>
                </div>
            </div>
            <div className="flex items-center justify-center h-16 bg-gray-200">
                <h3 className="text-gray-700 font-medium text-sm md:text-base">
                    KreivcAirbnb &copy; {new Date().getFullYear()} All rights
                    reserved.
                </h3>
            </div>
        </>
    );
}

export default Footer;
