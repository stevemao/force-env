export default (name: string) => {
    if (process.env[name] == null) {
        throw `${name} is not set as an environment variable. Did you forget to add it to .env?`
    }
    
    return process.env[name]
}
