import React from 'react'

export default function Button({
    onClick,
    name,
    className
}) {

    return (
        <button onClick={onClick} className={className} >{name}</button>
    )
}
