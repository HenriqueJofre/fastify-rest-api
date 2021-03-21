// Demo data
let blogs = [
    {
        id: 1,
        title: 'This is an experiment 2'
    },
    {
        id: 2,
        title: 'This is an experiment'
    },
    {
        id: 3,
        title: 'Fastify is pretty cool'
    },
    {
        id: 4,
        title: 'Just another blog, yea!'
    }
]

// Handlers
const get = async (req, reply) => {
    const id = Number(req.params.id) // blog ID
    const blog = blogs.find(blog => blog.id === id)
    return blog
}

const getAll = async (req, reply) => {
    return blogs
}

const add = async (req, reply) => {
    const id = blogs.length + 1 // generate new ID
    const newBlog = {
        id,
        title: req.body.title
    }

    blogs.push(newBlog)
    return newBlog
}

const update = async (req, reply) => {
    const id = Number(req.params.id)
    const blogUp = blogs.find(blog => blog.id === id);
    if(blogUp){
        return blogUp.title = req.body.title;
    }
}

const del = async (req, reply) => {
    let idURL = parseInt(req.params.id);
    let idDel = blogs.findIndex(element => element.id === idURL);
    if(blogs.splice(idDel,1)){
        return { msg: `Blog with ID ${idURL} is deleted` }
    } 
}

module.exports = {
    getAll,
    get,
    add,
    update,
    del
}