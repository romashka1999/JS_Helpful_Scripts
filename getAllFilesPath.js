const { readdirSync, statSync } = require('fs')
const { join } = require('path')

const getAllFilesPathSync = (baseUrl, extension = new RegExp('.', 'g'), files = readdirSync(baseUrl), result = []) => {

    if(!baseUrl) {
        const err = new Error('BaseUrl parameter is required');
        return err
    }

    files.forEach( 
        (file) => {
            const newBaseUrl = join(baseUrl, file)
            if ( statSync(newBaseUrl).isDirectory() ) {
                result = getAllFilesPathSync(newBaseUrl, extension, readdirSync(newBaseUrl), result);
            } else {
                file.substr(-1*(extension.length+1)).match(extension) ? result.push(newBaseUrl) : null ;
            }
        }
    )

    return result
}

/********************** Driver Code *********************/
console.log(getAllFilesPathSync('./','js'));








