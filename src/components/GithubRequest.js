// import React, { useEffect, useState } from 'react';
// const config = require('../config/config.js');
// const github_username = config.github_username;
// const github_pat = 'token ' + config.github_pat;
//
// const GithubRequest = (values) => {
//   let repo_list = [...values.props];
//
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [repos, setRepos] = useState([]);
//
//   const headers = new Headers();
//   headers.append('Accept', 'application/vnd.github.v3+json');
//   headers.append('User-Agent', github_username);
//   headers.append('Authorization', github_pat);
//
//   const request = new Request(
//     `https://api.github.com/users/${github_username}/repos?sort=updated`,
//     {
//       method: 'GET',
//       headers: headers,
//       mode: 'cors',
//       cache: 'default'
//     }
//   );
//
//   useEffect(() => {
//     fetch(request)
//       .then((response) => response.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setRepos(result);
//         },
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       );
//   });
//
//   if (error) {
//     return (
//       <>
//         <p id="section_title">Error: {error.message}</p>
//       </>
//     );
//   } else if (!isLoaded) {
//     return (
//       <>
//         <p id="section_title">Loading...</p>
//       </>
//     );
//   } else {
//     return (
//       <>
//         {repos.map((item) => {
//           let repo_name = item.name;
//           let repo_owner_username = item.owner.login;
//           let repo_url = item.html_url;
//           let repo_languages = item.languages_url;
//
//           if (repo_list.includes(repo_name)) {
//             return (
//               <>
//                 <p id="section_text">title: {repo_name}</p>
//                 <p id="section_text">url: {repo_url}</p>
//                 <p id="section_text">user: {repo_owner_username}</p>
//                 <p id="section_text">languages: {repo_languages}</p>
//               </>
//             );
//           }
//         })}
//       </>
//     );
//   }
// };
//
// export default GithubRequest;
