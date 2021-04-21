// import { useEffect, createContext, useState } from "react";
// import PetsNearYouContainer from './feed/pets_near_you/pets_near_you_container'

// export const AuthContext = createContext();
// const petFinderKey = "O3VtZUBdrAEgZNMxDVaJ4xtpBgb9DhqzJHZJBiAS1X92hQW1dM"
// const petFinderSecret = "rqux2BJLdfcABwqyDXa2ha6cESV0dunp8Wfo4ox2"

// function MyApp({ Component, pageProps }) {
//   const [accessToken, setAccessToken] = useState(null);

//   useEffect(() => {
//     const fetchAccessToken = async () => {
//       const params = new URLSearchParams();
//       params.append("grant_type", "client_credentials");
//       params.append("client_id", petFinderKey);
//       params.append("client_secret", petFinderSecret);
//       const petfinderRes = await fetch(
//         "https://api.petfinder.com/v2/oauth2/token",
//         {
//           method: "POST",
//           body: params
//         }
//       );
//         console.log(await petfinderRes.json());
//     };
//     fetchAccessToken();
//   }, []);


//   return (
//     <AuthContext.Provider value={accessToken}>
//       <PetsNearYouContainer {...pageProps} />
//     </AuthContext.Provider>
//   );
// }



// export default MyApp;