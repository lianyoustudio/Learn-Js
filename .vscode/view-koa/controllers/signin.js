module.exports = {
    'POST /signin' : async(ctx, next) =>{
        var email = ctx.request.body.email || '';
        var password = ctx.request.body.password || '';

        if(email === 'admin@example.com' && password === '123456')
        {
            ctx.render('signin-ok.html',  {
                title : 'Sign in OK!',
                name : 'Mr. Smith'
            })
        }
        else{
            ctx.render('signin-failed.html', {
                title : 'Sign in failed!'
            })
        }
    }
}