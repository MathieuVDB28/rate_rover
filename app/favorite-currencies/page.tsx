
export default async function FavoriteCurrencies(){
    const favoriteCurrencies = await fetch('/api/favorite-currencies', {
        headers: {
            method: 'GET',
        }})
        .then((res) => res.json())
    console.log(favoriteCurrencies);

    return (
        <div className="text-center flex-grow mt-20">
            <div className="flex flex-col justify-center">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter">Vos devises favorites</h1>
                </div>
            </div>
        </div>
    );
}