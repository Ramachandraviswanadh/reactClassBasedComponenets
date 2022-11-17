import React from 'react'


class GrandChildComponent1 extends React.Component {
    render() {

        let parastyle = {backgroundColor:'blue' }
        return(
            <>
                
                    <p style={parastyle}>i love js</p>
            </>
            
        )
    }
}
export default GrandChildComponent1;