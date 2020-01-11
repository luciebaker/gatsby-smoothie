const path = require ('path')
exports.createPages = ({ graphql, actions }) => {
    const {createPage} = actions
    const smoothieTemplate = path.resolve('src/templates/smoothieTemplate.js')

    return graphql(`
    {
        allSmoothie {
            edges {
                node {
                id
                }
            }
        }
    }
    `).then((result) => {
        if(result.errors){
            throw result.errors
        }

        result.data.allSmoothie.edges.forEach(smoothie => {
            createPage ({
                path: `/smoothie/${smoothie.node.id}`,
                component: smoothieTemplate,
                context: {smoothieId: smoothie.node.id}
            })
        })
    })
}