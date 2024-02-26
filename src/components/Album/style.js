import { useMemo } from "react";

const useStyle = () => {
  const photoAlbumClasses = useMemo(() => {
    return {
      mainContainer: {
        width: "100%",
        height: "100vh",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundPosition: "center",
        background: "radial-gradient(#7cc5bd54,#be757270,#7cc5bd54,#be757270)",
      },
      title: {
        width: "100%",
        height: "20%",
        color: "#be7572",
        fontSize: "80px",
        fontWeight: "bold",
        fontFamily: "cursive",
        border: "1px solid #7cc5bd",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7cc5bd54",
      },
      album: {
        width: "100%",
        height: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      slider: {
        width: "95%",
        height: "65%",
      },
      photoContainer: {
        width: "300px",
        height: "200px",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)",
      },
      photo: {
        width: "90%",
        height: "100%",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      },
      infoContainer: {
        width: "500px",
        height:"80%",
        maxHeight: "fit-content",
        position: "absolute",
        zIndex:1,
        top:"20%",
        textAlign: "center",
        overflow: "hidden",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        background: "white"
      },
      photoInfo: {
        width: "100%",
        height: "50%",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      },
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };
  }, []);
  return { photoAlbumClasses };
};

export { useStyle };
