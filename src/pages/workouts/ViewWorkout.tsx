

const ViewWorkout = () => {
    return (
        <div className="w-8/12 mx-auto">
            <h1 className="text-4xl">View workout</h1>
            <div tabIndex={0} className="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content mb-5">
                <div className="collapse-title">
                    Varm opp 10 minutter
                </div>
                <div className="collapse-content">
                    <p>Start rolig og øk gjerne farten etterhvert!</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse bg-red-600 text-primary-content focus:bg-secondary focus:text-secondary-content mb-5">
                <div className="collapse-title">
                    Løp 45 sekunder hardt, 15 sekunder rolig
                </div>
                <div className="collapse-content">

                </div>
            </div>
            <div tabIndex={0} className="collapse bg-gre-600 text-primary-content focus:bg-secondary focus:text-secondary-content mb-5">
                <div className="collapse-title">
                    Løp rolig i 10-15 minutter
                </div>
                <div className="collapse-content">
                </div>
            </div>
        </div>
    )
}


export default ViewWorkout