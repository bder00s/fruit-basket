import React from "react";


function ActionButton({buttonText, functionPlaceholder}) {
    return (
        <button
            onClick={() => functionPlaceholder}
        >
            {buttonText}
        </button>
    )
}

export default ActionButton