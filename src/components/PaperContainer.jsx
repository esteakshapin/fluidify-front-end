import React from 'react'
import './PaperContainer.css'

function PaperContainer(props) {
    return (
        <div class="paperContianer">
            {props.children}
        </div>
    )
}

export default PaperContainer;