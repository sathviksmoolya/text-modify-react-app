import React from 'react'

function Alert(props) {
    const capital=(word)=>{
        const str = word.charAt(0).toUpperCase();
        return str + word.slice(1);

    }
    return (
        // and is used becuse of the initial null type of the alert 
            props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capital(props.alert.type)}</strong>: {props.alert.msg}
            </div>
    )
}

export default Alert
