import React, { useState } from "react";
import "../App.css";

export const Box = (props) => {
    const checked = useState(false)
    return (
        <input checked={checked} type="checkbox" id="teacher" name="teacher" value="teacher" />
    )
}