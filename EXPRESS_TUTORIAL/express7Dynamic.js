const express =require('express');
const path =require('path');
const app=express();  // make it executable function
const publicPath=path.join(__dirname,'public');
app.set('view engine','ejs');
app.get('' , (req,resp)=>{
    resp.sendFile(`${publicPath}/home.html`);
});
app.get('/about' , (req,resp)=>{
    resp.sendFile(`${publicPath}/about.html`);
});

app.get('/profile' , (req,resp)=>{                            
    resp.render('profile');
});
app.get('/matchProfile' , (req,resp)=>{
const user={
    name:'anil',
    email:'anhdjd@gmail.com',
    city:'jammu',
    skills:['php','js','c++']
}
    resp.render('matchProfile', {user});
});

app.get('/profileDynamic' , (req,resp)=>{
    const user={
        name:'sonia',
        email:'sonia@gmail.com',
        city:'jammu',
        skills:['php','js','c++']
    }
        resp.render('profileDynamic', {user});
    });

app.get('/login' , (req,resp)=>{                            
    resp.render('login');
});


app.get('*' , (req,resp)=>{
    resp.sendFile(`${publicPath}/noPage.html`);
});
app.listen(8000);