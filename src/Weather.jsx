import calTime from "./helper";
import { MdHistory } from "react-icons/md";

function Weather({ fetch, weather, load, loadHand,setHam }) {


    function sendCity(e) {
        e.preventDefault();
        if (e.target.city.value != "") {
            loadHand(true)
            fetch(e.target.city.value)
            e.target.city.value = ""
        } else {
            e.target.city.focus();
        }
    }

    return (

        <div className="col-span-3">
            <form action="" onSubmit={sendCity}>
                <div className="flex justify-center w-full">
                    <MdHistory className="border border-1 border-black md:hidden cursor-pointer w-12 h-12" onClick={() => setHam(true)}/>
                    <input type="text" className="w-full shadow-md rounded-md p-3" name="city" placeholder="Type city here" />
                    <button className="text-right ms-5 p-3 text-white rounded bg-blue-700" type="submit">Search</button>
                </div>
            </form>

            {weather == null ? <h1 className="font-serif text-5xl mt-3 text-gray-500 text-center">Please enter city</h1> :
                weather == "City not found" ?
                    <h1 className="font-serif text-5xl mt-3 text-gray-500 text-center">City not found</h1> :
                    load == true ?
                        <>
                            <div role="status" className="w-full mt-32 justify-center flex">
                                <svg aria-hidden="true" class="inline w-32 h-32 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>
                        </>
                        :
                        <>
                            {/* component */}
                            <div className="min-h-screen flex items-center justify-center" style={
                                {
                                    background: "lightblue"
                                }
                            }>
                                <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs">
                                    <div className="font-bold text-xl">{weather.name}</div>
                                    <div className="text-sm text-gray-500">{new Date().toDateString()}</div>
                                    <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">

                                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                                    </div>
                                    <div className="flex flex-row items-center justify-center mt-6">
                                        <div className="font-medium text-6xl">{weather.main.temp}°C</div>
                                        <div className="flex flex-col items-center ml-6">
                                            <div>Cloudy</div>
                                            <div className="mt-1">
                                                <span className="text-sm">
                                                    <i className="far fa-long-arrow-up" />
                                                </span>
                                                <span className="text-sm font-light text-gray-500">{weather.main.temp_max}°C</span>
                                            </div>
                                            <div>
                                                <span className="text-sm">
                                                    <i className="far fa-long-arrow-down" />
                                                </span>
                                                <span className="text-sm font-light text-gray-500">{weather.main.temp_min}°C</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between mt-6">
                                        <div className="flex flex-col items-center">
                                            <div className="font-medium text-sm">Wind</div>
                                            <div className="text-sm text-gray-500">{weather.wind.speed}k/h</div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="font-medium text-sm">Humidity</div>
                                            <div className="text-sm text-gray-500">{weather.main.humidity}%</div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="font-medium text-sm">Visibility</div>
                                            <div className="text-sm text-gray-500">{weather.visibility}m</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>}

        </div>
    )
}
export default Weather;