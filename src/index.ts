#!/usr/bin/env node
import { getRepoData } from './commands/repo';
import { getUserData } from './commands/user';
import { formatOutput } from './utils/formatter';
import { Command } from 'commander';

const program = new Command();

program
  .name('github')
  .description('Github 정보를 분석하고 가져오는 CLI')
  .version('0.0.0', '-v', '--version')
  .showHelpAfterError();

program
  .command('repo')
  .description('Github 레포지토리 정보를 가져옵니다.')
  .argument('<repo>', 'Github 레포지토리를 이름 (owner/repo 형식)')
  .option('--json', 'JSON 형식으로 출력')
  .action(async (repo, options) => {
    try {
      const data = await getRepoData(repo);
      console.log(formatOutput(data, options.json));
    } catch (error) {
      console.error('Error: ', error instanceof Error ? error.message : error);
    }
  });

program
  .command('user')
  .description('Github 사용자 정보를 가져옵니다.')
  .argument('<username>', 'Github 사용자 이름 (username 형식)')
  .option('--json', 'JSON 형식으로 출력')
  .action(async (username, options) => {
    try {
      const data = await getUserData(username);
      console.log(formatOutput(data, options.json));
    } catch (error) {
      console.error('Error: ', error instanceof Error ? error.message : error);
    }
  });

program.parse();
