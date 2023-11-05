
const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center ">
            <h1 className="text-2xl">Welcome!</h1>
            <div className="flex justify-center gap-1">
                <a className="btn btn-primary" href="/plans/new">Create plan</a>
                <a className="btn btn-primary" href="/workouts/new">Create workout</a>
            </div>
        </div>
    )
}


export default Home;