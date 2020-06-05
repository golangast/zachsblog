const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export', {
        branch: 'master',
        repo: "https://github.com/golangast/zachsblog.git",
        user: {
            name: 'golangast',
            email: 'zendrulat@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)