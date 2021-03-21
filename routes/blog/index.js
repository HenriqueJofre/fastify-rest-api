const blogController = require('../../controller/blog');
const blogValidations = require('./validations');

const routes = [{
    method: 'GET',
    url: '/api/blog',
    handler: blogController.getAll
},
{
    method: 'GET',
    url: '/api/blog/:id',
    schema: blogValidations.getBlogValidation,
    handler: blogController.get
},
{
    method: 'POST',
    url: '/api/blog',
    schema: blogValidations.addBlogValidation,
    handler: blogController.add
},
{
    method: 'PUT',
    url: '/api/blog/:id',
    handler: blogController.update
},
{
    method: 'DELETE',
    url: '/api/blog/:id',
    handler: blogController.del
}
]
module.exports = routes