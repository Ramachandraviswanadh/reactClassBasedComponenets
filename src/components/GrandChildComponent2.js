import React from 'react'


class GrandChildComponent2 extends React.Component {
constructor(props){
    super(props)
    
}

    render() {
        const {backcol,nam}=this.props
        return(
            <>
                 <p style={{backgroundColor:this.props.bgcolor}}>i love {this.props.name}</p>
                    <p style={{backgroundColor:'red'}}>i love {this.props.name}</p>
                    <p style={{backgroundColor:backcol}}>i love {nam}</p>
            </>
            
        )
    }
}
export default GrandChildComponent2;