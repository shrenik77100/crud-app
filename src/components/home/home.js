import React from 'react'

const HomePage = () => {
    return (
        <div className="row text-center mt-5">
            <h1>Welcome to My Project</h1>
            <p className="text-primary">Designed by Shrenik</p>

            <div className="mx-auto">
                <input type="button" value="Contact Me" className="btn btn-outline-primary m-3" style={{"width":"140px"}}/>
            </div>

        </div>
    )
}

export default HomePage;