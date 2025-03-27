import { Octokit } from "@octokit/core"

const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GIT_TOKEN
});

export const getCommits = async (repo:string) => {
    if (!repo && repo.match("")){
        return "Repo name is not passed."
    }

    try {
        const response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
            owner: "CheXiangHeck",
            repo: repo,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })

        return response.data;
    } catch (error) {
        return error;
    }
}