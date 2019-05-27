const path = require('path');

exports.createPages  = async({graphql, actions}) => {
 const {createPage} = actions;
 const {data} = await graphql(`
 query{
  slugs:allContentfulTour{
    edges{
      node{
        slug
      }
    }
  }
}
 `)
 data.slugs.edges.forEach(({node}) => {
   createPage({
    path: `tours/${node.slug}`,
    component: path.resolve('./src/templates/tour-template.js'),
    context: {
     slug: node.slug,
    }
   })
 })
}