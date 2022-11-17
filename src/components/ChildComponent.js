import React from 'react'
import GrandChildComponent1 from './GrandChildComponent1'
import GrandChildComponent2 from './GrandChildComponent2'
class ChildComponent extends React.Component {
   render() {
        return(
            <>
            <h2>i am child</h2>
            <GrandChildComponent1 />
            <GrandChildComponent2 name='reactprop' bgcolor='pink' />
            <GrandChildComponent2 name='reactprop2' />
            </>
           
        )
    }
}
export default ChildComponent;