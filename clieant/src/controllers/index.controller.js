const controller = {};
const title = 'INDEX DESDE EL SERVIDOR Y UNA VARIABLE';
controller.index = (res, req)=> {
    res.render('index', title);
}

module.exports = controller;

//TyCgllraOuS7ImWe
//mongodb+srv://Grupo8:<password>@cluster0.87ivs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
