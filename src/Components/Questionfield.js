import React from "react";

function Questionfield({ fieldID, fieldTitle, fieldType, content, setContent}) {
    return (
        <>
<label htmlFor={fieldID}>
    {fieldTitle}

            <input
                id={fieldID}
                type={fieldType}
                value={content}
                onChange={(e) => setContent(e.target.value)}
/>
</label>






        </>

    )
}

export default Questionfield