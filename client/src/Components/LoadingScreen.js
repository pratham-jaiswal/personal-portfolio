import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader"

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
        <PropagateLoader
            color="rgb(225, 0, 225)"
            loading
            cssOverride={{
                transform: 'scale(2)'
            }}
            size={10}
            speedMultiplier={0.8}
        />
    </div>
  )
}