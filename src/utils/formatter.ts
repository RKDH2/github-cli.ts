import { OutputData } from '../types';
import chalk from 'chalk';

export function formatOutput(data: OutputData, isJson: boolean) {
  if (isJson) {
    return JSON.stringify(data, null, 2);
  }

  switch (data.type) {
    case 'repo':
      return `
    Repo: ${chalk.blue.bold(data.name)} (${chalk.gray(data.owner)})
    Profile_url: ${chalk.blueBright(data.profile_url)}
    Repo_url: ${chalk.magentaBright(data.repo_url)}

    Visibility: ${chalk.red(data.visibility)}
    default_branch: ${chalk.yellowBright(data.default_branch)}
    License: ${chalk.white(data.license)}
    Stars: ${chalk.yellow(data.stars)}
    Forks: ${chalk.green(data.forks)}
    Open_issues: ${chalk.redBright(data.open_issues)}
    Language: ${chalk.cyan(data.language)}
    Last Updated: ${chalk.magenta(data.updated_at)}
    `;
    case 'user':
      return `
      User: ${chalk.blue.bold(data.name)} (${chalk.gray(data.login)})
      Profile_url: ${chalk.magenta(data.profile_url)}
      Company: ${chalk.whiteBright(data.company)}
      Blog: ${chalk.blue(data.blog)}
      Location: ${chalk.yellow(data.location)}
      Email: ${chalk.red(data.email)}
      Bio: ${chalk.cyan(data.bio)}
      Public Repos: ${chalk.yellow(data.public_repos)}
      Followers: ${chalk.green(data.followers)}
      Following: ${chalk.redBright(data.following)}
      Created at: ${chalk.gray(data.created_at)}
      Updated at: ${chalk.gray(data.updated_at)}
      `;
  }
}
