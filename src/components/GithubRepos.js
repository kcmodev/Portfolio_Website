import React from 'react';
import GithubRequest from './GithubRequest';

const repos_title_text = 'A few of the GitHub Repos I am currently working on:';
const repos_to_display = [
    'Portfolio_Website',
    'cvd_detection_ml_app_206',
    'Package_Routing_Program'
];

const GithubRepos = () => {
    return (
        <>
            <div className="content_container">
                <p id="section_title_text">{repos_title_text}</p>
            </div>
            <GithubRequest props={repos_to_display} />
        </>
    );
};

export default GithubRepos;
