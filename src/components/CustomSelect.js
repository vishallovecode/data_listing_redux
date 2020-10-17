import React from 'react';

const CustomSelect = (props) => {
    return(
        <select {...props}>
            {(props.filter || []).map((item,i) => (
                <option
                    key={i}
                    value={item.key}
                    selected={props.defaultValue==item.key}
                >
                    {item.value}
                   
                </option>
            ))}
        </select>

    );
};

export default CustomSelect;