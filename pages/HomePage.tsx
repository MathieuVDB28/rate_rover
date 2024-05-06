export default function HomePage() {

    return (
        <div className="text-center flex-grow mt-40">
            <div className="flex flex-col justify-center">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter">Rate Rover</h1>
                    <h2 className="text-3xl md:text-5xl font-extrabold leading-tighter tracking-tighter mt-10"
                        data-aos="zoom-y-out">Convertissez et suivez toutes vos <span
                        className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">devises</span> favories !
                    </h2>
                </div>
            </div>
        </div>
    );
}
