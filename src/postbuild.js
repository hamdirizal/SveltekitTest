import path from 'path';
import fs from 'fs';
import { cwd } from 'process';

async function run(){
	copyRedirectRulesToTheBuildDirectory();
}


/**
 * Copying redirection rules to the build folder. This file is needed by the Netlify service.
 */
function copyRedirectRulesToTheBuildDirectory(){
	let buildFolder = path.join(cwd(), 'build');
	let originalFile = path.join(cwd(), 'src', '_redirects');
	let targetFile = path.join(buildFolder,'_redirects');
	console.info('Copying redirection file ',originalFile, ' => ', targetFile );
	if(!fs.existsSync( buildFolder )) {
		fs.mkdirSync( buildFolder )
	}
	fs.copyFileSync(originalFile, targetFile , fs.constants.COPYFILE_FICLONE);
}

run();