import React, { forwardRef } from 'react';

export const Input = forwardRef(({ type = "text", placeholder, name }, ref) => {
    return <input type={type} ref={ref} placeholder={placeholder} name={name} />
});