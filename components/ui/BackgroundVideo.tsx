import React from 'react'

export const BackgroundVideo = () => {
    return (
        <video
            muted
            playsInline
            loop
            autoPlay
            controls={false}

            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
                opacity: 0.5, // establece la opacidad del video
                objectFit: "cover", // hace que el video sea responsive y ocupe todo el ancho y alto disponibles
            }}
        >
            <source src={`https://res.cloudinary.com/djk4q3tys/video/upload/v1682572216/w08qbehub51afu2yjdsu.mp4`} type="video/mp4" />
        </video>
    )
}
