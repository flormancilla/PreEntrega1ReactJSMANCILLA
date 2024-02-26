import auto from "../assets/images/espera.gif";

const Loading = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <img src={auto} alt="auto de f1" width={500}></img>
                </div>
            </div>
        </div>
    )
}

export default Loading;