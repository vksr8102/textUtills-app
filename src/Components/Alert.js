import React from 'react'

function alert(props) {
    const Captelise = (word)=>{
        const lower = word.toLowerCase();
return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height:'50px'}}>
{props.alert&&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
<strong>{Captelise(props.alert.type)}</strong>:{props.alert.msg}
</div>}
</div>
  )
}

export default alert
