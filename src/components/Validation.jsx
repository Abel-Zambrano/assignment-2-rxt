import React from 'react';

const Validation = (props) => {
    let validationMessage = <p>Text too long!</p>;

    if (props.inputLength <= 5) {
        validationMessage = <p>Text too short...</p>
    }

    return (
        <div>
            {validationMessage}
        </div>
    )
};

export default Validation;